# Project Name

Linestring Intersection Finder

## Description

This project is an implementation of a server-side application that allows users to find intersecting lines based on linestring coordinates. It provides an API with two main routes: one for generating tokens and another for finding intersecting lines. The application is built using JavaScript, Express.js framework, and various utility libraries.

## Features

- Generate tokens for authentication
- Find intersecting lines based on linestring coordinates
- Input validation for linestring coordinates
- Token verification middleware
- Error handling middleware

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install the dependencies:

   ```bash
   cd linestring-intersection-finder
   npm install
   ```

3. Set up environment variables:

   - Create a `.env` file in the project root directory.
   - Define the following environment variables in the `.env` file:

     ```
     JWT_SECRET=your-jwt-secret
     ```

     Replace `your-jwt-secret` with your own secret key for JWT token generation.

4. Start the server:

   ```bash
   npm start
   ```

   The server will start running on `http://localhost:3000`.

## API Endpoints

### Generate Token

- **URL**: `/tokens`
- **Method**: `GET`
- **Description**: Generates a JWT token for authentication.
- **Response**:

  - Status Code: 200 (OK)
  - Body:

    ```json
    {
      "token": "generated-token"
    }
    ```

    The `token` field contains the generated JWT token.

### Find Intersecting Lines

- **URL**: `/linestrings`
- **Method**: `POST`
- **Description**: Finds intersecting lines based on linestring coordinates.
- **Request**:

  - Body:

    ```json
    {
      "geometry": {
        "coordinates": [
          [longitude1, latitude1],
          [longitude2, latitude2],
          ...
        ]
      }
    }
    ```

    The `coordinates` field is an array of longitude-latitude pairs representing the linestring.
- **Example Curl**: ```curl --location 'http://localhost:3000/linestring' \
--header 'Content-Type: application/json' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzLCJpYXQiOjE2ODk0MzMwMTV9.EQgcr0kuHINVTcLjl_c8EgAh0ICZsfM6_LxBbLeca30' \
--data '{
  "geometry": {
    "coordinates": [
      [-122.483696, 37.833818],
      [-122.483482, 37.833174],
      [-122.514633, 37.819616]
    ]
  }
}'```

- **Response**:

  - Status Code: 200 (OK)
  - Body:

    ```json
    [
      {
        "id": "line-id",
        "intersectionPoint": [longitude, latitude]
      },
      ...
    ]
    ```

    Each object in the response array represents an intersecting line and contains its `id` and the `intersectionPoint` coordinates.

## Error Handling

If an error occurs during the processing of a request, the server will respond with a JSON object containing an error message.

- Status Code: 500 (Internal Server Error)
- Body:

  ```json
  {
    "message": "Internal server error"
  }
  ```
# MapUp-Backend
