import React from 'react'
import locationImg from '../src/assets/Fill219.png'

export default function (props) {
  return (
    <div className="card">
      <img src={props.imageUrl} />
      <div className="text">
        <div className="header">
          <img src={locationImg} />
          <p>
            {props.location} <span>View on Google Maps.</span>
          </p>
        </div>
        <h2>{props.title}</h2>
        <div className="description">
          <p className="date">{props.startDate + ' - ' + props.endDate}</p>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  )
}
