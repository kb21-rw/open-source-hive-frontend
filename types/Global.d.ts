import { Image } from "./Image";
import { RichText } from "@/types/richText";

export interface GlobalSettingsResponse {
  data: GlobalSettings;
  meta: Record<string, unknown>;
}

export interface GlobalSettings {
  id: number;
  documentId: string;
  siteName: string;
  siteDescription: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  favicon: Image;
  footer: Footer;
  navbar: NavBar[];
  seo: SEO;
}

export interface Footer {
  id: number;
  body: RichText[];
}

export interface NavBar {
  id: number;
  logo: Logo;
  menu: NavbarMenuItem[];
}

export interface Logo {
  id: number;
  logoText: string | null;
  logoImage: Image | null;
}

export interface NavbarMenuItem {
  id: number;
  label: string;
  url: string;
  isExternal: boolean;
}

export interface SEO {
  id: number;
  metaTitle: string;
  metaDescription: string;
}
