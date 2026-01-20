import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h2" sx={{ mb: 2 }}>
        About Us
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
    </Box>
  );
}
