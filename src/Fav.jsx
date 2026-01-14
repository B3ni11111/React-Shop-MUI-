import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { Box } from "@mui/material";

export default function Fav({ fav, onClick }) {
  return (
    <Box sx={{ cursor: "pointer" }} onClick={onClick}>
      {fav ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
    </Box>
  );
}
