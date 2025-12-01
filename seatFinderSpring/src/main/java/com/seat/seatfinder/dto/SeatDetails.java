package com.seat.seatfinder.dto;

public class SeatDetails {
    private String venue;
    private String session;
    private String roomInfo;
    private String seatNo;
    private String registerNumber;
    private String date;

    public SeatDetails() {
    }

    public SeatDetails(String venue, String session, String roomInfo, String seatNo, String registerNumber, String date) {
        this.venue = venue;
        this.session = session;
        this.roomInfo = roomInfo;
        this.seatNo = seatNo;
        this.registerNumber = registerNumber;
        this.date = date;
    }

    public String getVenue() {
        return venue;
    }

    public void setVenue(String venue) {
        this.venue = venue;
    }

    public String getSession() {
        return session;
    }

    public void setSession(String session) {
        this.session = session;
    }

    public String getRoomInfo() {
        return roomInfo;
    }

    public void setRoomInfo(String roomInfo) {
        this.roomInfo = roomInfo;
    }

    public String getSeatNo() {
        return seatNo;
    }

    public void setSeatNo(String seatNo) {
        this.seatNo = seatNo;
    }

    public String getRegisterNumber() {
        return registerNumber;
    }

    public void setRegisterNumber(String registerNumber) {
        this.registerNumber = registerNumber;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
