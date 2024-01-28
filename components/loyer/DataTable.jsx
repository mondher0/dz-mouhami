import React from "react";

const DataTable = () => {
  const headerData = ["Nom du Client", "Date", "Heure", "Status"];
  const dummyData = [
    {
      clientName: "Alice Smith",
      date: "01/20/2022",
      time: "09:30",
      status: "Scheduled",
    },
    {
      clientName: "Bob Johnson",
      date: "01/21/2022",
      time: "14:00",
      status: "Cancelled",
    },
    {
      clientName: "Charlie Brown",
      date: "01/22/2022",
      time: "10:45",
      status: "Completed",
    },
    {
      clientName: "David Lee",
      date: "01/23/2022",
      time: "16:30",
      status: "En attente",
    },
    {
      clientName: "Emma Davis",
      date: "01/24/2022",
      time: "11:15",
      status: "En attente",
    },
    {
      clientName: "Frank White",
      date: "01/25/2022",
      time: "13:20",
      status: "En attente",
    },
    {
      clientName: "Grace Martinez",
      date: "01/26/2022",
      time: "08:45",
      status: "En attente",
    },
    {
      clientName: "Henry Garcia",
      date: "01/27/2022",
      time: "15:00",
      status: "En attente",
    },
    {
      clientName: "Ivy Rodriguez",
      date: "01/28/2022",
      time: "10:00",
      status: "En attente",
    },
    {
      clientName: "Jackie Wilson",
      date: "01/29/2022",
      time: "12:30",
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
