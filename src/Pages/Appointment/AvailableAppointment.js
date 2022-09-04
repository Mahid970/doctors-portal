import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentCard from "./AppointmentCard";
import BookingModal from "./BookingModal";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });
  return (
    <div>
      <div>
        <p className="text-xl text-primary font-bold text-center">
          Available Appointsments on {format(date, "PP")}.
        </p>
        <p className="text-center ">Please select a service </p>;
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-4">
        {services.map((service) => (
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
          ></BookingModal>
        )}
      </div>
    </div>
  );
};

export default AvailableAppointment;
