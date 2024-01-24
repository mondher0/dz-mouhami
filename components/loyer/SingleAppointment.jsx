import { Calendar } from "lucide-react";
import React from "react";

const SingleAppointment = ({ appointment }) => {
  return (
    <div className="flex items-center">
      <span className="mr-3">
        <Calendar />
      </span>
      <p className="text-[#001F3F] text-[22px]">
        {appointment.name} a pris un rendez-vous le{" "}
        <span className="text-[#FFC700] ">{appointment.date}</span> à{" "}
        <span className="text-[#FFC700] ">{appointment.time} </span>
      </p>

      <button className="bg-[#24FF00] text-white text-[22px] p-1 rounded-[25px] ml-[20px] w-[150px]">
        Accepter
      </button>
      <button className="bg-[#FD0000] text-white text-[22px] p-1 rounded-[25px] ml-[20px] w-[150px]">
        Refuser
      </button>
    </div>
  );
};

export default SingleAppointment;
