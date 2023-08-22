import { Button, Container, TextField } from "@mui/material";
import { useContext } from "react";
import { multiStepContext } from "../StepContext";
const FirstStep = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", width: "25rem" }}
    >
      <TextField
        label="Email"
        margin="normal"
        variant="outlined"
        color="secondary"
        value={userData["Email"]}
        onChange={(e) => setUserData({ ...userData, Email: e.target.value })}
      />
      <TextField
        label="Country"
        margin="normal"
        variant="outlined"
        color="secondary"
        value={userData["Country"]}
        onChange={(e) => setUserData({ ...userData, Country: e.target.value })}
      />
      <TextField
        label="District"
        margin="normal"
        variant="outlined"
        color="secondary"
        value={userData["District"]}
        onChange={(e) => setUserData({ ...userData, "District": e.target.value })}
      />

      <Button variant="contained" color="primary" onClick={() => setStep(2)}>
        Next
      </Button>
    </Container>
  );
};

export default FirstStep;
