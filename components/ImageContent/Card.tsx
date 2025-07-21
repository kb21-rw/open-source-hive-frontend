import React from "react";
import Image from "next/image";

const Card = ({
  title,
  content,
  img,
}: {
  title: string;
  content: string;
  img: string;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <Image src={img} alt={title} width={1000} height={1000} />
      <h1 className="font-bold text-lg">{title}</h1>
      <p className="text-lg">{content}</p>
    </div>
  );
};

export default Card;
