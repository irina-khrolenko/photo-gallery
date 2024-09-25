declare global {
interface Main {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    mainImage?: { data: Media };
    avatar?: { data: Media };
    mainVideo?: { data: Media };
    mainText?: any;
    sliderImage?: { data: Media };
    sliderText?: string;
    locale: string;
    localizations?: { data: Main[] };
  };
}
interface Main_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  mainImage?: Media_Plain;
  avatar?: Media_Plain;
  mainVideo?: Media_Plain;
  mainText?: any;
  sliderImage?: Media_Plain;
  sliderText?: string;
  locale: string;
  localizations?: Main_Plain[];
}
interface Main_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  mainImage?: number;
  avatar?: number;
  mainVideo?: number;
  mainText?: any;
  sliderImage?: number;
  sliderText?: string;
  locale: string;
  localizations?: Main[];
}
interface Main_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  mainImage?: AdminPanelRelationPropertyModification<Media_Plain>;
  avatar?: AdminPanelRelationPropertyModification<Media_Plain>;
  mainVideo?: AdminPanelRelationPropertyModification<Media_Plain>;
  mainText?: any;
  sliderImage?: AdminPanelRelationPropertyModification<Media_Plain>;
  sliderText?: string;
  locale: string;
  localizations?: Main[];
}
}

export {};