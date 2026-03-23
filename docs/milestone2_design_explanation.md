# Milestone 2: Database Schema Design Explanation

## Entities I Designed
- Users: These represent people who can log into the system and make reservations.
- Resources: These include rooms or equipment that users can reserve.
- Reservations: These connect users to resources and store the time and status of each booking.

## Relationships
- A reservation connects to a user through user_id. This shows who made the reservation.
- A reservation connects to a resource through resource_id. This shows what is being reserved.
- Each reservation belongs to one user and one resource.

## Assumptions
- Only registered users can make reservations.
- A reservation must have a valid start and end time.
- End time must always be after start time.
- Resources can be reused for multiple reservations at different times.

## One Design Decision I Made
I added a "purpose" field to reservations so users can describe why they are booking a resource. This makes the system more realistic and useful.
