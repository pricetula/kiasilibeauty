import React from 'react';
import style from './BodyWrapper.module.scss';

interface BodyWrapperProps {
  children: React.ReactNode
}

const BodyWrapper = ({ children }: BodyWrapperProps) => (
  <div className={style.wrapper}>
    <div>{children}</div>
  </div>
);

export default BodyWrapper;
