// components/CarDetail/CarDetail.js

import React from 'react'
import './CarDetail.css'
import apiRentalCars from '../../services/apiRentalCars'


function CarDetail(props) {
  return (
   apiRentalCars.lookupCars().map(element => {
    return (<div className="card">
      <img src={element.img} alt={element.brand}/>
      <div className="container">
        <h4><b>{element.model}</b></h4>
        <p>{element.description}</p>
      </div>
    </div>
    )
    })
  )
}

export default CarDetail