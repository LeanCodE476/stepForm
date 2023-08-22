import { Box, Button, Container, TextField } from "@mui/material";
import { useContext } from "react";
import { multiStepContext } from "../StepContext";
const SecondStep = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", width: "25rem" }}
    >
      <TextField
        label="firstName"
        margin="normal"
        variant="outlined"
        color="secondary"
        value={userData["firstName"]}
        onChange={(e) =>
          setUserData({ ...userData, firstName: e.target.value })
        }
      />
      <TextField
        label="LastName"
        margin="normal"
        variant="outlined"
        color="secondary"
        value={userData["LastName"]}
        onChange={(e) => setUserData({ ...userData, LastName: e.target.value })}
      />
      <TextField
        label="ContactNumber"
        margin="normal"
        variant="outlined"
        color="secondary"
        value={userData["ContactNumber"]}
        onChange={(e) =>
          setUserData({ ...userData, "ContactNumber": e.target.value })
        }
      />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setStep(1)}
        >
          Back
        </Button>
        <span>---</span>

        <Button variant="contained" color="primary" onClick={() => setStep(3)}>
          Next
        </Button>
      </Box>
    </Container>
  );
};

export default SecondStep;
