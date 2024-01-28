import React from "react";
import { Button } from "../ui/button";

const ContactUs = () => {
  return (
    <section className="bg-white p-[30px]" id="contact">
      <p className="text-[#FFC700] text-[30px] font-semibold">PROBLEM ?</p>
      <div className="flex flex-col items-start justify-center m-[100px]">
        <h1 className="text-[#001F3F] text-[40px] font-bold ">CONTACT US</h1>
        <p className="text-[#001F3F] text-[25px] font-medium">
          Si vous avez des questions ou des préoccupations, n'hésitez pas à les
          partager
          <br /> <span className="text-[#FFC700]">ci-dessous</span>
        </p>
        <form className="flex flex-col">
          <input
            type="text"
            placeholder="address email"
            className="w-[350px] h-[50px] border-[1px] border-[#001F3F] rounded-md mt-[30px] p-5 outline-none"
          />
          <textarea
            placeholder="your message"
            className="w-[500px] h-[100px] border-[1px] border-[#001F3F] rounded-md mt-[30px] p-5 outline-none"
          />
          <Button className="mt-[30px] ">Soumettre</Button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
