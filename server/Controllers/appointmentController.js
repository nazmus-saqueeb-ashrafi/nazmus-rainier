import asyncHandler from 'express-async-handler'
import Appointment from '../models/appointmentModel.js'

// @desc    Create a new appointment
// @route   POST /api/appointments/create-appointment
// @access  Public
const createAppointment = asyncHandler(async (req, res) => {

    const { patientId, patientEmail, time, rescheduled, rescheduledReason, delay, canceled, latest } = req.body
    
    const appointment = await Appointment.create({
        patientId, 
        patientEmail, 
        time, 
        rescheduled, 
        rescheduledReason, 
        delay, 
        canceled, 
        latest 
    })
    
    if (appointment) {
        res.status(201).json({
        _id: appointment._id,
        patientId: appointment.patientId, 
        patientEmail : appointment.patientEmail, 
        time : appointment.time, 
        rescheduled : appointment.rescheduled, 
        rescheduledReason : appointment.rescheduledReason, 
        delay : appointment.delay, 
        canceled : appointment.canceled, 
        latest : appointment.latest
        })
    } else {
        res.status(400)
        throw new Error('Invalid appointment data')
    }
})

// @desc    Get all appointments
// @route   GET /api/appointments/get-all-appointments
// @access  Public
const getAllAppointments = asyncHandler(async (req, res) => {
    const appointments = await Appointment.find({})
    res.json(appointments)
})

// @desc    Delete an appointment
// @route   DELETE /api/appointments/delete-appointment/:id
// @access  Public
const deleteAppointment = asyncHandler(async (req, res) => {
    const appointment = await Appointment.findById(req.params.id)

    if (appointment) {
        await appointment.remove()
        res.json({ message: 'Appointment removed' })
    } else {
        res.status(404)
        throw new Error('Appointment not found')
    }
})


export {
    createAppointment,
    getAllAppointments,
    deleteAppointment,


}

