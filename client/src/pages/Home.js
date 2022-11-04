import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import PatientView from '../components/PatientView';

const Home = () => {

  let navigate = useNavigate();

  const [user, setUser] = useState([])
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    const fetchUser = async () => {

      const res = await fetch(`http://localhost:5000/api/users/profile/${window.location.pathname.split("/")[2]}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                
            })

      const data = await res.json()
      setUser(data)
      // console.log(data)
    }
    fetchUser()
  }, [])

  return (
    <>
    {user.isAdmin ? 
    // Admin View
     (<>

     </>)
     :
    // Patient View
     (<>
      <PatientView user={user}/>

     </>)
    }
    </>
  )
}

export default Home