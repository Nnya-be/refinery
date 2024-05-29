import React from "react";
import SectionHeadings from "./SectionHeadings";
import SectionParagraphs from "./SectionParagraphs";

function WhoText() {
  return (
    <div className="h-full flex flex-col justify-center items-start px-40 py-10">
      <div className="h-[16rem]">
        <SectionHeadings></SectionHeadings>
      </div>
      <SectionParagraphs></SectionParagraphs>
    </div>
  );
}

export default WhoText;
