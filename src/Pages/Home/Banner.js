import React from "react";
import Chair from "../../assets/images/chair.png";
import Bg from "../../assets/images/bg.png";

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Bg})` }}
      className="hero min-h-screen"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Chair} alt="" className="max-w-sm rounded-lg shadow-2xl" />
        <div className="lg:w-1/2 mt-4 lg:0">
          <h1 className="text-5xl font-bold">Your New Smile Start Here.</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary upercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
