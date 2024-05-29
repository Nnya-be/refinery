import React from "react";
import WhoText from "./WhoText";

function WhoSection() {
  return (
    <div className="h-lvh  grid grid-cols-1 py-10 justify-center items-center">
      <div className="h-min bg-stone-800 grid grid-cols-2 justify-between items-center">
        <img className="h-full w-full" alt="" src="https://plus.unsplash.com/premium_photo-1663011459555-1c09a156dffb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JvdXAlMjB3b3JrfGVufDB8fDB8fHww"></img>
        <WhoText></WhoText>
      </div>
    </div>
  );
}

export default WhoSection;
