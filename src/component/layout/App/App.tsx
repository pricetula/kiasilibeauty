import React from 'react';
import BodyWrapper from 'src/component/common/BodyWrapper';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import style from './App.module.scss';

interface AppProps {
  children: React.ReactNode
}

const App = ({ children }: AppProps) => (
  <main>
    <Navbar />
    <BodyWrapper className={style.bodyWrapper}>
      {children}
    </BodyWrapper>
    <Footer />
  </main>
);

export default App;
