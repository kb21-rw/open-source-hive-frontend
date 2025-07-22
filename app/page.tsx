import TextContent from "@/components/TextContent";
import ImageContent from "@/components/ImageContent";
import ImageCard from "@/components/ImageCard";
import LogoCards from "@/components/LogoCard";
import {
  teamCard,
  logoCards,
  imageContent,
  alumniCard,
  rdatech,
  about,
} from "@/lib/data";
export default function Home() {
  return (
    <section className="min-h-screen">
      <TextContent {...about} />
      <TextContent {...rdatech} />
      <ImageContent {...imageContent} />
      <ImageCard {...teamCard} />
      <ImageCard {...alumniCard} />
      <LogoCards {...logoCards} />
    </section>
  );
}
