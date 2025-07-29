import React from "react";
import Image from "next/image";
import Media from "./Media";
import { ImageCard, SocialLogo } from "@/types/HomePage";

const Card = ({ names, image, logos }: ImageCard) => {
  return (
    <div className="flex flex-col gap-4">
      <Image
        src={image.url}
        alt={image.alternativeText || image.name || ""}
        width={1000}
        height={1000}
      />
      {names && <h1 className="font-bold text-lg">{names}</h1>}
      {logos && (
        <div className="flex gap-4">
          {logos.map((card: SocialLogo) => (
            <Media key={card.id} {...card} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
