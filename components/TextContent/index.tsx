import React from "react";

const TextContent = ({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) => {
  return (
    <section
      id={id}
      className="py-[5.9375rem] flex flex-col justify-center gap-[3.125rem] border-b border-[#007AB9]"
    >
      <h1 className="text-3xl lg:text-[2.8125rem] font-bold">{title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: description }}
        className="text-2xl font-normal [&_a]:text-blue-500 [&_a]:underline"
      />
    </section>
  );
};

export default TextContent;
