import React from 'react'
import './SingleUser.css'
import { useParams } from 'react-router-dom'
import JSONData from '../../UserData.json'

const SingleUser = () => {
  let {userid}=useParams()
  console.log(userid);
  let single=JSONData.find(x=>x.id === Number(userid))
  console.log(single);
  
  return (
    <div>SingleUser</div>
  )
}

export default SingleUser