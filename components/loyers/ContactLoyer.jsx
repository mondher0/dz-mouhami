import { Facebook, Mail, Phone } from "lucide-react";
import React from "react";

const ContactLoyer = ({ contact }) => {
  const { phone, user, social } = contact || {};
  const { fname, lname, email } = user || {};
  return (
    <section id="contact" className="p-10">
      <h1 className="text-[#FFC700] text-[40px] font-bold">Contact</h1>
      <div className="flex flex-col items-start justify-center gap-3 mt-9 mb-4">
        <div className="flex items-center gap-3 text-[#001F3F]">
          <Phone />
          <div className="bg-[#FFC70033]">{phone}</div>
        </div>
        <div className="flex items-center gap-3 text-[#001F3F]">
          <Mail />
          <div className="bg-[#FFC70033]">
            <a href={`mailto:${email}`} target="_blank">
              {email}
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3 text-[#001F3F]">
          <Facebook />
          <div className="bg-[#FFC70033]">
            <a href={social} target="_blank">
              {fname} {lname}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLoyer;
