import React from "react";
import Baner from "../components/Baner/Baner";
import CardContact from "../components/CardContact/CardContact";
import MacroCard from "../components/MacroCard/MacroCard";
import Form from "../components/Form/Form";
import { Link } from "react-router-dom";
const ContactUs = () => {
  return (
    <div className="contactus ">
      <div className="content mx-48">
        <div className="header-page flex items-center mt-4">
          <div className="right flex items-center gap-1">
            <div className="home font-int text-[#605F5F] text-sm font-medium">
              <Link to="/">Home</Link>
            </div>
            <div className="image ">
              <img src="src/assets/chevron-right.png" alt="" />
            </div>
          </div>
          <div className="textCon text-[#121212] font-int font-medium text-sm ml-4">
            Contact Us
          </div>
        </div>
        <div className="maincontent flex flex-col mr-[31vw] gap-6 mt-10">
          <div className="title text-[#141718] font-pop text-6xl font-medium ">
            We believe in sustainable decor. We’re passionate about life at
            home.
          </div>
          <div className="description text-[#141718] font-int text-base font-normal">
            Our features timeless furniture, with natural fabrics, curved lines,
            plenty of mirrors and classic design, which can be incorporated into
            any decor project. The pieces enchant for their sobriety, to last
            for generations, faithful to the shapes of each period, with a touch
            of the present
          </div>
        </div>
        <div className="my-12">
          <Baner />
        </div>
        <div className="content flex flex-col items-center justify-center">
          <div className="title text-[#121212] font-pop text-4xl font-medium">
            Contact Us
          </div>
          <div className="cards my-10 flex items-center justify-center gap-6">
            <CardContact
              image="src/assets/store 01.png"
              title="Adress"
              subtitle="234 Hai Trieu, Ho Chi Minh City, 
Viet Nam"
            />
            <CardContact
              image="src/assets/store 01.png"
              title="Adress"
              subtitle="234 Hai Trieu, Ho Chi Minh City, 
Viet Nam"
            />
            <CardContact
              image="src/assets/store 01.png"
              title="Adress"
              subtitle="234 Hai Trieu, Ho Chi Minh City, 
Viet Nam"
            />
          </div>
        </div>
        <div className="form pb-20 flex items-center justify-center gap-28">
          <Form />
          <div className="div relative flex items-center justify-center">
            <img src="src/assets/harta.png" alt="" />
            <div className="div2 absolute flex items-center justify-center">
              <img src="src/assets/location.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="macro-cards bg-[#F3F5F7] flex items-center justify-center gap-20">
        <MacroCard
          image="\src\assets\delivery.png"
          title="Free Shipping"
          description="Order above $200"
        />
        <MacroCard
          image="\src\assets\delivery.png"
          title="Free Shipping"
          description="Order above $200"
        />
        <MacroCard
          image="\src\assets\delivery.png"
          title="Free Shipping"
          description="Order above $200"
        />
        <MacroCard
          image="\src\assets\delivery.png"
          title="Free Shipping"
          description="Order above $200"
        />
      </div>
    </div>
  );
};

export default ContactUs;
