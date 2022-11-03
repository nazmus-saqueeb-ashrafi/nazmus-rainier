import React from 'react'
import moment from 'moment';
import { useState, useEffect } from 'react'

const PatientView = ({user}) => {
    let intime = "8:00 Am"
  let outtime = "10:00 Am"
  const [result, setResult] = useState([])
  console.log("Array", result)

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
                    return (
                        <tr class="border-b hover:bg-gray-50">
                            <td class="p-4">
                            {time}
                            </td>
                            
                            <td class="p-2">
                                <button
                                    type="button"
                                    class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                                >
                                    Select
                                </button>
                            </td>
                        </tr>
                    )
                })} 
                
                
              </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default PatientView