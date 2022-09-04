import React from "react";

const InfoCard = ({ img, bgClass, cardTitle }) => {
  return (
    <div
      class={`card w-3/4 lg:w-full mx-auto card-side bg-base-100 bg-accent pl-2 shadow-xl ${bgClass}`}
    >
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="text-white card-body">
        <h2 className="card-title">{cardTitle}</h2>
        <p>Click the button to watch on Jetflix app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
