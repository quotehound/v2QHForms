import React, {Component, useState, useEffect, useContext, Fragment} from 'react';
import axios from 'axios';

import './auto.css';
import { withRouter } from 'react-router';
import AutoNav from './autoNavBar';



function CarYear() {

    
    const [year, setYears] = useState([]);
    const [remainingYears, setRemainingYears] = useState([]);
    const [latestYear, setLatestYear] = useState([]);
    const [flag, setFlag] = useState(true);
    const [currentData, setCurrentData] = useState("");
    const [currentData2, setCurrentData2] = useState("");

    useEffect(async () => {

        var apiToken = '95JiMPpKIW8z6iRJlUWLdYtb5dIS5JGONBHSmkAvGCX2Tq7kbdhYMJZbFpD9'

        let data = await axios.get(
            'https://carmakemodeldb.com/api/v1/car-lists/get/years' +
    '?api_token=' +
    apiToken
        )

        let t = []

        for(let i = data.data.length - 1; i > -1; i--){
            t.push(data.data[i])
        }
        
        const rY = t.filter((f, index) =>(index >= 25 ? f : ''))

        setRemainingYears(rY);
        setYears(t);
        setLatestYear(t[0].year);
    }, [])

    const showNextStep = (year) => {
        setFlag(false);
        setCurrentData(year)
    }

    const passYear = (year) => {
        setFlag(false);
        setCurrentData2(year)
    }

    return (

      <div>             
      <AutoNav  />


 <div className="bg-white flex items-center formBack">
   <div className="w-full">
     <div className="bg-white p-10 rounded-lg shadow-md md:w-3/4 mx-auto lg:w-1/2">
       <form action="">
         <div className="mb-5">
         <h3 className="text-3xl mb-2 leading-tight font-semibold font-heading text-center" data-config-id="header">Select Vehicle Year</h3>
         </div>

         <div className="mb-5">
         <div className='grid grid-cols-5 w-11/12 md:w-4/5 mx-auto justify-center items-center text-center gap-4 md:gap-6'>
            {year &&
              latestYear &&
              year.map((data, index) => {
                if (latestYear - data.year < 25) {
                  return (
                    <div className='flex flex-wrap justify-center items-center ' key={index}>
                      <button
                        onClick={ ()=>showNextStep( data.year)} 
                        className='buttons buttonsFocus flex flex-wrap justify-center items-center text-center focus:outline-none'
                        type='button'
                      >
                        <span className='buttonsText buttonsTextFocus'>
                          {data.year}
                        </span>
                      </button>
                    </div>
                  )
                }
              })}
          </div>


          <div className="mb-6 ">
  <div className="flex items-center w-1/2">
    <select className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" name="field-name" data-config-id="04_select">
      <option data-config-id="04_opt1">Option 1</option>
      <option data-config-id="04_opt2">Option 2</option>
      <option data-config-id="04_opt3">Option 3</option>
      <option data-config-id="04_opt4">Option 4</option>
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </div>
  </div>
</div>

          
         </div>

       </form>
     </div>
   </div>
 </div>


  </div>

    )
}

export default withRouter(CarYear)