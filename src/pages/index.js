import React from "react"
import Header from "../components/header"
import Introduction from '../components/introduction';
import VisionAndMission from '../components/visionAndMission';
import ObjectivesAndCoreValues from '../components/objectivesAndCoreValues';
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
          <meta name="Home" content="David Mbiti Wambuli Vocational and Technical College is a registered National Technical and Vocational college located in Mbooni, Makueni County-Kenya." />
        </Helmet >
      <Header />
      <Introduction />
      <VisionAndMission />
      <ObjectivesAndCoreValues />
    </>
  )
}