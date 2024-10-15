import React from 'react'
import Sidebar from '../../components/Sidebar'
import CreateFeature from './CreateFeature'
const Feature = () => {
  return (
    <div className='flex'>
        <div className='w-1/5'><Sidebar/></div>
        <div className='w-4/5'><CreateFeature/></div>
    </div>
  )
}

export default Feature