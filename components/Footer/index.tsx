import React from "react";
import { type Footer } from "@/types/Global";
import RichText from "../ui/RichText";

const Footer = ({ body }: Footer) => {
  return (
    <div className="py-[5.9375rem] ">
      <div className="text-[#007AB9] text-center text-2xl font-bold">
        <RichText content={body} />
      </div>
    </div>
  );
};

export default Footer;
