import React, { useState } from "react";
import { Button, Box, TextField } from "@mui/material";
import axios from "axios";

const MyForm: React.FC = () => {
  const [jobDefName, setJobDefName] = useState("");
  const [extractFile, setExtractFile] = useState("");

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const xmls = `<request><entry name="JobDefinitionName" value="${jobDefName}" /><entry name="ExtractFile" value="${extractFile}" /></request>`;
    const res = await axios.post("http://localhost:8081/cccc", xmls, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
    console.log(res);
  };

  return (
    <div className="container">
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Box m={2}>
          <TextField
            id="jobDefName"
            label="Job Definition Name"
            value={jobDefName}
            onChange={(e) => setJobDefName(e.target.value)}
          />
        </Box>
        <Box m={2}>
          <TextField
            id="extractFile"
            label="Extract File"
            value={extractFile}
            onChange={(e) => setExtractFile(e.target.value)}
          />
        </Box>
        <Box m={2}>
          <Button
            type="submit"
            variant="contained"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default MyForm;
