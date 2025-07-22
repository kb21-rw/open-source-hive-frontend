import React from "react";
import Image from "next/image";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Media = ({ url, alternativeText, title }: any) => {
  return (
    <Link href="#" target="_blank" rel="noopener noreferrer">
      <Image
        src={url}
        alt={alternativeText + title}
        width={40}
        height={40}
        className="cursor-pointer"
      />
    </Link>
  );
};

export default Media;
