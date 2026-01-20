import { Box, Typography, Avatar } from "@mui/material";

export default function Profile({ data }) {
  return (
    <Box sx={{ p: 4, display: "flex", gap: 4 }}>
      <Avatar
        alt={data?.userName || "User"}
        src={data?.img ? URL.createObjectURL(data.img) : ""}
        sx={{ width: 200, height: 200 }}
      />
      <Box>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Profile
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Box>
    </Box>
  );
}
