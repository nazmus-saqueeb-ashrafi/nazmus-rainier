import express from 'express'
const router = express.Router()
import {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  deleteAppointment,
  searchByEmail,
  searchByPatientId,
  searchByAppointmentId,
  filterByCanceled,
  filterByDelay,
  filterByRescheduled,
  convertToLatest,
  pushToLast,
  removeLatest
 

} from '../controllers/appointmentController.js'

// appointments/create-appointment
router.post('/create-appointment', createAppointment)
router.get('/get-all-appointments', getAllAppointments)
router.get('/get-appointment-by-id/:id', getAppointmentById)
router.delete('/delete-appointment/:id', deleteAppointment)
router.get('/search-by-email/:email', searchByEmail)
router.get('/search-by-pid/:pid', searchByPatientId)
router.get('/search-by-aid/:aid', searchByAppointmentId)
router.get('/filter-by-canceled', filterByCanceled)
router.get('/filter-by-delay', filterByDelay)
router.get('/filter-by-rescheduled', filterByRescheduled)
router.put('/convert-to-latest/:id', convertToLatest)
router.put('/push-to-last/:id', pushToLast)
router.put('/remove-latest-tag', removeLatest)


export default router