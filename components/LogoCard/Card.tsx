import Image from "next/image";
import Link from "next/link";
import { LogoCard } from "@/types/HomePage";

const Card = ({ title, link, image }: LogoCard) => {
  const cardLink = link ? (link.isExternal ? link.url : `#${link.url}`) : "#";
  return (
    <div className="relative flex flex-col gap-4 w-auto h-40 justify-center">
      <Link href={cardLink} target="_blank" rel="noopener noreferrer">
        <Image
          src={image.url}
          title={title}
          alt={image.alternativeText || image.name || ""}
          fill
          className="object-contain cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default Card;
