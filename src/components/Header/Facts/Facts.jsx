import React, { useEffect, useState } from 'react'
import './Facts.css'
import ReactOdometer from 'react-odometerjs'
export const Facts = () => {

    const[experience, setExperience] = useState(0)
    const[projects, setProject]= useState(0)
    const[clients , setClients] = useState()

    useEffect(()=>{
        const timeoutId = setTimeout(()=>{
            setExperience(10)
            setProject(150)
            setClients(2.5)
        }, 3000)

        return () =>{
            clearTimeout(timeoutId)
        }
    }, [])

  return (
    <div className='fact__container'>
        <div className="fact__item">
            <div className="count__container">
                <ReactOdometer
                value={experience}
                />
                <span className='indicator'>+</span>
                
            </div>
            <p className="name">Years of Experience</p>
        </div>
        <div className="fact__item">
            <div className="count__container">
                <ReactOdometer
                value={projects}
                />
                <span className='indicator'>+</span>
                
            </div>
            <p className="name">Project Completed</p>
        </div>
        <div className="fact__item">
            <div className="count__container">
                <ReactOdometer
                value={clients}
                />
                <span className='indicator'>k</span>
                
            </div>
            <p className="name">Clients</p>
        </div>
    </div>
  )
}
