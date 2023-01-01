import React from 'react'

const HeroImageGrid = () => {
  return (
<div className="container w-full h-full py-4 max-w-[600px]">
    <div className="w-full grid-cols-2  space-y-0 grid gap-4 grid-rows-3 h-auto min-h-[350px] lg:h-[600px]">
        <div role="img" aria-label='' className="w-full rounded-lg row-span-2 bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')]"/>
        <div role="img" aria-label='' className="w-full rounded-lg bg-cover bg-no-repeat  bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')]"/>

        <div role="img" aria-label='' className="w-full row-span-2 rounded-lg bg-cover bg-no-repeat bg-center  bg-[url('https://images.unsplash.com/photo-1611872336305-2bb819409c3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80')]"/>
        <div role="img" aria-label='' className="w-full  rounded-lg bg-cover bg-no-repeat  bg-[url('https://images.unsplash.com/photo-1620829813573-7c9e1877706f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')]"/>
    </div>
</div>
  )
}

export default HeroImageGrid