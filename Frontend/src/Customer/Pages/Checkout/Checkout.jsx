import React from "react";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import {
  CogIcon,
  UserIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";
import { useLocation, useNavigate } from "react-router-dom";
import DeliveryAddress from "./DeliveryAddress";
import OrderSummary from "./OrderSummary";

export function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const searchParams = new URLSearchParams(location.search);
  const steps = parseInt(searchParams.get("step") || "1", 10);
  React.useEffect(() => {
    setActiveStep(steps - 1);
    setIsFirstStep(steps === 1);
    setIsLastStep(steps === 3);
  }, [location.search]);

  const handleNext = () => {
    if (!isLastStep) {
      setActiveStep((prevStep) => prevStep + 1);
      setSteps(activeStep + 2);
    }
  };

  const handlePrev = () => {
    if (!isFirstStep) {
      setActiveStep((prevStep) => prevStep - 1);
      setSteps(activeStep);
    }
  };

  const setSteps = (step) => {
    navigate(`?step=${step}`);
  };

  return (
    <>
      <div className="w-full px-24 py-4">
        <Stepper activeStep={activeStep}>
          <Step onClick={() => setSteps(1)}>
            <UserIcon className="h-5 w-5" />
            <div className="absolute -bottom-[4.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 0 ? "blue-gray" : "gray"}
              >
                Step 1
              </Typography>
              <Typography
                color={activeStep === 0 ? "blue-gray" : "gray"}
                className="font-normal"
              >
                Delivery Address
              </Typography>
            </div>
          </Step>
          <Step onClick={() => setSteps(2)}>
            <CogIcon className="h-5 w-5" />
            <div className="absolute -bottom-[4.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 1 ? "blue-gray" : "gray"}
              >
                Step 2
              </Typography>
              <Typography
                color={activeStep === 1 ? "blue-gray" : "gray"}
                className="font-normal"
              >
                Order Summary
              </Typography>
            </div>
          </Step>
          <Step onClick={() => setSteps(3)}>
            <BuildingLibraryIcon className="h-5 w-5" />
            <div className="absolute -bottom-[4.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 2 ? "blue-gray" : "gray"}
              >
                Step 3
              </Typography>
              <Typography
                color={activeStep === 2 ? "blue-gray" : "gray"}
                className="font-normal"
              >
                Payment
              </Typography>
            </div>
          </Step>
        </Stepper>
        <div className="mt-32 flex justify-between">
          <Button onClick={handlePrev} disabled={isFirstStep}>
            Prev
          </Button>
          <Button onClick={handleNext} disabled={isLastStep}>
            Next
          </Button>
        </div>
      </div>
      <div className="component">
        {steps === 1 && <DeliveryAddress />}
        {steps === 2 && <OrderSummary />}
        {steps === 3 && <DeliveryAddress />}
      </div>
    </>
  );
}
