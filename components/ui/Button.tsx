import React from 'react'

type Props = {
    children: React.ReactNode;
}

function Button({ children }: Props) {
  return (
    <button className='main-btn'>
        {children}
    </button>
  )
}

export default Button