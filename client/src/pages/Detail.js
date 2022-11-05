import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Detail = () => {
    const { id } = useParams()

    const [appointment, setAppointment] = useState({})
    const [patient, setPatient] = useState({})

    useEffect(() => {
        const fetchAppointments = async () => {
         await fetch(`http://localhost:5000/api/appointments/get-appointment-by-id/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        
        })
        .then(res => res.json())
        .then(data => {
            setAppointment(data)
        })

        }
        fetchAppointments() 


    }, [])

    useEffect(() => {
        const fetchPatient = async () => {
         await fetch(`http://localhost:5000/api/users/profile/${appointment.patientId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        
        })
        .then(res => res.json())
        .then(data => {
            setPatient(data)
        })

        }
        fetchPatient() 

    }, [appointment])

  return (
    <>
    <div class="p-10">
        <h1 class="text-lg underline">Appointment details</h1>
        <h1>Appointment id: {appointment._id}</h1>
        <h1>Time: {appointment.time}</h1>
        <h1>Resheduled: {appointment.rescheduled?"Yes":"No"}</h1>
        <h1>Reason for reshedule: {appointment.rescheduledReason?appointment.rescheduledReason:"None"}</h1>
        <h1>Delayed: {appointment.delay?"Yes":"No"}</h1>
        <h1>Canceled: {appointment.canceled?"Yes":"No"}</h1>
        <h1>Latest: {appointment.latest?"Yes":"No"}</h1>
    </div>

    <div class="p-10">
        <h1 class="text-lg underline">Patient details</h1>
        <h1>Patient id: {patient._id}</h1>
        <h1>Patient name: {patient.name}</h1>
        <h1>Patient email: {patient.email}</h1>
         
        
    </div>
        
    </>
  )
}

export default Detail