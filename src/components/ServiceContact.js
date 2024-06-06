import React from "react";
import HeadingMain from "./HeadingMain";
import HeadingSecondary from "./HeadingSecondary";
import SectionParagraphs from "./SectionParagraphs";

function ServiceContact() {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis dolor, mit malesuada non leo a, vehicula ornare nibh. ";
  return (
    <div className='h-screen text-white text-center grid bg-cover bg-blend-overlay bg-[url("https://images.unsplash.com/photo-1683009427540-c5bd6a32abf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop")]'>
      <div className="h-full w-full bg-stone-950  bg-opacity-75 flex items-center justify-center">
        <div className="bg-gradient-to-r from-stone-400 ml-80 to-slate-50 h-4/6 w-1/2 rounded-3xl pl-32 py-20  px-8 flex items-start justify-between flex-col text-start">
          <HeadingMain heading="We Cooperate"></HeadingMain>
          <HeadingSecondary heading="Start Refining Your Assets With Us"></HeadingSecondary>
          <SectionParagraphs text={text}></SectionParagraphs>
        </div>
      </div>
    </div>
  );
}

export default ServiceContact;
