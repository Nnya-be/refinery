import React from "react";
import HeadingSecondary from "./HeadingSecondary";
import Line from "./Line";
import CardShort from "./CardShort";
import HeadingMain from "./HeadingMain";

function BenefitsText() {
  return (
    <div className="pr-8 py-32 h-lvh  grid grid-rows-2 justify-around items-start">
      <div className="flex flex-col h-5/6 py-4 justify-between">
        <HeadingMain heading="Our Benefits"></HeadingMain>
        <HeadingSecondary heading='Why Choose Us?'></HeadingSecondary>
        <Line></Line>
      </div>
      {/* <SectionHeadings></SectionHeadings> */}
      <div className="flex flex-col h-64 justify-around">
        <CardShort></CardShort>
        <CardShort></CardShort>
      </div>
    </div>
  );
}

export default BenefitsText;
