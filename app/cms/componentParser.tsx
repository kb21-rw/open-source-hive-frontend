import ImageContent from "@/components/ImageContent";
import ImageCard from "@/components/ImageCard";
import LogoCard from "@/components/LogoCard";
import { Section } from "@/types/HomePage";
import TextContent from "@/components/TextContent";

const ComponentParser = ({ sections }: { sections: Section[] }) => {
  return (
    <>
      {sections &&
        sections.map((item: Section & { id: number }, index: number) => {
          const key = `${item.id}-${item.__component}-${index}`;

          switch (item.__component) {
            case "blocks.content-block":
              return <TextContent key={key} {...item} />;
            case "blocks.image-content-section":
              return <ImageContent key={key} {...item} />;

            case "blocks.image-card-section":
              return <ImageCard key={key} {...item} />;

            case "blocks.logo-card-section":
              return <LogoCard key={key} {...item} />;

            default:
              return null;
          }
        })}
    </>
  );
};

export default ComponentParser;
