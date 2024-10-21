declare global {
interface Category {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    name?: string;
    coverImage?: { data: Media };
    category: string;
    locale: string;
    localizations?: { data: Category[] };
  };
}
interface Category_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name?: string;
  coverImage?: Media_Plain;
  category: string;
  locale: string;
  localizations?: Category_Plain[];
}
interface Category_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name?: string;
  coverImage?: number;
  category: string;
  locale: string;
  localizations?: Category[];
}
interface Category_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name?: string;
  coverImage?: AdminPanelRelationPropertyModification<Media_Plain>;
  category: string;
  locale: string;
  localizations?: Category[];
}
}

export {};