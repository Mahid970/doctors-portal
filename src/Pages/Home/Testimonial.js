import React from "react";
import Quote from "../../assets/icons/quote.svg";
import TestimonialCard from "./TestimonialCard";
import People1 from "../../assets/images/people1.png";
import People2 from "../../assets/images/people2.png";
import People3 from "../../assets/images/people3.png";

const Testimonial = () => {
  const Peoples = [
    {
      _id: 1,
      img: People1,
      name: "Winson Harry",
      address: "California",
    },
    {
      _id: 1,
      img: People2,
      name: "Jen Foster",
      address: "Texas",
    },
    {
      _id: 1,
      img: People3,
      name: "Natasha khan",
      address: "Canada",
    },
  ];
  return (
    <div className="">
      <div className=" flex justify-between mx-6 mt-12 ">
        <div className="w-1/2">
          <h5 className="text-xl text-primary font-bold">Testimonial</h5>
          <h2 className="text-3xl">What Our Patients Says</h2>
        </div>
        <div>
          <img className=" w-24 lg:w-40" src={Quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {Peoples.map((people) => (
          <TestimonialCard key={people._id} people={people}></TestimonialCard>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
