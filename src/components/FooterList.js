import React from "react";

function FooterList(props) {
    const list = props.list
  return (
    <>
      <li className="mt-3">
        <a className="text-gray-500 cursor-pointer hover:text-gray-600">
          {list}
        </a>
      </li>
    </>
  );
}

export default FooterList;
