import React from "react";
import Fluoride from "../../assets/images/fluoride.png";
import Cavity from "../../assets/images/cavity.png";
import Whitening from "../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const Services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      description: "",
      img: Fluoride,
    },
    {
      _id: 2,
      name: "Cavity Feeling",
      description: "",
      img: Cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      description: "",
      img: Whitening,
    },
  ];
  return (
    <div className="my-24">
      <div className="text-center">
        <h1 className="text-primary text-xl font-bold">Our Services</h1>
        <h2 className="text-4xl">Services We Provide</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
        {Services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
