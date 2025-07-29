import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SocialLogo } from "@/types/HomePage";

const Media = ({ label, image, link }: SocialLogo) => {
  return (
    <Link
      href={link.url}
      title={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={image.url}
        alt={image.alternativeText || image.name || ""}
        width={40}
        height={40}
        className="cursor-pointer"
      />
    </Link>
  );
};

export default Media;
