import React from "react";
import Appointment from "../../../../components/loyer/Appointment";
import Comments from "../../../../components/loyer/Comments";

const NotificationsPage = () => {
  return (
    <div className="m-[20px]">
      <Appointment />
      <div className="h-[1px] bg-[#8E8E8E] my-[30px] mx-[50px]"> </div>
      <Comments />
    </div>
  );
};

export default NotificationsPage;
