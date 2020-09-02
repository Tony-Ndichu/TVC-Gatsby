import React, { useEffect } from 'react';
import Header from '../components/header';

export default function Media(){
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Header />
    </>
  );
};
