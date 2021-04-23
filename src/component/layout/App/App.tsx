import React from 'react';

interface AppProps {
  children: React.ReactNode
}

const App = ({ children }: AppProps) => (
  <div>
    sss
    {children}
  </div>
);

export default App;
