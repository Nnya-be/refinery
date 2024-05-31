import React from "react";

function FooterHeader(props) {
    const {heading} = props
  return (
    <>
      <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-200 uppercase title-font">
        {heading}
      </h2>
    </>
  );
}

export default FooterHeader;
