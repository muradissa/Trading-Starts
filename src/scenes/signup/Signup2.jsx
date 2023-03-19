import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SignupStep1 from './SignupStep1';
import SignupStep2 from './SignupStep2';
import SignupStep3 from './SignupStep3';
import './signup.css'
const steps = ['Email & Password', 'Personal information', 'Verfaction'];

export default function Signup2() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  const checkSeps = () =>{
    return activeStep;
  }

  return (
    <div className="signup-form-container">
      <Box sx={{ }} className="signup-form-container2">
        <Stepper nonLinear activeStep={activeStep} color="info">
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]} color="primary">
              <StepButton color="info" onClick={handleStep(index)} >
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          {allStepsCompleted() ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {activeStep === 0 && <SignupStep1/>}
              {activeStep === 1 && <SignupStep2/>}
              {activeStep === 2 && <SignupStep3/>}
              {/* <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                Step {activeStep + 1}
              </Typography> */}
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className="sec-btn"
                >
                  Back
                </button>
                <Box sx={{ flex: '1 1 auto' }} />
                 {completedSteps() !== totalSteps() - 1 && 
                    <button onClick={handleComplete} className="sec-btn">
                      Next
                    </button>
                  }
                {/* <button onClick={handleNext} className="sec-btn">
                  Next
                </button> */}
                {/* {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                    <Typography variant="caption" sx={{ display: 'inline-block',color:"#fff" }}>
                      Step {activeStep + 1} already completed
                    </Typography>
                  ) : (
                    <button onClick={handleComplete} className="sec-btn"> 
                      {completedSteps() === totalSteps() - 1
                        ? 'Finish'
                        : 'Complete '}
                    </button>
                  ))} */}
                  {completedSteps() === totalSteps() - 1 && 
                    <button onClick={handleComplete} className="sec-btn"> 
                       Finish
                    </button>
                  }
              </Box>
            </React.Fragment>
          )}
        </div>
      </Box>
    </div>
  );
}