## Installation and demo users

- download repo
- install dependencies using npm install
- cd client and npm start
- cd server and npm run server
- cd server and npm data:import (change data in /server/data.users.js and seed an admin user using this command)

# Demo Patients

- email: nazmus.as@gmail.com, password:123456
- email: patient1@example.com, password:123456

# Demo Admin

- email: admin@example.com, password:123456
  (seeded)

## Commit descriptions

# Commit 1: initial server setup

- created the server
- connected Mongo DB

# Commit 2: Seeded Admin user

- added a script to add admin user using 'npm data:import'

# Commit 3: Register and login routes added

- Routes and controllers created to create patients
- Routes and controllers created to login patients and admin

# Commit 4: Client-side login functionality added

- Created a react app and added react router
- Installed tailwind UI and added a login and registration page
- Added login functonality in the login page

# Commit 5: Client-side registration functionality added

- Added registration functonality in the registration page

# Commit 6: patient view UI added

- Created UI for patient view and added date slots using Moment.js

# Commit 7: patient view - all functionalities added

- made an appointment model
- patients can set appointment within 20 min slots
- patients see booked slots as unavailable
- patient can reshedule the appointment with a reason ( new appointment chosen by patient marked as resheduled with reason in db )
- patient can cancel appointment (new appointment choosen by patient marked as cancel, indicating patient has canceled appointment before (will use this for filtration in admin side) )

# Commit 8: admin view - search functionality added

- patients can be searched by email (please enter right email)
- patients can be searched by patient ID (please enter right patientId)
- patients can be searched by appointment ID (please enter right appointmentId)

# Commit 9: admin view - filter functionality added

- appointments can be filtered by appointments which were made after canceling a previous appointment
- appointments can be filtered by delayed appointments
- appointments can be filtered by resheduled appointments

# Commit 10: admin view - Appointemnt and patient detail page added

- All appointment and patient details can be accessed in a seperate page

# Commit 11: admin view - patient reshedule feature added

- Admin can now reshedule patient's appointment with a reason

# Commit 12: admin view - push to end of current day shhedule of admin added

- Admin can now push users who missed their appointments to end of the admins schedule for the day

# Commit 13: finishing touch

- Added details to readme.md

Thank you !
