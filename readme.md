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
