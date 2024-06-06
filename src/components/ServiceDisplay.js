import React from "react";
import SectionParagraphs from "./SectionParagraphs";
import HeadingMain from "./HeadingMain";
import HeadingSecondary from "./HeadingSecondary";
import Line from "./Line";
import ServiceCards from "./ServiceCards";

function ServiceDisplay() {
  const serivce_card_info = [
    {
      id: "01",
      text: "Gold Mining",
      img: "https://media.istockphoto.com/id/1409360196/photo/checking-everything-twice.webp?b=1&s=170667a&w=0&k=20&c=L0GlNfDWzzakG2YJvt7sGdHYg6CTOiU6wv3mxy9IoBs=",
    },
    {
      id: "02",
      text: "Gold Refining",
      img: "https://media.istockphoto.com/id/1480878765/photo/woman-engineer-working-in-power-plant-night-shift.webp?b=1&s=170667a&w=0&k=20&c=eiOtkBuh6LzFVuEl-e0g3aZwKB5Lph2ma-Cd7lI4ctE=",
    },
    {
      id: "03",
      text: "Cooporate Buying",
      img: "https://media.istockphoto.com/id/1482979397/photo/pipeline-and-valve-of-chemical-plant.webp?b=1&s=170667a&w=0&k=20&c=HUuLRiWWvMhUdUlowTLVGFKBTO99YjozuO_81Wbe2lA=",
    },
    {
      id: "04",
      text: "Selling",
      img: "https://media.istockphoto.com/id/1408408605/photo/gas-and-oil-industrial-workers-working-together-and-checking-pipeline-and-engine-pumps-in.webp?b=1&s=170667a&w=0&k=20&c=SQCkmt_dHN4Ofi-nx9SqB4whUAKs-nWYlCDB0SMpLfw=",
    },
    {
      id: "05",
      text: "Moldings",
      img: "https://media.istockphoto.com/id/1473945098/photo/oil-and-gas-refinery-industry-area-at-night.webp?b=1&s=170667a&w=0&k=20&c=lr5SsogJafTzlI-Y8Tm_0X864Z9F-62XniS9n0XRoh4=",
    },
    {
      id: "06",
      text: "Extracting",
      img: "https://media.istockphoto.com/id/514620986/photo/petrochemical-plant-illuminated-at-dusk.webp?b=1&s=170667a&w=0&k=20&c=XHYIjrKmySaPLojLmp2G9b7eFFhnD2YPDZHoi22ybrM=",
    },
  ];
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis dolor, mit malesuada non leo a, vehicula ornare nibh. Integer eget bibendum nulla, neced hendrerit magna. Nunc vitae ipsum interdum, vehicula ornare nibh. ";
  return (
    <div className="h-max p-12">
      <div className="grid grid-cols-2 items-center justify-center">
        <div className="pr-12 flex flex-col h-32 justify-between items-start">
          <HeadingSecondary heading="We Are The Leaders In Gold Refining"></HeadingSecondary>
          <Line></Line>
        </div>
        <div className="pl-12">
          <SectionParagraphs text={text}></SectionParagraphs>
        </div>
      </div>
      <div className="h-max pl-14 grid grid-cols-3 items-end place-content-center justify-center gap-y-11  py-24 ">
        {serivce_card_info.map((val) => {
          return <ServiceCards info={val}></ServiceCards>;
        })}
      </div>
    </div>
  );
}

export default ServiceDisplay;
