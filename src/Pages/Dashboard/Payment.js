import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51LlVMBBlLVfwtYyzmk2xB50ZEkGqL4kMxJPo9zdqPnW6HaEIHVR6uu7DrmBFunrLfLfU5q7vCy03eyUjhUc4tzTv00EGuaSsyk"
);

const Payment = () => {
  const { id } = useParams();

  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(`http://localhost:5000/booking/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="card w-50 max-w-md bg-base-100 mx-auto my-8 shadow-xl">
        <div className="card-body ">
          <p className="text-success">Hello {appointment.patientName}</p>
          <h2 className="card-title">Pay for {appointment.treatmentName}</h2>
          <p>
            Your Appointment on{" "}
            <span className="text-red-700">{appointment.date}</span> at{" "}
            {appointment.slot}
          </p>
          <p>Please Pay ${appointment.price}</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 mx-auto max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
