import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import style from './App.module.scss';

interface AppProps {
  children: React.ReactNode
}

const App = ({ children }: AppProps) => (
  <main>
    <Navbar />
    <div className={style.bodyWrapper}>
      {children}
      <Footer />
    </div>
  </main>
);

export default App;
