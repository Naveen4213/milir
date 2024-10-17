import React from 'react'
import SelfRequestOnBoardContainer from '../components/SelfRequestOnBoardContainer'

const selfonboardpage = () => {
  return (
    <div>
        <div className="flex justify-center items-center">
          <img 
          src="/assets/images/milir/milirlogo1.png"
          alt="milir single"
          className="mx-auto h-10 w-auto"/>
        </div>
        <div className='mt-6'>
          <SelfRequestOnBoardContainer/>
        </div>
    </div>
  )
}

export default selfonboardpage