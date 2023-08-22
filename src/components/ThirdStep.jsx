import { Box, Button, Container, TextField } from "@mui/material";
import { useContext } from "react";
import { multiStepContext } from "../StepContext";

const ThirdStep = () => {
     const { setStep, userData, setUserData, submitData } =
       useContext(multiStepContext);
  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", width: "25rem" }}
    >
      <TextField
        label="City"
        margin="normal"
        variant="outlined"
        color="secondary"
        value={userData["City"]}
        onChange={(e) => setUserData({ ...userData, City: e.target.value })}
      />
      <TextField
        label="LandMark"
        margin="normal"
        variant="outlined"
        color="secondary"
        value={userData["LandMark"]}
        onChange={(e) => setUserData({ ...userData, LandMark: e.target.value })}
      />
      <TextField
        label="PostalCode"
        margin="normal"
        variant="outlined"
        color="secondary"
        value={userData["PostalCode"]}
        onChange={(e) =>
          setUserData({ ...userData, "PostalCode": e.target.value })
        }
      />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setStep(2)}
        >
          Back
        </Button>
        <span>---</span>
        <Button variant="contained" color="primary" onClick={submitData}>
          Submit Data
        </Button>
      </Box>
    </Container>
  );
};

export default ThirdStep;
