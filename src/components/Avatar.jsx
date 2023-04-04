import React from 'react'
import Goat from '../images/MESSI.jpg'

export default function Avatar() {
  return (
    <div>
      <img src={Goat} alt="messi" style={{ height: "32px", borderRadius: '50%', width: '32px' }} />
    </div>
  )
}