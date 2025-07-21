import React from "react";
import Image from "next/image";
import Media from "./Media";

const Card = ({
  title,
  content,
  img,
  logosIcon,
}: {
  title: string | null;
  content: string | null;
  img: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  logosIcon: any;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <Image src={img} alt={title || ""} width={1000} height={1000} />
      {title && <h1 className="font-bold text-lg">{title}</h1>}
      {content && <p className="text-lg">{content}</p>}
      {logosIcon && (
        <div className="flex gap-4">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {logosIcon.map((card: any) => (
            <Media {...card} key={card.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
