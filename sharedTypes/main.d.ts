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
    phoneMockup?: { data: Media };
    instaLikes?: { data: Media };
    instaMockup?: { data: Media };
    instaMediaOne?: { data: Media };
    instaMediaTwo?: { data: Media };
    parallaxImages?: { data: Media[] };
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
  phoneMockup?: Media_Plain;
  instaLikes?: Media_Plain;
  instaMockup?: Media_Plain;
  instaMediaOne?: Media_Plain;
  instaMediaTwo?: Media_Plain;
  parallaxImages?: Media_Plain[];
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
  phoneMockup?: number;
  instaLikes?: number;
  instaMockup?: number;
  instaMediaOne?: number;
  instaMediaTwo?: number;
  parallaxImages?: number[];
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
  phoneMockup?: AdminPanelRelationPropertyModification<Media_Plain>;
  instaLikes?: AdminPanelRelationPropertyModification<Media_Plain>;
  instaMockup?: AdminPanelRelationPropertyModification<Media_Plain>;
  instaMediaOne?: AdminPanelRelationPropertyModification<Media_Plain>;
  instaMediaTwo?: AdminPanelRelationPropertyModification<Media_Plain>;
  parallaxImages?: AdminPanelRelationPropertyModification<Media_Plain>[];
  locale: string;
  localizations?: Main[];
}
}

export {};