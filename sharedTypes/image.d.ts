declare global {
interface Image {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    name: string;
    description?: string;
    tags: { data: Tag[] };
    image?: { data: Media };
    locale: string;
    localizations?: { data: Image[] };
  };
}
interface Image_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  description?: string;
  tags: Tag_Plain[];
  image?: Media_Plain;
  locale: string;
  localizations?: Image_Plain[];
}
interface Image_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  description?: string;
  tags: number[];
  image?: number;
  locale: string;
  localizations?: Image[];
}
interface Image_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  description?: string;
  tags: AdminPanelRelationPropertyModification<Tag_Plain>;
  image?: AdminPanelRelationPropertyModification<Media_Plain>;
  locale: string;
  localizations?: Image[];
}
}

export {};