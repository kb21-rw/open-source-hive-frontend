import { Image } from "./Image";
import { Link } from "./Link";
import { RichText } from "@/types/richText";

export interface HomepageResponse {
  data: HomePageData;
  meta: Record<string, unknown>;
}

export interface HomePageData {
  id: number;
  documentId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  sections: Section[];
}
export type Section =
  | ContentBlock
  | ImageContentSection
  | ImageCardSection
  | LogoCardSection;

export interface ContentBlock {
  __component: "blocks.content-block";
  id: number;
  hash_tag: string | null;
  title: string;
  description: RichTextType | null;
}

export interface ImageContentSection {
  __component: "blocks.image-content-section";
  id: number;
  hash_tag: string | null;
  header: SectionHeader;
  cards: ImageContentCard[];
}

export interface ImageContentCard {
  id: number;
  title: string;
  description: RichTextType | null;
  image: Image;
  link: Link;
}

export interface ImageCardSection {
  __component: "blocks.image-card-section";
  id: number;
  hash_tag: string | null;
  header: SectionHeader;
  cards: ImageCard[];
}

export interface ImageCard {
  id: number;
  names: string;
  image: Image;
  logos: SocialLogo[];
}

export interface SocialLogo {
  id: number;
  label: string;
  image: Image;
  link: Link;
}

export interface LogoCardSection {
  __component: "blocks.logo-card-section";
  id: number;
  hash_tag: string | null;
  header: SectionHeader;
  cards: LogoCard[];
}

export interface LogoCard {
  id: number;
  title: string;
  image: Image;
  link: Link;
}

export interface SectionHeader {
  id: number;
  hash_tag: string | null;
  title: string;
  description: RichTextType | null;
}

export interface RichTextType {
  id: number;
  body: RichText[];
}
