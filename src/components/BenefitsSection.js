import React from "react";
import BenefitsText from "./BenefitsText";

function BenefitsSection() {
  return (
    <div className="h-max justify-between items-center  bg-slate-100 px-8 py-10 grid grid-cols-2">
      <BenefitsText></BenefitsText>
      <div className="h-[40rem] py-2">
        <img
          className="h-full rounded-2xl"
          alt=""
          src="https://plus.unsplash.com/premium_photo-1677783978856-150f6e9e357f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdvbGQlMjByZWZpbmVyeXxlbnwwfHwwfHx8MA%3D%3D"
        ></img>
      </div>
    </div>
  );
}

export default BenefitsSection;
