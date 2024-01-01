import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white flex flex-col items-center justify-center pt-6">
      <p className="text-[#FFC700] text-center text-[30px] font-semibold">
        ABOUT US
      </p>
      <p className="text-[#001F3F] text-[40px] font-bold text-center">
        Chez <span className="text-[#FFC700]">DZMohami</span>, nous sommes
        spécialisés dans <br />
        des solutions [
        <span className="text-[#FFC700]">juridiques/services</span>] sur mesure.
        <br /> Optez pour l'excellence et la satisfaction client <br />
        avec notre équipe expérimentée.
      </p>
      <Image
        src="/images/home-about.png"
        alt="About Us"
        width={600}
        height={600}
        className="mt-6"
      />
    </section>
  );
};

export default AboutUs;
