import React, { useEffect } from 'react';
import Header from '../components/header';
import ContactDetails from '../components/contactDetails';
import { Helmet } from "react-helmet";

export default function Contact(){
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contacts</title>
          <meta name="Contacts" content="Reach out to us through these contacts." />
        </Helmet >
      <Header />
      <ContactDetails />
    </>
  );
};
