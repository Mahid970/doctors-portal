import React from "react";
import InfoCard from "./InfoCard";
import Clock from "../../assets/icons/clock.svg";
import Marker from "../../assets/icons/marker.svg";
import Phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-4 mx-4">
      <InfoCard
        cardTitle="Opening Hours"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={Clock}
      ></InfoCard>
      <InfoCard
        cardTitle="Our Locations"
        bgClass="accent"
        img={Marker}
      ></InfoCard>
      <InfoCard
        cardTitle="Contact Us"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={Phone}
      ></InfoCard>
    </div>
  );
};

export default Info;
