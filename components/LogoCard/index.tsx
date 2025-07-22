import React from "react";
import Image from "next/image";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ImageCard = ({ title, description, cards }: any) => {
  return (
    <section className="py-[5.9375rem] flex flex-col justify-center gap-10 border-b border-[#007AB9] ">
      <div className="flex flex-col justify-center gap-[3.125rem]">
        <h1 className="text-3xl lg:text-[2.8125rem] font-bold">{title}</h1>
        {description && <p className="text-2xl font-normal">{description}</p>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20">
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {cards.map((card: any) => (
          <div
            key={card.id}
            className="relative flex flex-col gap-4 h-40 justify-center"
          >
            <Link
              href={card.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={card.img}
                alt={card.alternativeText || ""}
                fill
                className="object-contain cursor-pointer"
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageCard;
