package com.seat.seatfinder.dto;

public class SeatResponse {
    private boolean success;
    private String message;
    private SeatDetails seatDetails;

    public SeatResponse() {
    }

    public SeatResponse(boolean success, String message) {
        this.success = success;
        this.message = message;
    }

    public SeatResponse(boolean success, SeatDetails seatDetails) {
        this.success = success;
        this.seatDetails = seatDetails;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public SeatDetails getSeatDetails() {
        return seatDetails;
    }

    public void setSeatDetails(SeatDetails seatDetails) {
        this.seatDetails = seatDetails;
    }
}
