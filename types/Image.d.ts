export interface Image {
  id: number;
  documentId: string;
  alternativeText: string | null;
  height: number;
  name: string;
  url: string;
  width: number;
}

export interface Images {
  data: Image[];
}
