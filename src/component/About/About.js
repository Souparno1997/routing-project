import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
  let {name}=useParams()
  console.log("Params value",name)
  return (
    <div>
      
    <h1>About</h1>
    <h5> Hello,  {name}</h5> 

    </div>
  )
}

export default About