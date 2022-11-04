import express from 'express'
const router = express.Router()
import {
  createAppointment,
  getAllAppointments,
  deleteAppointment,
 
} from '../controllers/appointmentController.js'

// appointments/create-appointment
router.post('/create-appointment', createAppointment)
router.get('/get-all-appointments', getAllAppointments)
router.delete('/delete-appointment/:id', deleteAppointment)



export default router