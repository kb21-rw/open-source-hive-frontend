"use client";

import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

import Link from "next/link";

interface RichTextType {
  content: BlocksContent;
}

const RichText = ({ content }: RichTextType) => {
  return (
    <div className="">
      <BlocksRenderer
        content={content}
        blocks={{
          heading: ({ children }) => (
            <h1 className="text-xl md:text-2xl lg:text-3xl font-medium">
              {children}
            </h1>
          ),

          paragraph: ({ children }) => {
            return <div className="text-white">{children}</div>;
          },

          list: ({ children }) => (
            <ul className={`ml-6 text-left text-[#007AB9]"] `}>{children}</ul>
          ),

          "list-item": ({ children }) => <li className="my-2">{children}</li>,

          link: ({ children, url }) => (
            <Link
              key={"children?.props?.id"}
              href={url}
              className="hover:text-[#007AB9]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </Link>
          ),
        }}
      />
    </div>
  );
};

export default RichText;
