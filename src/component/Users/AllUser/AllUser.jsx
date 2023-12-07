import React from 'react'
import './AllUser.css'
import JSONData from '../UserData.json'
import { Link } from 'react-router-dom'

const AllUser = () => {
  return (
    <div>
        <h3>All Users</h3>
    <ul>
        {
            JSONData.map((user)=>(
            <li key={user.id}>
            <Link to={`single-user/${user.id}`}> {user.username} /</Link>
            </li>
           ) )
        }
    </ul>
    </div>
  )
}

export default AllUser