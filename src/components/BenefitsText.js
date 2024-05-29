import React from "react";
import SectionHeadings from "./SectionHeadings";
import CardShort from "./CardShort";

function BenefitsText() {
  return (
    <div className="pr-8 py-32 h-lvh  grid grid-rows-2 justify-around items-start">
      <SectionHeadings></SectionHeadings>
      <div className="flex flex-col h-64 justify-around">
        <CardShort></CardShort>
        <CardShort></CardShort>
      </div>
    </div>
  );
}

export default BenefitsText;
