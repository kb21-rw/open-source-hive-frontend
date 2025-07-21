import React from "react";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Media = ({ url, alternativeText, title }: any) => {
  return (
    <Image src={url} alt={alternativeText + title} width={40} height={40} />
  );
};

export default Media;
