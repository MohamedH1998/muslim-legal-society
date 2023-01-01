import React, { ReactNode } from 'react'

interface Props {
    className?: string;
    onClick?: () => void;
    children: string | ReactNode;
}

const Button = ({children, onClick, className}: Props) => {
  return (
    <div onClick={onClick} className={`inline-block bg-mountains-green text-white px-12 py-2 md:text-lg rounded-md text-center ${className}`}>{children}</div>
  )
}

export default Button