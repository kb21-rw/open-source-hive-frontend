import { ContentBlock } from "@/types/HomePage";
import React from "react";
import RichText from "../ui/RichText";

const TextContent = ({ hash_tag, title, description }: ContentBlock) => {
  return (
    <section
      id={hash_tag || ""}
      className="py-[5.9375rem]  flex flex-col justify-center gap-[3.125rem] border-b border-[#007AB9]"
    >
      <h1 className="text-3xl lg:text-[2.8125rem] font-bold">{title}</h1>
      {description && (
        <div className="text-2xl font-normal">
          <RichText content={description.body} />
        </div>
      )}
    </section>
  );
};

export default TextContent;
