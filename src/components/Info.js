import React from 'react'

export default function Info(props) {
  return (
   <div className="container">

   <h1>Namate, {props.name}</h1>
   <h1>Your roll no is {props.roll}</h1>
   </div>
  )
}
