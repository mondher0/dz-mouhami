import React from "react";
import SingleComment from "./SingleComment";

const Comments = () => {
  const dummyData = [
    {
      id: 1,
      date: "13/12/2023",
      time: "12hr30",
      name: "Amina",
      status: "pending",
    },
    {
      id: 2,
      date: "13/12/2023",
      time: "12hr30",
      name: "Amina",
      status: "pending",
    },
    {
      id: 3,
      date: "13/12/2023",
      time: "12hr30",
      name: "Amina",
      status: "pending",
    },
    {
      id: 4,
      date: "13/12/2023",
      time: "12hr30",
      name: "Amina",
      status: "pending",
    },
    {
      id: 4,
      date: "13/12/2023",
      time: "12hr30",
      name: "Amina",
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
