import FirstStep from "./components/FirstStep"
import SecondStep from "./components/SecondStep"
import ThirdStep from "./components/ThirdStep"
import { Stepper, StepLabel, Step, Container } from "@mui/material"
import { multiStepContext } from "./StepContext"
import { useContext } from "react"
function App() {

const {currentStep,finalData}=useContext(multiStepContext)
  const showStep = (step) => {
    
    switch (step) {
      case 1:
        return <FirstStep />
      case 2:
        return <SecondStep />
      case 3:
        return <ThirdStep />
    }
  }
  return (
    <>
      <h3 style={{ textAlign: "center" }}>React MultiStepAplication</h3>
      <Container sx={{ width: "25rem"}}>
        <Stepper activeStep={currentStep -1} orientation="horizontal">
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
      </Container>
      {showStep(currentStep)}
    </>
  );
}

export default App
