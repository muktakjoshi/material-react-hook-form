import React from "react";
import { Button } from "@material-ui/core";
import TextField from "./components/TextField";

function MyForm() {
  return (
    <div>
      <TextField
        name="firstName"
        label="First Name"
        rules={{ required: "Required!" }}
      />
      <br />
      <br />
      <TextField
        name="lastName"
        label="Last Name"
        rules={{ required: "Required!" }}
      />

      <br />
      <br />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </div>
  );
}

export default MyForm;
