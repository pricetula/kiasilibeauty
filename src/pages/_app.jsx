import React from 'react';
import Head from 'next/head';
import App from '../component/layout/App';
import '../styles/global.scss';

class AppMain extends React.Component {
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
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;400;500;900&family=Roboto:wght@900&family=Caveat&display=swap"
            rel="stylesheet"
          />
        </Head>
        <App>
          <Component {...pageProps} />
        </App>
      </>
    );
  }
}

export default AppMain;