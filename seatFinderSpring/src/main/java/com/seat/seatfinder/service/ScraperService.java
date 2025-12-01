package com.seat.seatfinder.service;

import com.seat.seatfinder.dto.SeatDetails;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public class ScraperService {

    public SeatDetails fetchSeatInfo(String url, String venue, String date, String session, String registerNumber) {
        try {
            if (url == null || url.isEmpty()) {
                return null;
            }
            
            boolean hasSeatingPath = url.contains("/seating/");
            String refererUrl = String.format("https://examcell.srmist.edu.in/%s%s/bench/get_datewise_report.php",
                    venue, hasSeatingPath ? "/seating" : "");

            Connection.Response response = Jsoup.connect(url)
                    .header("Content-Type", "application/x-www-form-urlencoded")
                    .header("Origin", "https://examcell.srmist.edu.in")
                    .header("Referer", refererUrl)
                    .header("User-Agent", "Mozilla/5.0")
                    .data("dated", date)
                    .data("session", session)
                    .data("submit", "")
                    .method(Connection.Method.POST)
                    .timeout(2000)
                    .ignoreContentType(true)
                    .ignoreHttpErrors(true)
                    .maxBodySize(0)
                    .execute();

            Document doc = response.parse();
            Elements tables = doc.select("table#maintable");

            for (Element table : tables) {
                Elements prevElements = table.previousElementSiblings();
                String roomInfo = "";
                String extractedDate = "";
                for (Element prev : prevElements) {
                    if (prev.tagName().equals("div") && prev.id().equals("datessesinfo")) {
                        Element h4 = prev.selectFirst("h4");
                        if (h4 != null) {
                            String fullText = h4.text().replaceAll("\\s+", " ").trim().replaceAll("&nbsp", "");
                            
                            if (fullText.contains("DATE")) {
                                int dateIndex = fullText.indexOf("DATE");
                                int sessionIndex = fullText.indexOf("SESSION");
                                if (dateIndex != -1 && sessionIndex != -1) {
                                    extractedDate = fullText.substring(dateIndex, sessionIndex)
                                            .replace("DATE :", "")
                                            .replace("DATE:", "")
                                            .trim();
                                }
                            }
                            
                            if (fullText.contains("ROOM")) {
                                int roomEnd = fullText.indexOf("DATE");
                                if (roomEnd != -1) {
                                    roomInfo = fullText.substring(0, roomEnd).trim();
                                } else {
                                    roomInfo = fullText;
                                }
                            }
                        }
                        break;
                    }
                }

                Elements rows = table.select("tr");
                for (Element row : rows) {
                    Elements cells = row.select("td");
                    if (cells.size() > 2) {
                        String cellText2 = cells.get(2).text().trim();
                        if (cellText2.equals(registerNumber)) {
                            return new SeatDetails(
                                    venue,
                                    session,
                                    roomInfo,
                                    cells.get(1).text().trim(),
                                    registerNumber,
                                    extractedDate
                            );
                        }
                    }

                    if (cells.size() > 5) {
                        String cellText5 = cells.get(5).text().trim();
                        if (cellText5.equals(registerNumber)) {
                            return new SeatDetails(
                                    venue,
                                    session,
                                    roomInfo,
                                    cells.get(4).text().trim(),
                                    registerNumber,
                                    extractedDate
                            );
                        }
                    }
                }
            }

            return null;
        } catch (Exception e) {
            return null;
        }
    }
}
