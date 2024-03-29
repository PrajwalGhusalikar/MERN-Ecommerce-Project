import React from "react";
import { Stepper, Step, Typography, Button } from "@material-tailwind/react";
import { useLocation, useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import DeliveryAddress from "../Checkout/DeliveryAddress"
import OrderSummary from "../Checkout/OrderSummary"
import PaymentCheckout from "../Checkout/PaymentCheckout"

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
      <div className="w-full sm:px-24 px-6 text-wrap py-4">
        <Stepper
          activeStep={activeStep}
          lineClassName="bg-green-200/50"
          activeLineClassName="bg-green-800"
        >
          <Step
            activeClassName=" !bg-red-300 "
            completedClassName="!bg-green-400 text-white"
            onClick={() => setSteps(1)}
          >
            <AddShoppingCartIcon className="h-5 w-5" />
            <div className="absolute -bottom-[2rem]  text-wrap w-max-20 mx-1 text-center">
              <Typography
                color={activeStep === 0 ? "blue-gray" : "gray"}
                className="font-normal"
              >
                Placed
              </Typography>
            </div>
          </Step>
          <Step
            activeClassName=" !bg-orange-300 "
            completedClassName="!bg-green-400 text-white"
            onClick={() => setSteps(2)}
          >
            <AssignmentTurnedInIcon className="h-5 w-5" />
            <div className="absolute -bottom-[3rem] text-wrap mx-1 w-max-20 text-center">
              <Typography
                className={`font-normal text-wrap text-${
                  activeStep === 1 ? "slate-900" : "slate-600"
                }`}
              >
                Order Confirmed
              </Typography>
            </div>
          </Step>
          <Step
            activeClassName=" !bg-blue-300 "
            completedClassName="!bg-green-400 text-white"
            onClick={() => setSteps(3)}
          >
            <LocalShippingIcon className="h-5 w-5" />
            <div className="absolute -bottom-[2rem] text-wrap mx-1 w-max-20 text-center">
              <Typography
                color={activeStep === 2 ? "blue-gray" : "gray"}
                className="font-normal"
              >
                Shipped
              </Typography>
            </div>
          </Step>
          <Step
            activeClassName=" !bg-blue-200 "
            completedClassName="!bg-green-400 text-white"
            onClick={() => setSteps(4)}
          >
            <DeliveryDiningIcon className="h-5 w-5" />
            <div className="absolute -bottom-[3rem]  text-wrap mx-1 w-max-20 text-center">
              <Typography
                color={activeStep === 3 ? "blue-gray" : "gray"}
                className="font-normal text-wrap"
              >
                Out For Delivery
              </Typography>
            </div>
          </Step>
          <Step
            activeClassName=" !bg-green-900 "
            completedClassName="!bg-green-700 text-white"
            onClick={() => setSteps(5)}
          >
            <PersonPinCircleIcon className="h-5 w-5" />
            <div className="absolute -bottom-[2rem] w-max mx-1 text-center">
              <Typography
                color={activeStep === 4 ? "blue-gray" : "gray"}
                className="font-normal"
                variant="h6"
              >
                Delivered
              </Typography>
            </div>
          </Step>
        </Stepper>
        <div className="mt-20 flex justify-between">
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
        {steps === 3 && <PaymentCheckout />}
      </div>
    </>
  );
}
