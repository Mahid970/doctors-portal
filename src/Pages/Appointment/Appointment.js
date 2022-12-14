import React, { useState } from "react";
import AppointmentBanner from "./AppointmentBanner";
import AppointmentCard from "./AppointmentCard";
import AvailableAppointment from "./AvailableAppointment";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
      <AvailableAppointment
        date={date}
        setDate={setDate}
      ></AvailableAppointment>
    </div>
  );
};

export default Appointment;
