import { Facebook, Mail, Phone } from "lucide-react";
import React from "react";

const ContactLoyer = () => {
  return (
    <section id="contact" className="p-10">
      <h1 className="text-[#FFC700] text-[40px] font-bold">Contact</h1>
      <div className="flex flex-col items-start justify-center gap-3 mt-9 mb-4">
        <div className="flex items-center gap-3 text-[#001F3F]">
          <Phone />
          <div className="bg-[#FFC70033]">+213558604705</div>
        </div>
        <div className="flex items-center gap-3 text-[#001F3F]">
          <Mail />
          <div className="bg-[#FFC70033]">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=email@mondhermameri219@gmail.com"
              target="_blank"
            >
              mondhermameri219@gmail.com
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3 text-[#001F3F]">
          <Facebook />
          <div className="bg-[#FFC70033]">
            <a
              href="https://www.facebook.com/profile.php?id=100022775534754"
              target="_blank"
            >
              Mondher Mameri
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLoyer;
