import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className = '', children }) => {
  return (
    <div className={`p-4 rounded-lg border ${className}`}>
      {children}
    </div>
  );
};

export default Card;
