import Image from 'next/image'
import React from 'react'

const ImageGrid = () => {
    const imageContent = [
        {bg: 'https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80',
        alt: 'Professional',
        text: 'Network within the legal community'
        },
        {bg: 'https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        alt: 'Professional',
        text: 'Organise annual Eid dinner'
        },
        {bg: 'https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        alt: 'Professional',
        text: 'Innovate and belong'
        },
    ]
  return (
    <div className="flex flex-col w-full items-center justify-center md:flex-row md:space-x-20 py-10">
    {imageContent.map((content, i) => (
            <div key={i} className="flex flex-col items-center space-y-5 py-3">
            <Image className="w-full rounded-md max-w-[500px]" src={content.bg} width="200" height="200" alt={content.alt}/>
                <p className="font-medium text-center">{content.text}</p>
            </div>
    ))}
    </div>
  )
}

export default ImageGrid