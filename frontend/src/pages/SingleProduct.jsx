import React from "react";
import Product from "../components/Product/Product";
import MiniCard from "../components/MiniCard/MiniCard";
import { Link, useParams } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Newsletter from "../components/Newsletter/Newsletter";
const SingleProduct = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="single  flex flex-col gap-2">
      <div className="header mx-48 flex items-center py-4 gap-4 max-sm:mx-4 max-md:mx-10 max-lg:mx-14 max-xl:mx-16 max-2xl:mx-[120px]">
        <div className="text-[#605F5F] font-int text-sm font-medium flex items-center gap-1">
          <Link to="/">Home</Link>
          <img src="/src/assets/chevron-right.png" alt="" />
        </div>
        <div className="text-[#605F5F] font-int text-sm font-medium flex items-center gap-1">
          <Link to="/shop">Shop</Link>
          <img src="/src/assets/chevron-right.png" alt="" />
        </div>
        <div className="text-[#121212] font-int text-sm font-medium flex items-center gap-1">
          Product
        </div>
      </div>
      <div className="product mx-48 max-sm:mx-4 max-md:mx-10 max-lg:mx-14 max-xl:mx-16 max-2xl:mx-[120px]">
        <Product
          id={id}
          price={1000}
          oldPrice="1050"
          measurements="17 1/2x20 5/8 "
          title="Tray Table"
          rating={3}
          newTag
          images={[
            "/src/assets/chair.png",
            "/src/assets/under1.jpg",
            "/src/assets/under2.jpg",
            "/src/assets/under3.jpg",
          ]}
          productCode={1240}
          imagesColors={{
            Black: "/src/assets/chair1.jpg",
            Beige: "/src/assets/chair2.jpg",
            Red: "/src/assets/chair3.jpg",
          }}
          description="Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with a removable tray top, handy for serving snacks."
          category="Living Room"
        />
      </div>
      <div className="more mx-48 mt-5 max-sm:mx-4 max-md:mx-10 max-lg:mx-14 max-xl:mx-16 max-2xl:mx-[120px]">
        <div className="new flex-col items-center justify-between ">
          <div className="titleandmore flex items-center justify-between flex-wrap">
            <div className="title text-2xl text-black font-medium font-pop py-2">
              You might also like
            </div>
            <div className="more ">
              <div className="2text text-black inline-flex font-int font-medium text-base border-b border-black ">
                <div className="content flex items-center text-base">
                  <Link to="/shop">More Products</Link>
                  <img src="src\assets\arrow-right1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="slider py-14 border-b border-[#343839] mb-10 flex items-center overflow-hidden">
            <Splide
              options={{
                type: "carousel",
                perPage: 7,
                pagination: false,
                arrows: false,
              }}
            >
              <SplideSlide>
                <MiniCard
                  id={1}
                  product="Living Room"
                  image="/src/assets/sofa.png"
                  price={1200}
                  oldPrice={1700}
                  newTag
                />
              </SplideSlide>
              <SplideSlide>
                <MiniCard
                  id={1}
                  product="Living Room"
                  image="/src/assets/lamo.png"
                  price={1200}
                  oldPrice={1700}
                />
              </SplideSlide>
              <SplideSlide>
                <MiniCard
                  id={1}
                  product="Living Room"
                  image="/src/assets/sofa.png"
                  price={1200}
                  oldPrice={1700}
                  newTag
                />
              </SplideSlide>
              <SplideSlide>
                <MiniCard
                  id={1}
                  product="Living Room"
                  image="/src/assets/sofa.png"
                  price={1200}
                  oldPrice={1700}
                />
              </SplideSlide>
              <SplideSlide>
                <MiniCard
                  id={1}
                  product="Living Room"
                  image="/src/assets/sofa.png"
                  price={1200}
                  oldPrice={1700}
                  newTag
                />
              </SplideSlide>
              <SplideSlide>
                <MiniCard
                  id={1}
                  product="Living Room"
                  image="/src/assets/sofa.png"
                  price={1200}
                  oldPrice={1700}
                  newTag
                />
              </SplideSlide>
              <SplideSlide>
                <MiniCard
                  id={1}
                  product="Living Room"
                  image="/src/assets/sofa.png"
                  price={1200}
                  oldPrice={1700}
                  newTag
                />
              </SplideSlide>
              <SplideSlide>
                <MiniCard
                  id={1}
                  product="Living Room"
                  image="/src/assets/sofa.png"
                  price={1200}
                  oldPrice={1700}
                  newTag
                />
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default SingleProduct;
