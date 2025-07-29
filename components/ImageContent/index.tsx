import React from "react";
import Card from "./Card";
import RichText from "../ui/RichText";
import { ImageContentCard, ImageContentSection } from "@/types/HomePage";

const ImageContent = ({ hash_tag, header, cards }: ImageContentSection) => {
  return (
    <section
      id={hash_tag || ""}
      className="py-[5.9375rem] flex flex-col justify-center gap-10 border-b border-[#007AB9] "
    >
      <div className="flex flex-col justify-center gap-[3.125rem]">
        <h1 className="text-3xl lg:text-[2.8125rem] font-bold">
          {header.title}
        </h1>
        {header.description && (
          <div className="text-2xl font-normal">
            <RichText content={header.description.body} />
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20">
        {cards.map((card: ImageContentCard) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default ImageContent;
