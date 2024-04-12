"use client";

import React from 'react'

type Props = {
    closeShadow: () => void;
}

function Shadow({ closeShadow }: Props) {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-shadow z-[60]' onClick={closeShadow}></div>
  )
}

export default Shadow