import React from "react";
import Input from "../components/Input/Input";
import { Link } from "react-router-dom";
import Checkbox from "@mui/joy/Checkbox";
import Typography from "@mui/material/Typography";
const SignUp = () => {
  return (
    <div className="signup flex items-center max-sm:flex-col ">
      <div className="left flex items-center justify-center">
        <div className="relative w-full">
          <img
            src="/src/assets/sign.png"
            alt=""
            className="h-[100vh] w-[38vw] max-sm:w-full object-cover max-sm:h-[145vw] max-md:w-[50vw] max-lg:w-[50vw] max-xl:w-[50vw] "
          />
        </div>
        <div className="logo absolute top-0 left-1/6 mt-5">
          <div className="left-header font-pop text-2xl font-medium leading-6 text-black flex items-center">
            <Link to="/">3legant</Link>
            <div className="font-pop text-2xl font-medium leading-6 text-[#6C7275]">
              .
            </div>
          </div>
        </div>
      </div>

      <div className="right ml-[20vh] flex flex-col justify-center max-sm:ml-0 max-sm:p-10 max-md:ml-[2vh] max-lg:ml-[4vh] max-xl:ml-[5vh]">
        <div className="title text-4xl font-pop font-medium text-[#141718]">
          Sign up
        </div>
        <div className="subtitle text text-[#6C7275] mt-4 text-base font-normal font-int">
          Already have an account?
          <Link to="/sign-in" className="text-[#38CB89] font-semibold ml-1">
            Sign in
          </Link>
        </div>
        <div className="form flex flex-col my-8">
          <form action="">
            <div className="form flex flex-col gap-5">
              <Input title="First name" />
              <Input title="Username" />
              <Input title="Email address" />
              <Input title="Password" isPassword />
              <Checkbox
                color="neutral"
                disabled={false}
                label={
                  <Typography
                    variant="body1"
                    style={{
                      color: "#6C7275",
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontWeight: "400",
                    }}
                  >
                    I agree with
                    <span className="text-[#141718] font-int text-base font-semibold mx-1">
                      Privacy Policy
                    </span>
                    and
                    <span className="text-[#141718] font-int text-base font-semibold mx-1">
                      Terms of Use
                    </span>
                  </Typography>
                }
                variant="outlined"
              />
            </div>
          </form>
        </div>
        <div className="checkout">
          <Link
            to="/success"
            className="bg-[#141718] py-3 px-6 flex items-center justify-center text-white font-int text-base font-medium rounded-md"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
