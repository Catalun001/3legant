import React from "react";
import "./Form.css";
const Form = () => {
  return (
    <form action="">
      <div className="form flex flex-col gap-6">
        <div className="fullname flex flex-col gap-3 text-[#6C7275] font-int text-xs font-bold ">
          <label htmlFor="name">FULL NAME</label>
          <div className="font-int text-sm font-normal ">
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              required
              style={{ width: "60vh" }}
            />
          </div>
        </div>
        <div className="email  flex flex-col gap-3 text-[#6C7275] font-int text-xs font-bold">
          <label htmlFor="email ">EMAIL ADDRESS</label>
          <div className="font-int text-sm font-normal ">
            <input
              type="text"
              id="email"
              placeholder="Your Email"
              required
              style={{ width: "60vh" }}
            />
          </div>
        </div>
        <div className="message  flex flex-col gap-3 text-[#6C7275] font-int text-xs font-bold">
          <label htmlFor="message">MESSAGE</label>
          <div className="font-int text-sm font-normal ">
            <textarea
              type="text"
              id="message"
              placeholder="Your message"
              style={{ width: "60vh",height: "20vh" }}
              
              required
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
