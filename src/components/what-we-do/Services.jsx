import React from 'react'
import './services.css'

const Services = (props) => {
  return (
    <div className='services-box'>
    {props.icon}
    <header>
      <h3 className='service-title'>{props.title}</h3>
      <p>
        {props.text}
      </p>
    </header>
  </div>
  )
}

export default Services