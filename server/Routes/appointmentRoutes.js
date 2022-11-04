import express from 'express'
const router = express.Router()
import {
  createAppointment,
  getAllAppointments,
  deleteAppointment,
  searchByEmail,
  searchByPatientId,
  searchByAppointmentId,
 
} from '../controllers/appointmentController.js'

// appointments/create-appointment
router.post('/create-appointment', createAppointment)
router.get('/get-all-appointments', getAllAppointments)
router.delete('/delete-appointment/:id', deleteAppointment)
router.get('/search-by-email/:email', searchByEmail)
router.get('/search-by-pid/:pid', searchByPatientId)
router.get('/search-by-aid/:aid', searchByAppointmentId)




export default router