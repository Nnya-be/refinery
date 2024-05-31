import React from "react";
import SectionSecondaryHeading from "./SectionSecondaryHeading";
import SectionMainHeading from "./SectionMainHeading";
import Line from "./Line";

function SectionHeadings() {
  return (
    <div className="flex flex-col h-5/6 py-4 justify-between">
      <SectionMainHeading></SectionMainHeading>
      <SectionSecondaryHeading></SectionSecondaryHeading>
      <Line></Line>
    </div>
  );
}

export default SectionHeadings;
