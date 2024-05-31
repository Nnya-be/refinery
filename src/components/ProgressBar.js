import React from "react";

function ProgressBar(props) {
  // console.log(props.info);
  const info = props.info;
  
  const style = {
    width: `${info.progress}%`
  }
  return (
    <div className="text-slate-950 w-full h-max">
      <div className=" flex flex-row justify-between text-2xl py-2">
        <span className="inline">{info.name}</span>
        <span className="inline">{`${info.progress}`}%</span>
      </div>
      <div className=" w-full bg-slate-200 h-2 rounded-xl">
        <div className="bg-gradient-to-r from-amber-200 to-amber-700 h-full rounded-l-xl " style={style}></div>
      </div>
    </div>
  );
}

export default ProgressBar;
