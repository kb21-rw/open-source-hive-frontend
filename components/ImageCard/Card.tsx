import React from "react";
import Image from "next/image";
import Media from "./Media";
import { ImageCard, SocialLogo } from "@/types/HomePage";

const Card = ({ names, image, logos }: ImageCard) => {
  return (
    <div className="flex flex-col gap-2">
      <Image
        src={image.url}
        alt={image.alternativeText || image.name || ""}
        width={1000}
        height={1000}
        className="h-72 w-72 object-center object-cover filter grayscale hover:filter-none transition duration-300 ease-in-out"
      />
      {names && <h1 className="font-bold text-lg pt-1">{names}</h1>}
      {logos && (
        <div className="flex gap-2.5">
          {logos.map((card: SocialLogo) => (
            <Media key={card.id} {...card} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
