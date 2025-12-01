package com.seat.seatfinder.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Configuration
public class VenueConfig {

    @Value("${venue.url.tp}")
    private String venueUrlTp;

    @Value("${venue.url.tp2}")
    private String venueUrlTp2;

    @Value("${venue.url.main}")
    private String venueUrlMain;

    @Value("${venue.url.bio}")
    private String venueUrlBio;

    @Value("${venue.url.ub}")
    private String venueUrlUb;

    @Value("${venue.url.fshet}")
    private String venueUrlFshet;

    private static final List<String> SESSIONS = List.of("FN", "AN");

    public Map<String, String> getVenueUrls() {
        Map<String, String> venues = new HashMap<>();
        venues.put("tp", venueUrlTp);
        venues.put("tp2", venueUrlTp2);
        venues.put("main", venueUrlMain);
        venues.put("bio", venueUrlBio);
        venues.put("ub", venueUrlUb);
        venues.put("fshet", venueUrlFshet);
        return venues;
    }

    public List<String> getSessions() {
        return SESSIONS;
    }
}
