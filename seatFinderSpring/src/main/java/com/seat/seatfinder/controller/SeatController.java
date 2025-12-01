package com.seat.seatfinder.controller;

import com.seat.seatfinder.config.VenueConfig;
import com.seat.seatfinder.dto.ErrorResponse;
import com.seat.seatfinder.dto.SeatDetails;
import com.seat.seatfinder.dto.SeatRequest;
import com.seat.seatfinder.dto.SeatResponse;
import com.seat.seatfinder.service.ScraperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.concurrent.*;
import java.util.concurrent.atomic.AtomicReference;

@RestController
@RequestMapping("/api")
public class SeatController {

    @Autowired
    private ScraperService scraperService;

    @Autowired
    private VenueConfig venueConfig;

    private final ExecutorService executorService = Executors.newFixedThreadPool(
            Runtime.getRuntime().availableProcessors() * 2
    );

    @GetMapping("/health")
    public ResponseEntity<Map<String, Object>> health() {
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Server is running");
        return ResponseEntity.ok(response);
    }

    @PostMapping("/get-seat")
    public ResponseEntity<?> getSeatDetails(@RequestBody SeatRequest request) {
        String date = request.getDate();
        String registerNumber = request.getRegisterNumber();

        if (date == null || date.isEmpty() || registerNumber == null || registerNumber.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ErrorResponse(false, "Missing date or register number"));
        }

        try {
            Map<String, String> venueUrls = venueConfig.getVenueUrls();
            List<String> sessions = venueConfig.getSessions();
            
            CountDownLatch latch = new CountDownLatch(1);
            AtomicReference<SeatDetails> result = new AtomicReference<>(null);
            AtomicReference<List<CompletableFuture<Void>>> futures = new AtomicReference<>(new ArrayList<>());

            for (String session : sessions) {
                for (Map.Entry<String, String> entry : venueUrls.entrySet()) {
                    String venue = entry.getKey();
                    String url = entry.getValue();

                    CompletableFuture<Void> future = CompletableFuture.runAsync(() -> {
                        if (result.get() != null) return;
                        
                        try {
                            SeatDetails details = scraperService.fetchSeatInfo(url, venue, date, session, registerNumber);
                            if (details != null && result.compareAndSet(null, details)) {
                                latch.countDown();
                            }
                        } catch (Exception e) {
                        }
                    }, executorService);

                    futures.get().add(future);
                }
            }

            boolean foundInTime = latch.await(3, TimeUnit.SECONDS);
            
            SeatDetails foundSeat = result.get();
            if (foundSeat != null) {
                return ResponseEntity.ok(new SeatResponse(true, foundSeat));
            }

            if (!foundInTime) {
                CompletableFuture.allOf(futures.get().toArray(new CompletableFuture[0]))
                        .get(2, TimeUnit.SECONDS);
                foundSeat = result.get();
                if (foundSeat != null) {
                    return ResponseEntity.ok(new SeatResponse(true, foundSeat));
                }
            }

            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new SeatResponse(false, 
                            "Register number not found in any venue/session for this date or exam is in Biotech Block"));

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new SeatResponse(false, "Server error"));
        }
    }
}
