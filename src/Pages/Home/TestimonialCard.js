import React from "react";

const TestimonialCard = ({ people }) => {
  return (
    <div className="card w-80 bg-base-100 mx-auto shadow-xl">
      <div className="card-body">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          debitis veniam alias quaerat maxime facilis sunt est.
        </p>
        <div className="flex py-6">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={people.img} alt="" />
            </div>
          </div>
          <div className="ml-4">
            <h4 className="font-bold">{people.name}</h4>
            <small className="font-bold">{people.address}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
