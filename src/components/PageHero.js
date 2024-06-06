import React from "react";

function PageHero(props) {
  const heading = props.heading
  return (
    <div class="h-96 text-white text-center grid bg-cover bg-blend-overlay bg-[url('https://images.unsplash.com/photo-1683009427540-c5bd6a32abf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop')]">
      <div class="col-start-1 row-start-1 bg-stone-950  bg-opacity-80 w-full h-full"></div>
      <div class="col-start-1 row-start-1 mx-auto my-auto">
        <h1 class="font-bold text-5xl uppercase">{heading}</h1>
      </div>
    </div>
  );
}

export default PageHero;
