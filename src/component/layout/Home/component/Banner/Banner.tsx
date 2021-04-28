import React from 'react';
import BodyWrapper from 'src/component/common/BodyWrapper';
import style from './Banner.module.scss';

const Banner = () => (
  <div className={style.wrapper}>
    <h1 className="logo-font">KI-ASILI</h1>
    <h2>Natural Beauty</h2>
  </div>
);

export default Banner;
