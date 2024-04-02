import React from 'react'

type Props = {
    children: React.ReactNode;
}

function ButtonCircle({ children }: Props) {
  return (
    <button className='main-btn-circle'>
        {children}
    </button>
  )
}

export default ButtonCircle