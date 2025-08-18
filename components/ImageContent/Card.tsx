import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ImageContentCard } from "@/types/HomePage";
import RichText from "../ui/RichText";

const Card = ({ title, description, image, link }: ImageContentCard) => {
  return (
    <Link href={link.url} target="_blank" className="flex flex-col gap-4">
      <Image
        src={image.url}
        alt={image.alternativeText || image.name || ""}
        width={2000}
        height={1000}
        className="h-72 object-center object-cover hover:scale-105 transition duration-400"
      />
      <h1 className="font-bold text-lg">{title}</h1>
      {description && (
        <div className="text-lg text-justify">
          <RichText content={description.body} />
        </div>
      )}
    </Link>
  );
};

export default Card;
