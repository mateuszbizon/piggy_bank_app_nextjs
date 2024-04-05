import React from 'react'

type Props = {
    children: React.ReactNode;
    disabled?: boolean;
}

function Button({ children, disabled }: Props) {
  return (
    <button className='main-btn' disabled={disabled}>
        {children}
    </button>
  )
}

export default Button