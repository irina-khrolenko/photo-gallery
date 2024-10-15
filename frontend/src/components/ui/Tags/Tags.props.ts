export interface TagsProps {
  tags: (Tag_Plain & { isChecked: boolean })[];
  changeTagsSelection: (tag: any[]) => void;
  collections: any[];
}
