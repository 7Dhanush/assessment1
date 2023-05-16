import { Button, TextField, Typography } from "@mui/material";
import React from "react";

const Blog = () => {
  return (
    <div>
      <br /> <br />
      <br /> <br />
      <br /> <br />
      <Typography variant="h3" style={{ color: "" }}>
        ADD DETIALS{" "}
      </Typography>
      <TextField label="Blog Name"></TextField>
      <br /> <br />
      <TextField fullWidth label="Description" multiline rows={10}></TextField>
      <br /> <br />
      <TextField label="Author Name" />
      <br /> <br />
      <Button variant="contained">submit</Button>
    </div>
  );
};

export default Blog;
