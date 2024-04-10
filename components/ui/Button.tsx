import React from 'react'

type Props = {
    children: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
}

function Button({ children, disabled, onClick }: Props) {
  return (
    <button className='main-btn' onClick={onClick} disabled={disabled}>
        {children}
    </button>
  )
}

export default Button