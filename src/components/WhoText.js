import React from "react";
import HeadingMain from "../components/HeadingMain";
import Line from "./Line";
import SectionParagraphs from "./SectionParagraphs";
import HeadingSecondary from "./HeadingSecondary";

function WhoText() {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis dolor, mit malesuada non leo a, vehicula ornare nibh. Integer eget bibendum nulla, neced hendrerit magna. Nunc vitae ipsum interdum, varius magna ut, sollicitudin nunc. Pellentesque habitant morbi tristique senectus et.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis.";
  return (
    <div className="h-full flex flex-col justify-center items-start px-40 py-10">
      <div className="h-[16rem]">
        <div className="flex flex-col h-5/6 py-4 justify-between">
          <HeadingMain heading="Who We Are"></HeadingMain>
          <HeadingSecondary
            heading="The Devoted Special Services"
            color="white"
          ></HeadingSecondary>
          <Line></Line>
        </div>
      </div>
      <SectionParagraphs
        text={text}
        color="white"
      ></SectionParagraphs>
    </div>
  );
}

export default WhoText;
