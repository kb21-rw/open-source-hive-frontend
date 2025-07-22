import React from "react";

const TextContent = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <section
      id="about"
      className="py-[5.9375rem] flex flex-col justify-center gap-[3.125rem] border-b border-[#007AB9]"
    >
      <h1 className="text-3xl lg:text-[2.8125rem] font-bold">{title}</h1>
      <p className="text-2xl font-normal">{description}</p>
    </section>
  );
};

export default TextContent;
