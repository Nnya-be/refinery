import React from "react";
import HeadingMain from "./HeadingMain";
import HeadingSecondary from "./HeadingSecondary";
import Line from "./Line";
import SectionParagraphs from "./SectionParagraphs";
import Cloud from "./cloud";
import Star from "./star";
import Loud from "./loud";
function ServiceInfo() {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis dolor, mit malesuada non leo a, vehicula ornare nibh. Integer eget bibendum nulla, neced hendrerit magna. Nunc vitae ipsum interdum, vehicula ornare nibh. Integer eget bibendum nulla, neced hendrerit magna. Nunc vitae ipsum interdum vehicula ornare nibh. Integer eget bibendum nulla, neced hendrerit magna. Nunc vitae ipsum interdum";

  return (
    <div className="h-max ">
        <div className="h-lvh px-12 py-20 bg-white grid grid-cols-2">
      <div className="flex-col pr-12 flex justify-around items-start">
        <div className="pr-12 flex-col h-3/6 flex justify-around items-start">
          <HeadingMain heading="Our Special Services"></HeadingMain>
          <HeadingSecondary heading="The Devoted Special Service"></HeadingSecondary>
          <Line></Line>
        </div>
        <div className="h-2/6 w-full text-slate-700 flex items-center justify-between">
          <div className="flex items-center justify-between">
            <Cloud></Cloud>
            <span className="text-2xl font-bold">We Keep </span>
          </div>
          <div className="flex items-center justify-between">
            <Star></Star>
            <span className="text-2xl font-bold">We Keep </span>
          </div>
          <div className="flex items-center justify-between">
            <Loud></Loud>
            <span className="text-2xl font-bold">We Keep </span>
          </div>
        </div>
        <div>
          <SectionParagraphs text={text}></SectionParagraphs>
        </div>
      </div>
      <div>
        <img
          src="https://plus.unsplash.com/premium_photo-1707155465652-67f85e920ebe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVldGluZyUyMG9mJTIwYmxhY2tzfGVufDB8fDB8fHww" alt=""
          className="h-full w-full rounded-xl aspect-video"
        ></img>
      </div>
    </div>
    </div>
  );
}

export default ServiceInfo;
