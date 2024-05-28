import React, { CSSProperties, ReactNode } from 'react';

interface CardProps {
  style?: CSSProperties; // Using CSSProperties type for style props
  children?: ReactNode;  // ReactNode type for children to allow any valid React element
}

export const Card: React.FC<CardProps> = ({ style, children }) => {
  return (
      <div className="card" style={style}>
        {children}
      </div>
  );
};
