import React from "react";
import Image from "next/image";
import Link from "next/link";
import { type LogoCard, LogoCardSection } from "@/types/HomePage";
import RichText from "../ui/RichText";

const LogoCard = ({ hash_tag, header, cards }: LogoCardSection) => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20">
        {cards.map((card: LogoCard, index: number) => (
          <div
            key={card.id + index + card.title}
            className="relative flex flex-col gap-4 h-40 justify-center"
          >
            <Link
              href={card.link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={card.image.url}
                alt={card.image.alternativeText || card.image.name || ""}
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

export default LogoCard;
