import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <html lang={lang || 'en'} />

        <title>Gunish Matta</title>
        <meta name="title" content=" ⚡️gunishmatta.github.io" />
        <meta name="description" content="Portfolio Website for Gunish Matta" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gunishmatta.github.io/" />
        <meta property="og:title" content="⚡️gunishmatta.github.io" />
        <meta property="og:description" content="Portfolio Website for Gunish Matta" />
        <meta property="og:image" content="https://ardiusib.sirv.com/Images/metadata.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gunishmatta.github.io/" />
        <meta property="twitter:title" content="⚡️gunishmatta.github.io" />
        <meta property="twitter:description" content="Portfolio Website for Gunish Matta" />
        <meta property="twitter:image" content="https://ardiusib.sirv.com/Images/metadata.png" />
      </Helmet>
      <App />
    </>
  );
};
