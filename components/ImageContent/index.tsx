import React from "react";
import Card from "./Card";

const content = [
  {
    id: 1,
    title: "Card 1",
    content: `Lorem ipsum dolor sit amet,consectetur adipiscing elit. Mauris dignissim ante et Lorem ipsum dolor sit amet 1`,
    img: "/images/project.png",
  },
  {
    id: 2,
    title: "Card 2",
    content: `Lorem ipsum dolor sit amet,consectetur adipiscing elit. Mauris dignissim ante et Lorem ipsum dolor sit amet 2`,
    img: "/images/project.png",
  },
  {
    id: 3,
    title: "Card 3",
    content: `Lorem ipsum dolor sit amet,consectetur adipiscing elit. Mauris dignissim ante et Lorem ipsum dolor sit amet 3`,
    img: "/images/project.png",
  },
  {
    id: 1,
    title: "Card 4",
    content: `Lorem ipsum dolor sit amet,consectetur adipiscing elit. Mauris dignissim ante et Lorem ipsum dolor sit amet 4`,
    img: "/images/project.png",
  },
  {
    id: 2,
    title: "Card 5",
    content: `Lorem ipsum dolor sit amet,consectetur adipiscing elit. Mauris dignissim ante et Lorem ipsum dolor sit amet 5`,
    img: "/images/project.png",
  },
  {
    id: 3,
    title: "Card 6",
    content: `Lorem ipsum dolor sit amet,consectetur adipiscing elit. Mauris dignissim ante et Lorem ipsum dolor sit amet 6`,
    img: "/images/project.png",
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ImageContent = ({ title, description, cards }: any) => {
  return (
    <section className="py-[5.9375rem] flex flex-col justify-center gap-10 border-b border-[#007AB9] ">
      <div className="flex flex-col justify-center gap-[3.125rem]">
        <h1 className="text-[2.8125rem] font-bold">{title}</h1>
        <p className="text-2xl font-normal">{description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20">
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {cards.map((card: any) => (
          <Card {...card} key={card.id} />
        ))}
      </div>
    </section>
  );
};

export default ImageContent;
