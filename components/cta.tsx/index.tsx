import React from 'react'
import Button from '../button'

const Cta = () => {
  return (
    <div className="flex flex-col items-center text-center bg-white w-full space-y-3 px-10 py-10">
        <h3 className="text-2xl font-semibold">Join us</h3>
        <p>Join the Muslim Legal Society and be a part of a thriving community of legal professionals and students</p>
        <Button>Join</Button>
    </div>
  )
}

export default Cta