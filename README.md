# Campus Resource Reservation API

## Project Description
The Campus Resource Reservation API is a backend-only application designed to manage reservable campus resources such as study rooms, lab spaces, and equipment. The system provides a structured way for applications to interact with campus resources through a centralized API.

## Project Scope and System Description
The Campus Resource Reservation API is responsible for managing reservation-related data for campus resources. These resources include study rooms, laboratory spaces, and shared equipment that can be reserved for specific time periods.

Through this API, users will be able to view available resources, create reservations, update existing reservations, and cancel reservations when necessary. The system focuses strictly on backend responsibilities such as handling requests, managing data, and enforcing reservation logic.

The API does not handle frontend interfaces, user authentication, payments, or administrative approval workflows. These features are considered out of scope and would typically be managed by separate systems. The goal of this backend is to act as a reliable foundation that other applications can build on.

## Technologies Used
- Node.js
- Express.js
- MySQL
- Git & GitHub

## Running the Server Locally
1. Clone the repository
2. Install dependencies using `npm install`
3. Start the server with `node src/server.js`
4. Access the test route at `http://localhost:3000/health`

## Project Status
Module 1: Foundation setup only. No database schema or API endpoints have been implemented yet.
