import React from 'react'

type Props = {
    message?: string;
}

function ErrorMessage({ message }: Props) {
  return (
    <p className='text-2xl text-center font-bold'>{message}</p>
  )
}

export default ErrorMessage