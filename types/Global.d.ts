import { Image } from "./Image";

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
  navbarMenu: NavbarMenu[];
  seo: SEO;
}

interface Footer {
  id: number;
  body: string;
}

interface NavbarMenu {
  id: number;
  label: string;
  link: Link[];
}

interface SEO {
  id: number;
  metaTitle: string;
  metaDescription: string;
}
