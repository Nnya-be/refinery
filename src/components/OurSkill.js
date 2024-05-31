import React from "react";

import Line from "./Line";
import SectionParagraphs from "./SectionParagraphs";
import ProgressBar from "./ProgressBar";
import HeadingMain from "./HeadingMain";
import HeadingSecondary from "./HeadingSecondary";

function OurSkill() {
  const info = [
    {
      name: "Deliver Business",
      progress: 80,
    },
    {
      name: "Refining Time",
      progress: 70,
    },
    {
      name: "Faculty Winnings",
      progress: 40,
    },
    {
      name: "User Ratings",
      progress: 90,
    },
  ];
  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis dolor, mit malesuada non leo a, vehicula ornare nibh. Integer eget bibendum nulla, neced hendrerit magna. Nunc vitae ipsum interdum,'
  return (
    <div className="h-lvh p-8 text-4xl grid  items-center">
      <div className="h-full grid grid-cols-2 gap-x-8 ">
        <div className="h-5/6 flex flex-col pt-28 justify-center items-start py-12">
          <div className="flex flex-col h-full py-4 justify-between">
            <HeadingMain heading="Our Skill"></HeadingMain>
            <HeadingSecondary heading="The Leading Source Of Our Skill" color=''></HeadingSecondary>
            <Line></Line>
          </div>
          <SectionParagraphs text={text}></SectionParagraphs>
        </div>
        <div className="flex flex-col py-36 justify-between items-center">
          {info.map((value) => {
            return <ProgressBar info={value}></ProgressBar>;
          })}
        </div>
      </div>
    </div>
  );
}

export default OurSkill;
