// Interface automatically generated by schemas-to-ts

import { Category } from './category';
import { Category_Plain } from './category';
import { AdminPanelRelationPropertyModification } from '../common/AdminPanelRelationPropertyModification';

export interface Tag {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    name: string;
    categories: { data: Category[] };
    locale: string;
    localizations?: { data: Tag[] };
  };
}
export interface Tag_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  categories: Category_Plain[];
  locale: string;
  localizations?: Tag_Plain[];
}

export interface Tag_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  categories: number[];
  locale: string;
  localizations?: Tag[];
}

export interface Tag_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  categories: AdminPanelRelationPropertyModification<Category_Plain>;
  locale: string;
  localizations?: Tag[];
}
