import React from "react";
import Treatment from "../../assets/images/treatment.png";

const Banner2 = () => {
  return (
    <div className="card card-side bg-base-100  flex-col  lg:flex-row shadow-xl ">
      <figure>
        <div className="hero-content lg:w-3/5  ">
          <img src={Treatment} alt="" />
        </div>
      </figure>
      <div className="card-body lg:w-1/2 mt-4 lg:mr-14">
        <h2 className="card-title text-4xl font-bold py-6">
          Exeptional Dental Care, on Your Tearms.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          veniam porro minima omnis unde, minus natus culpa nam, in ipsam
          eligendi dolores facere esse. Corporis nesciunt accusamus enim animi
          at. Tenetur earum ipsum necessitatibus saepe optio aspernatur, nostrum
          nemo ad.
        </p>
        <button className="btn btn-primary w-2/6 upercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner2;
