// Interface automatically generated by schemas-to-ts

import { Category } from '../../../category/content-types/category/category';
import { Category_Plain } from '../../../category/content-types/category/category';
import { AdminPanelRelationPropertyModification } from '../../../../common/schemas-to-ts/AdminPanelRelationPropertyModification';

export interface Tag {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    name: string;
    tag: string;
    category?: { data: Category };
    locale: string;
    localizations?: { data: Tag[] };
  };
}
export interface Tag_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  tag: string;
  category?: Category_Plain;
  locale: string;
  localizations?: Tag_Plain[];
}

export interface Tag_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  tag: string;
  category?: number;
  locale: string;
  localizations?: Tag[];
}

export interface Tag_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  tag: string;
  category?: AdminPanelRelationPropertyModification<Category_Plain>;
  locale: string;
  localizations?: Tag[];
}
