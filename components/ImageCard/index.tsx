import React from "react";
import Card from "./Card";

const content = [
  {
    id: 1,
    title: "FirstName 1",
    content: null,
    img: "/images/project.png",
    logosIcon: [
      {
        id: 1,
        title: "logo",
        alternativeText: "logo",
        url: "images/github.svg",
      },
      {
        id: 2,
        title: "logo",
        alternativeText: "logo",
        url: "images/github.svg",
      },
      {
        id: 3,
        title: "logo",
        alternativeText: "logo",
        url: "images/github.svg",
      },
    ],
  },
  {
    id: 2,
    title: "FirstName 2",
    content: null,
    img: "/images/project.png",
    logosIcon: [
      {
        id: 1,
        title: "logo",
        alternativeText: "logo",
        url: "images/github.svg",
      },
      {
        id: 2,
        title: "logo",
        alternativeText: "logo",
        url: "images/github.svg",
      },
      {
        id: 3,
        title: "logo",
        alternativeText: "logo",
        url: "images/github.svg",
      },
    ],
  },
  {
    id: 3,
    title: "FirstName 3",
    content: null,
    img: "/images/project.png",
    logosIcon: [
      {
        id: 1,
        title: "logo",
        alternativeText: "logo",
        url: "images/github.svg",
      },
      {
        id: 2,
        title: "logo",
        alternativeText: "logo",
        url: "images/github.svg",
      },
      {
        id: 3,
        title: "logo",
        alternativeText: "logo",
        url: "images/github.svg",
      },
    ],
  },
  {
    id: 1,
    title: "FirstName 4",
    content: null,
    img: "/images/project.png",
    logosIcon: [
      {
        id: 1,
        title: "logo",
        alternativeText: "logo",
        url: "images/github.svg",
      },
      {
        id: 2,
        title: "logo",
        alternativeText: "logo",
        url: "images/github.svg",
      },
      {
        id: 3,
        title: "logo",
        alternativeText: "logo",
        url: "images/github.svg",
      },
    ],
  },
  {
    id: 2,
    title: "FirstName 5",
    content: null,
    img: "/images/project.png",
    logosIcon: [
      {
        id: 1,
        title: "logo",
        alternativeText: "logo",
        url: "images/github.svg",
      },
      {
        id: 2,
        title: "logo",
        alternativeText: "logo",
        url: "images/github.svg",
      },
      {
        id: 3,
        title: "logo",
        alternativeText: "logo",
        url: "images/github.svg",
      },
    ],
  },
  {
    id: 3,
    title: "FirstName 6",
    content: null,
    img: "/images/project.png",
    logosIcon: [
      {
        id: 1,
        title: "logo",
        alternativeText: "logo",
        url: "images/github.svg",
      },
      {
        id: 2,
        title: "logo",
        alternativeText: "logo",
        url: "images/github.svg",
      },
      {
        id: 3,
        title: "logo",
        alternativeText: "logo",
        url: "images/github.svg",
      },
    ],
  },
];

const ImageCard = () => {
  return (
    <section className="py-[5.9375rem] flex flex-col justify-center gap-10 border-b border-[#007AB9] ">
      <div className="flex flex-col justify-center gap-[3.125rem]">
        <h1 className="text-[2.8125rem] font-bold">Our Projects</h1>
        <p className="text-2xl font-normal">
          We are a network of Rwandan open source developers contributing to
          open
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20">
        {content.map((card) => (
          <Card {...card} key={card.id} />
        ))}
      </div>
    </section>
  );
};

export default ImageCard;
