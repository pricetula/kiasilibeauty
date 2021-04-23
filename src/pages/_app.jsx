import React from 'react';
import Head from 'next/head';
import '../styles/global.scss';

class App extends React.Component {
  componentDidMount() {
    console.log('Started');
  }

  render() {
    const {
      Component,
      pageProps,
    } = this.props;
    return (
      <>
        <Head>
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default App;