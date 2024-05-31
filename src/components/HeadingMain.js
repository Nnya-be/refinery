import React from "react";

function HeadingMain(props) {
  const heading = props.heading;
  //   console.log(heading);
  const main = heading.split(" ");
  const head = main[0]

  return (
    <div className="uppercase text-xl font-bold">
      <span className="  text-slate-800 rounded-l-md bg-gradient-to-b from-amber-700 to-amber-200 p-2 ">
        {heading.split(" ")[0]}
      </span>
      <span className="text-slate-500 pl-2">{heading.split(" ")[1]} {heading.split(" ")[2]}</span>
    </div>
  );
}

export default HeadingMain;
