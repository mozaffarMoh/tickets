import { CopyToClipboard } from "react-copy-to-clipboard";
import React from "react";
import { Button, TextField } from "@mui/material";
import "./Clipboard.scss";

const Clipboard = () => {
  const [text, setText] = React.useState("");
  return (
    <div className="clipboard flexCenterColumn">
      <CopyToClipboard text={text}>
        <Button variant="contained" color="success">
          Copy
        </Button>
      </CopyToClipboard>
      <TextField
        placeholder="Type to copy"
        onChange={(e: any) => setText(e.target.value)}
      />
    </div>
  );
};

export default Clipboard;
