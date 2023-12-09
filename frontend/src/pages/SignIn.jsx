import React from "react";
import Input from "../components/Input/Input";
import { Link } from "react-router-dom";
import Checkbox from "@mui/joy/Checkbox";
import Typography from "@mui/material/Typography";
const SignIn = () => {
  return (
    <div className="signup flex items-center ">
      <div className="left flex items-center justify-center">
        <div className="relative">
          <img
            src="/src/assets/sign.png"
            alt=""
            className="h-[100vh] w-[38vw]"
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

      <div className="right ml-[20vh] flex flex-col justify-center">
        <div className="title text-4xl font-pop font-medium text-[#141718]">
          Sign In
        </div>
        <div className="subtitle text text-[#6C7275] mt-4 text-base font-normal font-int">
          Don’t have an accout yet?
          <Link to="/sign-up" className="text-[#38CB89] font-semibold ml-1">
            Sign Up
          </Link>
        </div>
        <div className="form flex flex-col my-8">
          <form action="">
            <div className="form flex flex-col gap-7">
              <Input title="Your username or email address" />
              <Input title="Password" />
              <div className="row flex items-center justify-between ">
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
                      Remember me
                    </Typography>
                  }
                  variant="outlined"
                />
                <div className="text text-[#141718] font-int text-base font-semibold ">
                  Forgot password?
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="checkout ">
          <Link
            to="/success"
            className="bg-[#141718] py-3 px-6 flex items-center justify-center text-white font-int text-base font-medium rounded-md "
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
