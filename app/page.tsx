import TextContent from "@/components/TextContent";
import ImageContent from "@/components/ImageContent";
import ImageCard from "@/components/ImageCard";
import { teamCard, logoCards, imageContent, alumniCard } from "@/lib/data";
export default function Home() {
  return (
    <section className="min-h-screen">
      <TextContent />
      <TextContent />
      <ImageContent {...imageContent} />
      <ImageCard {...teamCard} />
      <ImageCard {...alumniCard} />
      <ImageCard {...logoCards} />
    </section>
  );
}
