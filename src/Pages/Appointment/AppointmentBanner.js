import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import Chair from "../../assets/images/chair.png";
import Bg from "../../assets/images/bg.png";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div
      style={{ backgroundImage: `url(${Bg})` }}
      className="hero min-h-screen"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Chair} alt="" className="max-w-sm rounded-lg ml-6" />
        <div className="mr-6 p-12">
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
          ></DayPicker>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
