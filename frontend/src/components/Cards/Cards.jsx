import React from 'react'
import Card from '../Card/Card';

const Cards = () => {
  return (
    <div className="cards  flex gap-6 items-center justify-center">
      <div className="right-card">
        <Card
          category="Living Room"
          image="/src/assets/card1.png"
          width="548px"
          height="664px"
          end={0}
        />
      </div>
      <div className="left-card flex-col gap-6">
        <Card
          category="Bedroom"
          image="/src/assets/card2.png"
          width="548px"
          height="319px"
          end={1}
        />
        <div className="mt-6">
          <Card
            category="Kitchen"
            image="/src/assets/toster.png"
            width="548px"
            height="319px"
            end={1}
          />
        </div>
      </div>
    </div>
  );
}

export default Cards