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

// @desc    Get appointment by id
// @route   GET /api/appointments/get-appointment/:id
// @access  Public
const getAppointmentById = asyncHandler(async (req, res) => {
    const appointment = await Appointment.findById(req.params.id)
    if (appointment) {
        res.json(appointment)
    } else {
        res.status(404)
        throw new Error('Appointment not found')
    }   
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

// @desc    Search by email
// @route   GET /api/appointments/search-by-name/:name
// @access  Public
const searchByEmail = asyncHandler(async (req, res) => {
    const appointments = await Appointment.find({ patientEmail: req.params.email })
    res.json(appointments)
})

// @desc    Search by patientId
// @route   GET /api/appointments/search-by-pid/:pid
// @access  Public
const searchByPatientId = asyncHandler(async (req, res) => {
    const appointments = await Appointment.find({ patientId: req.params.pid })
    res.json(appointments)
})

// @desc    Search by appointmentId
// @route   GET /api/appointments/search-by-aid/:aid
// @access  Public
const searchByAppointmentId = asyncHandler(async (req, res) => {
    const appointments = await Appointment.find({ _id: req.params.aid })
    res.json(appointments)
})

// @desc    Filter by canceled
// @route   GET /api/appointments/filter-by-canceled
// @access  Public
const filterByCanceled = asyncHandler(async (req, res) => {
    const appointments = await Appointment.find({ canceled: true })
    res.json(appointments)
})

// @desc    Filter by delay
// @route   GET /api/appointments/filter-by-delay
// @access  Public
const filterByDelay = asyncHandler(async (req, res) => {
    const appointments = await Appointment.find({ delay: true })
    res.json(appointments)
})

// @desc    Filter by rescheduled
// @route   GET /api/appointments/filter-by-rescheduled
// @access  Public
const filterByRescheduled = asyncHandler(async (req, res) => {
    const appointments = await Appointment.find({ rescheduled: true })
    res.json(appointments)
})



export {
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



}

