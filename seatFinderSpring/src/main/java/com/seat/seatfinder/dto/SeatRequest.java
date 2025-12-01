package com.seat.seatfinder.dto;

public class SeatRequest {
    private String date;
    private String registerNumber;

    public SeatRequest() {
    }

    public SeatRequest(String date, String registerNumber) {
        this.date = date;
        this.registerNumber = registerNumber;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getRegisterNumber() {
        return registerNumber;
    }

    public void setRegisterNumber(String registerNumber) {
        this.registerNumber = registerNumber;
    }
}
