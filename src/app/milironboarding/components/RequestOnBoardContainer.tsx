import React from 'react'
import Link from 'next/link'
import Tile from "~/core/ui/Tile";
const RequestOnBoardContainer = () => {
    
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
        <div className='flex justify-center mt-24 gap-12'>
           <div className='w-[30%]'>
            <div className='text-center cursor-pointer'>
                <Link href="/auth/requestonboard">
                    <Tile className="shadow-2xl">
                        <div className='p-10'>
                            <div className='text-center'>
                                <h2 className='text-lg font-bold'>Request Onboarding</h2>
                            </div>
                            <p className='text-sm font-medium p-2'>This is a paragraph explaining the purpose of the request page. Please fill out the form below.</p>
                        </div>
                    </Tile>
                </Link>
            </div>
           </div>
            <div className='w-[30%]'>
                <div className='text-center cursor-pointer'>
                    <Link href="/milirselfonboarding/requestonboard">
                        <Tile className="bg-red-500" style={{background:'#EF4444'}}>
                            <div className='p-10 rounded-md' style={{background:'#EF4444'}}>
                                <div className='text-center'>
                                    <h2 className='text-lg font-bold text-white'>Myself Onboarding</h2>
                                </div>
                                    <p className='text-sm font-medium p-2 text-white'>This is a paragraph explaining the purpose of the request page. Please fill out the form below.</p>
                            </div>
                        </Tile>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
export default RequestOnBoardContainer

