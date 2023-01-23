import React, { ReactNode } from "react";

interface Props {
  className?: string;
  link: string;
  children: string | ReactNode;
}

const ExternalLink = ({ children, link, className }: Props) => {
  return (
    <a
      className={`inline-block bg-mountains-green text-white px-12 cursor-pointer py-2 md:text-lg rounded-md text-center ${className}`}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default ExternalLink;
