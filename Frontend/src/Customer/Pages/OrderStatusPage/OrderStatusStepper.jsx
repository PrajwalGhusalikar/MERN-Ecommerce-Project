import React from "react";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import {
  UserIcon,
  BuildingLibraryIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { useLocation, useNavigate } from "react-router-dom";
// import DeliveryAddress from "./DeliveryAddress";
// import OrderSummary from "./OrderSummary";
// import PaymentCheckout from "./PaymentCheckout";

export default function OrderStatusStepper() {
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
    setIsLastStep(steps === 5);
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
        <Stepper activeStep={activeStep} completedClassName="bg-pink-500"  lineClassName="bg-green-200/50"
            activeLineClassName="bg-green-800">
          <Step onClick={() => setSteps(1)}>
            <UserIcon className="h-5 w-5" />
            <div className="absolute -bottom-[2rem] w-max text-center">
              <Typography
                color={activeStep === 0 ? "blue-gray" : "gray"}
                className="font-normal"
              >
                Placed
              </Typography>
            </div>
          </Step>
          <Step onClick={() => setSteps(2)}>
            <ShoppingCartIcon className="h-5 w-5" />
            <div className="absolute -bottom-[2rem] w-max text-center">
              <Typography
                color={activeStep === 1 ? "blue-gray" : "gray"}
                className="font-normal"
              >
                Order Confirmed
              </Typography>
            </div>
          </Step>
          <Step onClick={() => setSteps(3)}>
            <BuildingLibraryIcon className="h-5 w-5" />
            <div className="absolute -bottom-[2rem] w-max text-center">
              <Typography
                color={activeStep === 2 ? "blue-gray" : "gray"}
                className="font-normal"
              >
                Shipped
              </Typography>
            </div>
          </Step>
          <Step onClick={() => setSteps(4)}>
            <BuildingLibraryIcon className="h-5 w-5" />
            <div className="absolute -bottom-[2rem] w-max text-center">
              <Typography
                color={activeStep === 3 ? "blue-gray" : "gray"}
                className="font-normal"
              >
                Out For Delivery
              </Typography>
            </div>
          </Step>
          <Step onClick={() => setSteps(5)}>
            <BuildingLibraryIcon className="h-5 w-5" />
            <div className="absolute -bottom-[2rem] w-max text-center">
              <Typography
                color={activeStep === 4 ? "blue-gray" : "gray"}
                className="font-normal"
              >
                Delivered
              </Typography>
            </div>
          </Step>
        </Stepper>
        {/* <div className="mt-20 flex justify-between">
          <Button onClick={handlePrev} disabled={isFirstStep}>
            Prev
          </Button>
          <Button onClick={handleNext} disabled={isLastStep}>
            Next
          </Button>
        </div> */}
      </div>
      <div className="component">
        {/* {steps === 1 && <DeliveryAddress />}
        {steps === 2 && <OrderSummary />}
        {steps === 3 && <PaymentCheckout />} */}
      </div>
    </>
  );
}
