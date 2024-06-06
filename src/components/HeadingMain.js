import React from "react";

function HeadingMain(props) {
  const { heading } = props;

  const [main, secondary, third] = heading.split(" ");

  return (
    <div className="uppercase text-xl font-bold">
      <span className="  text-slate-800 rounded-l-md bg-gradient-to-b from-amber-700 to-amber-200 p-2 ">
        {main}
      </span>
      <span className="text-slate-500 pl-2">
        {secondary} {third}
      </span>
    </div>
  );
}

export default HeadingMain;
