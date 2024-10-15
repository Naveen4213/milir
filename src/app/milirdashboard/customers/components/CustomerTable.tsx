import React from 'react'
import Sidebar from '../../components/Sidebar'
import TableList from './TableList'
const CustomerTable = () => {
  return (
    <div className="flex">
      <div className='w-1/5'>< Sidebar/></div>
      <div className='w-4/5'>
        <h1>Users</h1>
        <p>A list of all the users and Activities </p>
        < TableList/>
      </div>
    </div>
  )
}

export default CustomerTable