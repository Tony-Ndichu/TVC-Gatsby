import React from "react"
import Header from "../components/header"
import Introduction from '../components/introduction';
import VisionAndMission from '../components/visionAndMission';
import ObjectivesAndCoreValues from '../components/objectivesAndCoreValues';

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