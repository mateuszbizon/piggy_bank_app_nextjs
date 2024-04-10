import React from 'react'

type Props = {
    message: string;
    children?: React.ReactNode;
}

function NoResultMessage({ message, children }: Props) {
  return (
    <div className='flex flex-col items-center'>
        <p className='no-result'>{message}</p>
        {children}
    </div>
  )
}

export default NoResultMessage