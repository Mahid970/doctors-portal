import React from "react";

const Service = ({ service }) => {
  return (
    <div className="card w-80 bg-base-100 mx-auto mt-8 shadow-xl">
      <figure>
        <img src={service.img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service.name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};

export default Service;
