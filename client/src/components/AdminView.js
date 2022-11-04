import React from 'react'
import moment from 'moment';
import { useState, useEffect } from 'react'

const AdminView = ({user}) => {

  const [appointments, setAppointments] = useState([])
  const [patientEmail, setPatientEmail] = useState('')
  const [patientId, setPatientId] = useState('')
  const [appointmentId, setAppointmentId] = useState('')
  const [searchResult, setSearchResult] = useState([])
  

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


    const searchByEmail = () => {
        
        
        fetch(`http://localhost:5000/api/appointments/search-by-email/${patientEmail}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            
        })
        .then(res => res.json())
        .then(data => {
            
            setSearchResult(data)
            
        })

        
    }


    const searchByPatientId = () => {
        
      
        fetch(`http://localhost:5000/api/appointments/search-by-pid/${patientId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            
        })
        .then(res => res.json())
        .then(data => {
            
            setSearchResult(data)
            
        })

        
    }

    const searchByAppointmentId = () => {
        
      
        fetch(`http://localhost:5000/api/appointments/search-by-aid/${appointmentId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            
        })
        .then(res => res.json())
        .then(data => {
            
            setSearchResult(data)
            
        })

        
    }




  return (
    <>
    <h2 class="p-5 text-xl font-semibold">Welcome to the admin portal <span className='text-sky-600'>{user.name}</span>.</h2>

    <div>
      <input class="ml-5 outline" type="text" id="searchEmail" name="searchEmail" placeholder='Search by patient email' value={patientEmail} onChange={(e)=>setPatientEmail(e.target.value)} />
      <button class="ml-5 bg-sky-600 text-white rounded-md p-2" onClick={()=>searchByEmail()}>Search</button>
    </div>

    <div class="mt-3">
      <input class="ml-5 outline" type="text" id="searchPID" name="searchPID" placeholder='Search by patient ID' value={patientId} onChange={(e)=>setPatientId(e.target.value)} />
      <button class="ml-5 bg-sky-600 text-white rounded-md p-2" onClick={()=>searchByPatientId()}>Search</button>
    </div>

    <div class="mt-3">
      <input class="ml-5 outline w-56" type="text" id="searchAID" name="searchAID" placeholder='Search by appointment ID' value={appointmentId} onChange={(e)=>setAppointmentId(e.target.value)} />
      <button class="ml-5 bg-sky-600 text-white rounded-md p-2" onClick={()=>searchByAppointmentId()}>Search</button>
    </div>
    

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

                {
                  searchResult.length > 0 ? searchResult.map((appointment, index) => {
                    return (
                      <tr class="border-b">
                        <td class="p-4">
                          {appointment.time}
                        </td>
                        <td class="p-4">
                          <button class="bg-gray-300 text-gray-600 font-semibold py-2 px-4 rounded inline-flex items-center" disabled>
                                <span class="mr-2">Booked by {appointment.patientEmail}</span>
                            </button>

                            <button class="bg-orange-300 text-gray-600 font-semibold py-2 px-4 rounded inline-flex items-center ml-6" disabled>
                                <span class="mr-2">Click for details</span>
                            </button>
                        </td>
                      </tr>
                    )
                  }) 
                  :
                  result && result.map((time, index) => {
                    // console.log(time==="08:00 am")

                    let bookedAppointment = appointments.find(appointment=> appointment.time === time)

                    if(bookedAppointment) {
                      return <tr class="border-b">
                        <td class="p-4">
                            {time}
                        </td>
                        <td class="p-4">
                            <button class="bg-gray-300 text-gray-600 font-semibold py-2 px-4 rounded inline-flex items-center" disabled>
                                <span class="mr-2">Booked by {bookedAppointment.patientEmail}</span>
                            </button>

                            <button class="bg-orange-300 text-gray-600 font-semibold py-2 px-4 rounded inline-flex items-center ml-6" disabled>
                                <span class="mr-2">Click for details</span>
                            </button>
                        </td>
                    </tr>
                    }else{
                      return (
                    <tr class="border-b">
                        <td class="p-4">
                            {time}
                        </td>
                        <td class="p-4">
                            <button class="bg-green-300 text-gray-600 font-semibold py-2 px-4 rounded inline-flex items-center" disabled>
                                <span class="mr-2">Available</span>
                            </button>
                        </td>
                    </tr>
                  )

                    }
                    
                })
                }




                
                
                
                
                
              </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default AdminView