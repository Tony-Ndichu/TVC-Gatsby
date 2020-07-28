import React, { useEffect } from 'react';
import Header from '../components/header';
import ContactDetails from '../components/contactDetails';

export default function Contact(){
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Header />
      <ContactDetails />
    </>
  );
};
