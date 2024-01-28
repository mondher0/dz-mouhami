import React from "react";
import SingleAppointment from "./SingleAppointment";

const Appointment = () => {
  const dummyData = [
    {
      id: 1,
      date: "15/01/2024",
      time: "10:00",
      name: "Amina",
      status: "pending",
    },
    {
      id: 2,
      date: "16/01/2024",
      time: "11:30",
      name: "Youssef",
      status: "pending",
    },
    {
      id: 3,
      date: "17/01/2024",
      time: "14:15",
      name: "Sofia",
      status: "pending",
    },
    {
      id: 5,
      date: "27/01/2024",
      time: "05:30",
      name: "Fatima",
      status: "pending",
    },
    {
      id: 4,
      date: "28/01/2024",
      time: "17:45",
      name: "Mohamed",
      status: "pending",
    },
  ];

  return (
    <div>
      <h1 className="text-[42px] text-[#FFC700] font-bold">Rendue vous:</h1>
      <div className="flex flex-col p-[20px] gap-5 max-h-[250px] overflow-y-auto">
        {dummyData.map((data) => {
          return <SingleAppointment appointment={data} />;
        })}
      </div>
    </div>
  );
};

export default Appointment;
