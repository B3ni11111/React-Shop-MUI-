import Item from "./Item";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import BetterItem from "./BetterItem";
import Card from "@mui/material/Card";
import { Rowing } from "@mui/icons-material";

export default function ShopItems({ data, addToCart }) {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        p: 2,
        minHeight: "100vh",
        maxWidth: 1400,
        mx: "auto",
      }}
    >
      <Grid container spacing={3}>
        {data.map((i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={i.id}>
            <BetterItem i={i} addToCart={addToCart} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
