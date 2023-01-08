import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";

export default function SearchBarUi() {
  return (
    <Box sx={{ display: "flex", flexWrap: "nowarp", marginX: "5%" }}>
      <TextField
        label="Search"
        variant="outlined"
        placeholder="Search..."
        size="small"
      />
      <IconButton aria-label="search">
        <SearchIcon style={{ fill: "#90AFC5" }} />
      </IconButton>
    </Box>
  );
}
