import React from 'react'
import Button from '../button'
import HeroImageGrid from '../hero-image-grid'

const Hero = () => {
  return (
    <div className="flex flex-col px-10 md:flex-row md:items-center md:justify-center md:px-24 md:space-x-10">
        <div className="w-full py-10 space-y-4 md:space-y-6">
            <h1 className="text-4xl md:text-5xl font-medium">Connecting Muslim legal professionals and students</h1>
            <p className="text-lucky-grey md:text-xl">A space for Muslim legal professionals and students to connect, organise, and belong.</p>
            <Button>Sign up</Button>
        </div>
        <HeroImageGrid/>

    </div>
  )
}

export default Hero