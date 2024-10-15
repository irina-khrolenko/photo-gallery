export interface GalleryPaginationProps {
  pageSize: number;
  pagesCount: number;
  currentPage: number;
  handleChangePageSize: (pageSize: number) => void;
  handleChangePage: (page: number) => void;
}
