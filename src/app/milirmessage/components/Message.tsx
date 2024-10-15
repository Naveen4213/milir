'use client';
import React from 'react'
import Button from '~/core/ui/Button'
import { useRouter } from 'next/navigation';

const Message = () => {
    const router = useRouter();
    const handleClick = () =>{
        router.push('/milirdashboard')
    }
  return (
    <div>
         <div className="flex justify-center items-center mt-24">
            <img 
            src="/assets/images/milir/milirsingle.png"
            alt="milir single"
            className="mx-auto h-10 w-auto"/>
        </div>
        <div className='flex justify-center mt-16 text-xl font-bold'>
            <h2>Onboarding Option</h2>
        </div>
        <div className='flex justify-center items-center mt-16 text-sm font-medium'>
            <p>Your request has been successfully sent to the Milir team. We will contact you soon!</p>
        </div>
        <div className='flex justify-center mt-16'>
            <Button onClick={handleClick}>
              Continue
            </Button>
        </div>
    </div>
  )
}

export default Message