import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, register } from "../../../Store/Auth/Action";

export function SignUp() {
  const jwt = localStorage.getItem("jwt");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const { auth } = useSelector((store) => store);

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
      navigate("/");
    }
  }, [jwt, auth.jwt]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };
  // console.log("signup data", userData);

  const handleSubmit = () => {
    dispatch(register(userData));
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>Sign Up</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Sign Up
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Enter your email and password to Sign Up.
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Your First Name
            </Typography>
            <Input
              onChange={(e) => handleChange(e)}
              label="First Name"
              size="lg"
              name="firstName"
            />
            <Typography className="-mb-2" variant="h6">
              Your Last Name
            </Typography>
            <Input
              onChange={(e) => handleChange(e)}
              label="Last Name"
              size="lg"
              name="lastName"
            />
            <Typography className="-mb-2" variant="h6">
              Your Email
            </Typography>
            <Input
              onChange={(e) => handleChange(e)}
              label="Email"
              size="lg"
              name="email"
            />
            <Typography className="-mb-2" variant="h6">
              Your Password
            </Typography>
            <Input
              onChange={(e) => handleChange(e)}
              label="Password"
              size="lg"
              name="password"
            />
            <div className="-ml-2.5 -mt-3">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleSubmit} fullWidth>
              Sign Up
            </Button>
            <Typography variant="small" className="mt-4 flex justify-center">
              Already have an account?
              <Link
                as="a"
                to="/login"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
                onClick={handleOpen}
              >
                Login
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
