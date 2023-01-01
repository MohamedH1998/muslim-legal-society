import React from 'react'
import Button from '../button'

const TextSection = () => {
  return (
    <div className="flex flex-col px-10 py-20 space-y-8 md:px-48 md:flex-row md:items-center md:justify-center md:space-x-8">
            <h2 className="text-4xl font-medium  w-full">Our mission is to create a fair and tolerant legal industry for Muslims</h2>
      <div className="space-y-6 w-full">
            <p>The mission of the Muslim Legal Society is to create a fair and tolerant legal industry for Muslims. We believe that every individual should be treated with respect and dignity, regardless of their faith or background. Through our efforts, we aim to promote inclusivity and diversity within the legal profession and work towards a more equitable society for all.</p>
            <Button className="w-full">Join our community</Button>
            </div>
    </div>
  )
}

export default TextSection