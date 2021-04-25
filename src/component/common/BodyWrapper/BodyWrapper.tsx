import React from 'react';
import style from './BodyWrapper.module.scss';

interface BodyWrapperProps {
  children: React.ReactNode
  className?: string
}

const BodyWrapper = ({ children, className }: BodyWrapperProps) => (
  <section className={`${style.wrapper} ${className}`}>
    <div>
      {children}
    </div>
  </section>
);

BodyWrapper.defaultProps = {
  className: '',
};

export default BodyWrapper;
