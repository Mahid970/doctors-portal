import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import AppointmentCard from "./AppointmentCard";
import BookingModal from "./BookingModal";
import Loading from "../Shared/Loading";

const AvailableAppointment = ({ date }) => {
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, "PP");

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  // useEffect(() => {
  //   fetch(`http://localhost:5000/available?date=${formattedDate}`)
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, [formattedDate]);
  return (
    <div>
      <div>
        <p className="text-xl text-primary font-bold text-center">
          Available Appointsments on {format(date, "PP")}.
        </p>
        <p className="text-center ">Please select a service </p>;
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-4">
        {services?.map((service) => (
          <AppointmentCard
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></AppointmentCard>
        ))}
      </div>
      <div>
        {treatment && (
          <BookingModal
            date={date}
            treatment={treatment}
            setTreatment={setTreatment}
            refetch={refetch}
          ></BookingModal>
        )}
      </div>
    </div>
  );
};

export default AvailableAppointment;
