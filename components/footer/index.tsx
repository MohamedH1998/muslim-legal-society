import Image from 'next/image'
import React from 'react'
import Button from '../button'
import { WiMoonAltWaningCrescent4 } from 'react-icons/wi'
import { AiOutlineTwitter, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="bg-ivory-paper flex justify-between items-center py-4 px-4">
      <div className="hidden md:block md:mix-blend-multiply">
        <Image src="/logo.svg" width="100" className="" height="100" alt="logo"/>
      </div>
<ul className="flex items-center justify-center space-x-2">
    <li className="text-black text-3xl"><AiOutlineTwitter/></li>
    <li className="text-black text-3xl"><AiFillLinkedin/></li>
    <li className="text-black text-3xl"><AiOutlineInstagram/></li>


</ul>
        <button className="text-sm bg-mountains-green rounded-lg text-white px-3 py-2">Sponsor us</button>
    </div>
  )
}

export default Footer