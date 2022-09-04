import React from "react";

const AppointmentCard = ({ service, setTreatment }) => {
  return (
    <div className="card lg:max-w-lg  shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-primary">{service.name}</h2>
        <p>
          {service.slots.length > 0 ? (
            <span>{service.slots[0]}</span>
          ) : (
            <span className="text-red-500">sorry, no slots availabe</span>
          )}
        </p>
        <p>
          {service.slots.length}
          {service.slots.length > 1 ? " spaces" : " space"} available
        </p>
        <div className="card-actions">
          <label
            disabled={service.slots.length === 0}
            onClick={() => setTreatment(service)}
            for="booking-modal"
            className="btn modal-button btn-primary upercase text-white font-bold bg-gradient-to-r from-secondary to-primary"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
