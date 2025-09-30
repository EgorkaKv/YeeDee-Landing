import React from 'react';
import './Container.css';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  as?: 'div' | 'section' | 'main' | 'header' | 'footer';
}

const Container: React.FC<ContainerProps> = ({
                                               children,
                                               className = '',
                                               size = 'lg',
                                               as: Component = 'div'
                                             }) => {
  const containerClass = `container container--${size} ${className}`.trim();

  return (
    <Component className={containerClass}>
      {children}
    </Component>
  );
};

export default Container;
