import React, { ReactNode } from "react";

interface Props {
  className?: string;
  onClick?: () => void;
  children: string | ReactNode;
}

const Button = ({ children, onClick, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`inline-block bg-mountains-green text-white px-12 cursor-pointer py-2 md:text-lg rounded-md text-center ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
