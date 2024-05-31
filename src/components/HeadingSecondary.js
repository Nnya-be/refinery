import React from "react";

function HeadingSecondary(props) {
  const heading = props.heading;
  const color = props.color;
  //   console.log(color);
  const text_style = color
    ? {
        color: "white",
      }
    : {};
  return (
    <div>
      <span
        className="text-slate-800 text-5xl capitalize"
        style={text_style}
      >
        {heading}
      </span>
    </div>
  );
}

export default HeadingSecondary;
