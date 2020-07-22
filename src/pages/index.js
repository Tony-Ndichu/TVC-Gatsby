import React from "react"
import Header from "../components/header"
import Introduction from '../components/Introduction';
import VisionAndMission from '../components/VisionAndMission';
import ObjectivesAndCoreValues from '../components/ObjectivesAndCoreValues';

export default function Home() {
  return (
    <>
      <Header />
      <Introduction />
      <VisionAndMission />
      <ObjectivesAndCoreValues />
    </>
  )
}