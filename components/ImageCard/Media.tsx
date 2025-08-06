import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SocialLogo } from "@/types/HomePage";

const Media = ({ label, image, link }: SocialLogo) => {
  const mediaLink = link ? (link.isExternal ? link.url : `#${link.url}`) : "#";
  return (
    <Link
      href={mediaLink}
      title={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={image.url}
        alt={image.alternativeText || image.name || ""}
        width={30}
        height={30}
        className="cursor-pointer transform hover:scale-120 transition duration-400"
      />
    </Link>
  );
};

export default Media;
