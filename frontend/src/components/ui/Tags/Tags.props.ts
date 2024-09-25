export interface TagsProps {
  tags: (Tag_Plain & { isChecked: boolean })[];
  changeTagSelection: (tag: any) => void;
}
