import React from 'react'
import './features.css'

const Features = (props) => {

  return (
    <div className='features-glass-card'>
    <div className="features-glass-box">
      <span>{props.icon}</span>
      <p>{props.title}</p>
      <p className="features-details">{props.details}</p>
    </div>

    </div>
  )
}

export default Features