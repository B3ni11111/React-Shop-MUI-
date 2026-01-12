import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { v4 as uuid } from "uuid";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";

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

export default function EnterData({ data, setData, setSigned }) {
  const handleChange = (evt) => {
    const { name, value, files } = evt.target;

    setData((curr) => ({
      ...curr,
      [name]: files ? files[0] : value, // אם זה קובץ, שים את הקובץ, אחרת את הערך
    }));
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault(); // מונע רענון
          setSigned(true);
        }}
      >
        <TextField
          required
          id="filled-required"
          label="Username"
          variant="filled"
          onChange={handleChange}
          name="userName"
        />
        <TextField
          required
          id="filled-password-input"
          label="Password"
          type="password"
          variant="filled"
          onChange={handleChange}
          name="password"
        />
        <Button
          component="label"
          role={undefined}
          variant="outlined"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload files
          <VisuallyHiddenInput
            name="img"
            type="file"
            onChange={handleChange}
            multiple
          />
        </Button>
        <Avatar
          alt="Beeny Bar"
          src={data.img ? URL.createObjectURL(data.img) : ""}
          sx={{ width: 56, height: 56 }}
        />

        {/* <label htmlFor="userName">Enter Username</label>
        <input
          type="text"
          placeholder="userName"
          value={data.userName}
          onChange={handleChange}
          name="userName"
          id="userName"
        /> */}
        {/* <label htmlFor="password">Enter password</label>
        <input
          type="password"
          placeholder="password"
          value={data.password}
          onChange={handleChange}
          name="password"
          id="password"
        /> */}

        <Button type="submit" variant="contained">
          SignUp
        </Button>
      </form>
    </div>
  );
}
