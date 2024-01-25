import React from "react";
import TakeAppointementTable from "./TakeAppointementTable";
import { Button } from "../ui/button";

const TakeAppointement = () => {
  return (
    <section className="p-10">
      <h1 className="text-[#FFC700] text-[40px] font-bold">
        PRENUE RENDUE-VOUS
      </h1>
      <p className="text-[#001F3F] text-[25px] font-semibold text-center">
        "Welcome to our online scheduling! Explore available time slots below to
        book a personalized <br />
        consultation with our legal professionals at DZMOHAMI. We look forward
        to assisting you"
      </p>
      <TakeAppointementTable />
      <div className="flex items-center justify-center mt-9">
        <Button
          variant="outline"
          className="border border-solid border-[#FFC700] text-[#FFC700]"
        >
          Submit
        </Button>
      </div>
    </section>
  );
};

export default TakeAppointement;
