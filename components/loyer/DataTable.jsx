import React from "react";

const DataTable = () => {
  const headerData = ["Nom du Client", "Date", "Heure", "Status"];
  const dummyData = [
    {
      clientName: "John Doe",
      date: "12/12/2021",
      time: "12:00",
      status: "En attente",
    },
    {
      clientName: "John Doe",
      date: "12/12/2021",
      time: "12:00",
      status: "En attente",
    },
    {
      clientName: "John Doe",
      date: "12/12/2021",
      time: "12:00",
      status: "En attente",
    },
    {
      clientName: "John Doe",
      date: "12/12/2021",
      time: "12:00",
      status: "En attente",
    },
    {
        clientName: "John Doe",
        date: "12/12/2021",
        time: "12:00",
        status: "En attente",
    },
    {
        clientName: "John Doe",
        date: "12/12/2021",
        time: "12:00",
        status: "En attente",
    },
    {
        clientName: "John Doe",
        date: "12/12/2021",
        time: "12:00",
        status: "En attente",
    },
    {
        clientName: "John Doe",
        date: "12/12/2021",
        time: "12:00",
        status: "En attente",
    }, 
    {
        clientName: "John Doe",
        date: "12/12/2021",
        time: "12:00",
        status: "En attente",
    },
    {
        clientName: "John Doe",
        date: "12/12/2021",
        time: "12:00",
        status: "En attente",
    },
  ];
  return (
      <div className="flex flex-col max-h-[500px] overflow-y-auto">
        <ul className="flex items-center justify-between gap-10 bg-[#EFEFEF] rounded-[17px] pl-5 pr-5 pt-3 pb-3 w-[500px] text-[#001F3F]">
          {headerData.map((data, index) => {
            return <li key={index}>{data}</li>;
          })}
        </ul>
        {dummyData.map((data, index) => {
          return (
            <ul
              key={index}
              className="flex items-center justify-between gap-10 bg-white rounded-[17px] pl-5 pr-5 pt-3 pb-3 w-[500px] text-[#001F3F]"
            >
              <li>{data.clientName}</li>
              <li>{data.date}</li>
              <li>{data.time}</li>
              <li
                className={
                  data.status === "En attente"
                    ? "text-[#FFC107]"
                    : "text-[#2ECC71]"
                }
              >
                {data.status}
              </li>
            </ul>
          );
        })}
      </div>
    
  );
};

export default DataTable;
