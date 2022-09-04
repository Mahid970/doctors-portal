import React from "react";
import Bg2 from "../../assets/images/appointment.png";

const Contact = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Bg2})` }}
      className="bg-primary px-10 py-14 justify-items-center"
    >
      <div>
        <h5 className="text-xl text-primary font-bold text-center">
          Contact Us
        </h5>
        <h2 className="text-3xl text-center text-white">
          Stay Connected With Us
        </h2>
      </div>
      <div className="  grid grid-cols-1 gap-6 md:w-1/2 lg:w-1/2 mx-auto mt-6">
        <input type="text" placeholder="Email" className="input w-full" />
        <input type="text" placeholder="Subject" className="input w-full" />
        <textarea
          type="text"
          placeholder="Your Messege"
          className="textarea w-full"
          rows={6}
        />
      </div>
    </div>
  );
};

export default Contact;
