import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Checkbox from "@mui/joy/Checkbox";
import Footer from ".././components/Footer/Footer";
import HeroShop from "../components/HeroShop/HeroShop";
import MiniCard from ".././components/MiniCard/MiniCard";
import Newsletter from "../components/Newsletter/Newsletter";
import Check from "../components/Check/Check";
import Typography from "@mui/material/Typography";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

const categories = [{ label: "Living Room" }, { label: "Kitchen" }];
const prices = [{ label: "Over $1000" }, { label: "Under $1000" }];
const App = () => {
  return (
    <div className="home  ">
      <div className="content ">
        <HeroShop
          image="/src/assets/heroimage.png"
          title="Shop Page"
          page="Shop"
          description="Let’s design the place you always imagined."
        />
        <div className="mx-48 py-14 flex justify-between ">
          <div className="left filters flex flex-col  w-[35vw]">
            <div className="header flex items-center gap-2">
              <div className="imagine">
                <img src="src/assets/filter.svg" alt="" />
              </div>
              <div className="text text-[#121212] font-int text-xl font-semibold ">
                Filter
              </div>
            </div>
            <div className="categories mt-8">
              <div className="title title mb-4 text-[#121212] font-int font-semibold text-base">
                CATEGORIES
              </div>
              <div className="checkboxes flex flex-col gap-3">
                <Check name="All rooms" />
                <Check name="Living Room" />
                <Check name="Bedroom" />
                <Check name="Kitchen" />
                <Check name="Bathroom" />
                <Check name="Dining" />
                <Check name="Outdoor" />
              </div>
            </div>
            <div className="prices mt-8">
              <div className="title mb-4 text-[#121212] font-int font-semibold text-base">
                PRICE
              </div>
              <div className="checkboxes flex flex-col gap-3">
                <Checkbox
                  color="neutral"
                  disabled={false}
                  label={
                    <Typography
                      variant="body1"
                      style={{
                        color: "#6C7275",
                        fontFamily: "Inter",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      All price
                    </Typography>
                  }
                  variant="outlined"
                />
                <Checkbox
                  color="neutral"
                  disabled={false}
                  label={
                    <Typography
                      variant="body1"
                      style={{
                        color: "#6C7275",
                        fontFamily: "Inter",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      $0.00 - 99.99
                    </Typography>
                  }
                  variant="outlined"
                />
                <Checkbox
                  color="neutral"
                  disabled={false}
                  label={
                    <Typography
                      variant="body1"
                      style={{
                        color: "#6C7275",
                        fontFamily: "Inter",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      $100.00 - 199.99
                    </Typography>
                  }
                  variant="outlined"
                />
                <Checkbox
                  color="neutral"
                  disabled={false}
                  label={
                    <Typography
                      variant="body1"
                      style={{
                        color: "#6C7275",
                        fontFamily: "Inter",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      $200.00 - 299.99
                    </Typography>
                  }
                  variant="outlined"
                />
                <Checkbox
                  color="neutral"
                  disabled={false}
                  label={
                    <Typography
                      variant="body1"
                      style={{
                        color: "#6C7275",
                        fontFamily: "Inter",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      $300.00 - 399.99
                    </Typography>
                  }
                  variant="outlined"
                />
                <Checkbox
                  color="neutral"
                  disabled={false}
                  label={
                    <Typography
                      variant="body1"
                      style={{
                        color: "#6C7275",
                        fontFamily: "Inter",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      $400.00+
                    </Typography>
                  }
                  variant="outlined"
                />
              </div>
            </div>
          </div>
          <div className="head flex flex-col">
            <div className="head2 flex items-center justify-between">
              <div className="selectedCategories text-black font-int text-xl font-semibold">
                Living Room
              </div>
              <div className="sortBy">
                <Select
                  placeholder="Sort By"
                  indicator={<KeyboardArrowDown />}
                  sx={{
                    width: 240,
                    [`& .${selectClasses.indicator}`]: {
                      transition: "0.2s",
                      [`&.${selectClasses.expanded}`]: {
                        transform: "rotate(-180deg)",
                      },
                    },
                  }}
                >
                  <Option value="ascending">Ascending</Option>
                  <Option value="descending">Descending</Option>
                  <Option value="descending">By Category</Option>
                </Select>
              </div>
            </div>
            <div className="cards flex gap-6 items-center mt-10 flex-wrap">
              <MiniCard
                product="Living Room"
                image="/src/assets/sofa.png"
                price={1200}
                oldPrice={1700}
                newTag
              />
              <MiniCard
                product="Living Room"
                image="/src/assets/sofa.png"
                price={1200}
                oldPrice={1700}
                newTag
              />
              <MiniCard
                product="Living Room"
                image="/src/assets/sofa.png"
                price={1200}
                oldPrice={1700}
                newTag
              />
              <MiniCard
                product="Living Room"
                image="/src/assets/sofa.png"
                price={1200}
                oldPrice={1700}
                newTag
              />
              <MiniCard
                product="Living Room"
                image="/src/assets/sofa.png"
                price={1200}
                oldPrice={1700}
                newTag
              />
              <MiniCard
                product="Living Room"
                image="/src/assets/sofa.png"
                price={1200}
                oldPrice={1700}
                newTag
              />
              <MiniCard
                product="Living Room"
                image="/src/assets/sofa.png"
                price={1200}
                oldPrice={1700}
                newTag
              />
            </div>
          </div>
        </div>
        <Newsletter />
      </div>
    </div>
  );
};

export default App;
