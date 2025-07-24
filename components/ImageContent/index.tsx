import React from "react";
import Card from "./Card";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ImageContent = ({ id, title, description, cards }: any) => {
  return (
    <section
      id={id}
      className="py-[5.9375rem] flex flex-col justify-center gap-10 border-b border-[#007AB9] "
    >
      <div className="flex flex-col justify-center gap-[3.125rem]">
        <h1 className="text-3xl lg:text-[2.8125rem] font-bold">{title}</h1>
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
