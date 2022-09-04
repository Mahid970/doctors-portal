import React from "react";
import Doctor from "../../assets/images/doctor.png";
import Bg2 from "../../assets/images/appointment.png";

const Appoinment = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Bg2})` }}
      className="flex justify-center items-center mt-28"
    >
      <div className="lg:flex-1 ">
        <img className="mt-[-120px] hidden lg:block" src={Doctor} alt="" />
      </div>
      <div className="lg:flex-1 p-4 sm: py-12 ">
        <h4 className="text-xl text-primary font-bold py-2">Appointment</h4>
        <h2 className="text-4xl text-white py-2">Make an Appointment Today</h2>
        <p className="text-white py-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          provident ipsam minima nobis. Doloremque suscipit sunt molestias rerum
          animi autem. Maiores quae ad cupiditate rem veritatis, cumque, aperiam
          fuga, consequuntur doloremque non asperiores quo vero alias maxime
          laboriosam mollitia! Animi.
        </p>
        <button className="btn btn-primary w-2/6 upercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Appoinment;
