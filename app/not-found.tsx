import Image from 'next/image'
import React from 'react'

const NotFound = () => {
  return (
    <div className='h-screen w-screen flex flex-col content-center items-center'>
        <h1 className=''>Ups.. Ha ocurrido un error.</h1>
        <Image className='' src='/vercel.svg' width={500} height={500} alt={'Image 404'} />
    </div>
  )
}

export default NotFound