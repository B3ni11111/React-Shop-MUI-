import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { v4 as uuid } from "uuid";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import logo from "./assets/logo.jpg";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function EnterData({ data, setData, setSigned, img }) {
  const handleChange = (evt) => {
    const { name, value, files } = evt.target;

    setData((curr) => ({
      ...curr,
      [name]: files ? files[0] : value,
    }));
  };

  return (
    <>
      <Box
        component="img"
        src={logo}
        alt="Logo"
        sx={{
          width: 120,
          height: 120,
          objectFit: "contain",
        }}
        onClick={(e) => {
          e.preventDefault();
          navigateToShop();
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          bgcolor: "background.default",
          p: 3,
        }}
      >
        <Card
          sx={{
            maxWidth: 400,
            width: "100%",
            p: 3,
          }}
        >
          <CardContent>
            <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
              Sign Up
            </Typography>
            <Box
              component="form"
              onSubmit={(e) => {
                e.preventDefault();
                setSigned(true);
              }}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <TextField
                required
                id="filled-required"
                label="Username"
                variant="filled"
                onChange={handleChange}
                name="userName"
                sx={{
                  "& .MuiInputBase-root": {
                    bgcolor: "background.default",
                    color: "text.primary",
                  },
                  "& .MuiInputLabel-root": {
                    color: "text.secondary",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "primary.main",
                  },
                }}
              />
              <TextField
                required
                id="filled-password-input"
                label="Password"
                type="password"
                variant="filled"
                onChange={handleChange}
                name="password"
                sx={{
                  "& .MuiInputBase-root": {
                    bgcolor: "background.default",
                    color: "text.primary",
                  },
                  "& .MuiInputLabel-root": {
                    color: "text.secondary",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "primary.main",
                  },
                }}
              />
              <Button
                component="label"
                role={undefined}
                variant="outlined"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                sx={{
                  color: "text.primary",
                  borderColor: "primary.main",
                  "&:hover": {
                    borderColor: "primary.dark",
                    bgcolor: "action.hover",
                  },
                }}
              >
                Upload files
                <VisuallyHiddenInput
                  name="img"
                  type="file"
                  onChange={handleChange}
                  multiple
                />
              </Button>
              {data.img && (
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Avatar
                    alt="User Avatar"
                    src={data.img ? URL.createObjectURL(data.img) : ""}
                    sx={{ width: 56, height: 56 }}
                  />
                </Box>
              )}
              <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                SignUp
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
