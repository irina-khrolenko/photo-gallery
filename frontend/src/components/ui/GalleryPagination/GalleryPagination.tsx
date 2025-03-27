import Pagination from "@mui/material/Pagination";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { GalleryPaginationProps } from "./GalleryPagination.props";
import { useTranslations } from "next-intl";

export const GalleryPagination = ({
  pageSize,
  pagesCount,
  currentPage,
  handleChangePageSize,
  handleChangePage,
}: GalleryPaginationProps) => {
  const t = useTranslations("");
  return (
    <div className="flex w-full justify-end p-4 items-center">
      <div className="flex w-fit justify-end p-4 items-center">
        <Typography variant="body1" className="w-fit">
          {t("PageSize")}:
        </Typography>{" "}
        <FormControl variant="standard" sx={{ m: 1, width: "fit-content" }}>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={pageSize}
            onChange={(e) => handleChangePageSize(e.target.value as number)}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Pagination
        count={pagesCount}
        showFirstButton
        showLastButton
        page={currentPage}
        onChange={(e, page) => handleChangePage(page)}
      />
    </div>
  );
};
