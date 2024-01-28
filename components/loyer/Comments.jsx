import React from "react";
import SingleComment from "./SingleComment";

const Comments = () => {
  const dummyData = [
    {
      id: 1,
      date: "15/01/2024",
      time: "10:00",
      name: "John",
      status: "pending",
    },
    {
      id: 2,
      date: "16/01/2024",
      time: "11:30",
      name: "Alice",
      status: "pending",
    },
    {
      id: 3,
      date: "17/01/2024",
      time: "14:15",
      name: "Bob",
      status: "pending",
    },
    {
      id: 4,
      date: "18/01/2024",
      time: "16:45",
      name: "Emma",
      status: "pending",
    },
    {
      id: 5,
      date: "19/01/2024",
      time: "09:30",
      name: "David",
      status: "pending",
    },
  ];

  return (
    <div>
      <h1 className="text-[42px] text-[#FFC700] font-bold">Commentaire:</h1>
      <div className="flex flex-col p-[20px] gap-5 max-h-[250px] overflow-y-auto">
        {dummyData.map((data) => {
          return <SingleComment comment={data} />;
        })}
      </div>
    </div>
  );
};

export default Comments;
