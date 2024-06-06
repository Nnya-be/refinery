import React from "react";

function ServiceCards(props) {
  const info = props.info;
  return (
    <div className="bg-white shadow-lg w-80 h-80 rounded-3xl">
      <img src={info.img} className="h-5/6 rounded-t-3xl"></img>
      <div className="w-full h-1/6 text-center pt-2  text-black">
        
        <span className="text-center flex items-center w-full text-black text-2xl">
        <div className="w-12 border-2 mx-8 border-slate-400"></div>
            {info.text}
        </span>
      </div>
    </div>
  );
}

export default ServiceCards;
