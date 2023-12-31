import React from "react";
import Card from "../Card/Card";

const Cards = () => {
  return (
    <div className="cards flex gap-6 mx-48 items-center justify-center flex-wrap max-sm:mx-4 overflow-hidden max-md:mx-10 max-lg:mx-14 max-xl:mx-16">
      <div className="right-card h-full">
        <Card
          category="Living Room"
          image="/src/assets/card1.png"
          left
          end={0}
        />
      </div>
      <div className="left-card flex-col  justify-between">
        <Card category="Bedroom" image="/src/assets/card2.png" end={1} />
        <div className="mt-2">
          <Card category="Kitchen" image="/src/assets/toster.png" end={1} />
        </div>
      </div>
    </div>
  );
};

export default Cards;
