import React from "react";
import "./TestCard.css";

const TestCard = ({ test }) => {
   const { name, desc, cover } = test;

   return (
      <div className="test-card">
         <div className="test-card__img-wrap">
            <img
               className="test-card__img"
               src={cover}
               alt={`Cover of the test: ${name}`}
            />
         </div>
         <div className="test-card__info">
            <h2 className="test-card__name">{name}</h2>
            <p className="test-card__desc">{desc}</p>
         </div>
      </div>
   );
};

export default TestCard;
