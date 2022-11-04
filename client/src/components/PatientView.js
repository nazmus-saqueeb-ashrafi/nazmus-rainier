import React from 'react'
import moment from 'moment';
import { useState, useEffect } from 'react'

const PatientView = ({user}) => {

    const [appointments, setAppointments] = useState([])
    const [reason, setReason] = useState(localStorage.getItem( 'reason' ) || '')
    const [reschedule, setReschedule] = useState(localStorage.getItem( 'reshedule' ) || false)
    const [cancel, setCancel] = useState(localStorage.getItem( 'cancel' ) || false)

    // making slots for appointments
    let intime = "8:00 Am"
  let outtime = "10:00 Am"
  const [result, setResult] = useState([])
//   console.log("Array", result)

  function intervals(startString, endString) {
    var start = moment(startString, 'hh:mm a');
    var end = moment(endString, 'hh:mm a');
    start.minutes(Math.ceil(start.minutes() / 20) * 20);

    var current = moment(start);

    while (current <= end) {
      if (result.includes(current.format('hh:mm a'))) {
        return null
      }
      else {
        result.push(current.format('hh:mm a'));
        current.add(20, 'minutes');
      }
    }


    return result;
  }

  intervals(intime, outtime);
  //

  const createAppointment = (time) => {
    console.log("Time", time)
    fetch('http://localhost:5000/api/appointments/create-appointment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        patientId: user._id,
        patientEmail: user.email,
        time: time,
        rescheduled: reschedule,
        rescheduledReason: reason,
        delay: false,
        canceled: cancel,
        latest: false
      })
    })

    window.localStorage.removeItem('reshedule');
    window.localStorage.removeItem('reason');
    window.localStorage.removeItem('cancel');

    window.location.reload()
  }

  
    useEffect(() => {
        const fetchAppointments = async () => {
         await fetch('http://localhost:5000/api/appointments/get-all-appointments', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        
        })
        .then(res => res.json())
        .then(data => {
            setAppointments(data)
        })

        
        }
        fetchAppointments()
      

    }, [])
  

    const alreadyBooked = () => {
        
        let booked = []
        appointments.map(appointment => {
            if (appointment.patientId === user._id) {
                booked.push(appointment.time)
            }
        })
        if (booked.length > 0) {
            return true
        }else{
            return false
        }
        
    }

    const onResheduleClick = () => {

      
        localStorage.setItem( 'reshedule', true );
        localStorage.setItem( 'reason', reason );
        
        // delete appointment

        appointments.map(appointment => {
            if (appointment.patientId === user._id) {
                fetch(`http://localhost:5000/api/appointments/delete-appointment/${appointment._id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
            }
        })
        window.location.reload()

    }

    // console.log("Reschedule", reschedule)
    // console.log("Reason", reason)

    const onCancelClick = () => {

      
        localStorage.setItem( 'cancel', true );
        
        
        // delete appointment

        appointments.map(appointment => {
            if (appointment.patientId === user._id) {
                fetch(`http://localhost:5000/api/appointments/delete-appointment/${appointment._id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
            }
        })
        window.location.reload()

    }
   

    




  return (
    <>
    <h2 class="p-5 text-xl font-semibold">Welcome <span className='text-sky-600'>{user.name}</span>, please choose an available time for your appointment.</h2>
    
      <div class="bg-white">

        <div class="overflow-x-auto border-x border-t pt-5">
          <table class="table-auto w-full">
              <thead class="border-b">
                <tr class="bg-gray-100">
                    
                    <th class="text-left p-4 font-medium">
                      Time
                    </th>
                    <th class="text-left p-4 font-medium">
                      {/* selection */}
                    </th>
                </tr>
              </thead>
              <tbody>
                
                {result && result.map((time, index) => {
                    // console.log(time==="08:00 am")
                    let unavailable = appointments.find(appointment=> appointment.time === time)
                    let booked = appointments.find(appointment=> appointment.patientId === user._id && appointment.time === time)

                    if(booked) {
                        
                        return (
                            <tr class="border-b">
                                <td class="p-4">
                                    {time}
                                </td>
                                <td class="p-4">
                                  <>
                                    <button class="bg-green-600 text-gray-100 font-semibold py-2 px-4 rounded inline-flex items-center" onClick={()=> onResheduleClick()}>
                                        <span class="mr-2">Reschedule</span>
                                    </button>
                                    <input class="ml-5 outline" type="text" id="reason" name="reason" placeholder='Reason for reshedule' value={reason} onChange={(e)=>setReason(e.target.value)}/>

                                    <button class="bg-red-600 text-gray-100 font-semibold py-2 px-4 rounded inline-flex items-center ml-6" onClick={()=> onCancelClick()}>
                                        <span class="mr-2">Cancel</span>
                                    </button>
                                  </>
                                    

                                    
                                </td>
                                

                                
                            </tr>
                        )

                        
                        }else if(unavailable) {
                            return (
                                <tr class="border-b">
                                    <td class="p-4">
                                        {time}
                                    </td>
                                    <td class="p-4">
                                        <button class="bg-gray-300 text-gray-600 font-semibold py-2 px-4 rounded inline-flex items-center" disabled>
                                            <span class="mr-2">Unavailable</span>
                                        </button>
                                    </td>
                                </tr>
                            )
                        
                    }else{
                        
                        if(alreadyBooked()) {
                            return (
                            <tr class="border-b">
                                <td class="p-4">
                                    {time}
                                </td>
                                
                                <td class="p-4">
                                    <button class="bg-gray-500 text-white rounded-full px-4 py-1 text-xs font-semibold mr-2" disabled  onClick={() => createAppointment(time)}>Available</button>
                                </td>

                                
                            </tr>
                            )
                        }else{
                            return (
                            <tr class="border-b">
                                <td class="p-4">
                                    {time}
                                </td>
                                
                                <td class="p-4">
                                    <button class="bg-blue-500 text-white rounded-full px-4 py-1 text-xs font-semibold mr-2"  onClick={() => createAppointment(time)}>Available</button>
                                </td>

                                
                            </tr>
                            )

                        }
                            
                        
                        

                    }
                    
                    
                })} 
                
                
              </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default PatientView