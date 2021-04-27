import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

interface AppProps {
  children: React.ReactNode
}

const App = ({ children }: AppProps) => (
  <main>
    <Navbar />
    {children}
    <Footer />
  </main>
);

export default App;
