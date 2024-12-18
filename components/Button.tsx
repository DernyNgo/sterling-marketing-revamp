"use client";

import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void; 
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[hsla(42.85714286,3.86740331%,64.50980392%,1)] text-sm text-white px-9 py-5 hover:bg-[hsla(45,4%,55%,1)] transition"
    >
      {label}
    </button>
  );
};

export default Button;
