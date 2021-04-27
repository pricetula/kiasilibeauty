import React from 'react';
import BodyWrapper from 'src/component/common/BodyWrapper';
import style from './Banner.module.scss';

const Banner = () => (
  <div className={style.wrapper}>
    <BodyWrapper>
      <h1>The app</h1>
    </BodyWrapper>
  </div>
);

export default Banner;
