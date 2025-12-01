# SRM Seat Finder - Spring Boot

This is the Spring Boot version of the SRM Seat Finder backend, equivalent to the Node.js server.

## Structure

- **config/** - Configuration classes
  - `VenueConfig.java` - Handles venue URLs and sessions from environment variables
  - `CorsConfig.java` - CORS configuration for cross-origin requests

- **controller/** - REST API endpoints
  - `SeatController.java` - Handles `/api/get-seat` and `/api/health` endpoints

- **dto/** - Data Transfer Objects
  - `SeatRequest.java` - Request body for seat search
  - `SeatResponse.java` - Response for successful seat search
  - `SeatDetails.java` - Seat information details
  - `ErrorResponse.java` - Error response format

- **service/** - Business logic
  - `ScraperService.java` - Web scraping logic using JSoup (equivalent to Node.js scraper.js)

## Setup

1. Copy `.env.example` to `.env` and add your venue URLs:
```bash
cp .env.example .env
```

2. Build the project:
```bash
./gradlew build
```

3. Run the application:
```bash
./gradlew bootRun
```

The server will start on port 9000.

## API Endpoints

### Health Check
```
GET /api/health
```

### Get Seat Details
```
POST /api/get-seat
Content-Type: application/json

{
  "date": "01/12/2025",
  "registerNumber": "RA254453010004"
}
```

## Dependencies

- Spring Boot Web - REST API framework
- JSoup 1.17.2 - HTML parsing (equivalent to cheerio in Node.js)
- Spring Boot Starter - Core Spring Boot functionality

## Environment Variables

Set these in your `.env` file or system environment:

- `VENUE_URL_TP` - Tech Park venue URL
- `VENUE_URL_TP2` - Tech Park 2 venue URL
- `VENUE_URL_MAIN` - Main building venue URL
- `VENUE_URL_BIO` - Biotech building venue URL
- `VENUE_URL_UB` - UB venue URL
- `VENUE_URL_FSHET` - FSHET venue URL
