import React from "react";

function SectionParagraphs(props) {
  console.log(props.text)
  const text = props.text
  const color = props.color;
  //   console.log(color);
  const text_style = color
    ? {
        color: "#e5e0e0",
      }
    : {};
  return (
    <div className="text-slate-500 text-justify text-center text-lg" style={text_style}>
      {text}
    </div>
  );
}

export default SectionParagraphs;
