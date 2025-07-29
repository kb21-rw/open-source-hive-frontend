import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-[60vh] font-bold flex flex-col justify-center items-center gap-4">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-medium text-primary">
        The Page you are looking for is not found
      </h1>
      <p className="text-lg font-extralight">
        We apologize for the inconvenience. Please try again later.
      </p>
      <Link
        className="bg-[#007AB9] text-2xl text-white py-3 px-6 font-semibold rounded-4xl"
        href={"/"}
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
