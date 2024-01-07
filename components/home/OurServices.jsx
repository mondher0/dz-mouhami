import Image from "next/image";
import React from "react";

const OurServices = () => {
  const services = [
    {
      icons: "/assets/found-loyer.svg",
      title: "Trouver Avocate",
      description:
        "Sélectionnez l'avocat qui correspond à vos besoins, et nous ferons de notre mieux pour vous assister.",
    },
    {
      icons: "/assets/rendez-vous.svg",
      title: "prenue un rendez-vous",
      description:
        "Sélectionnez l'heure qui vous convient, et nous ferons de notre mieux pour vous aider.",
    },
    {
      icons: "/assets/do-review.svg",
      title: "rédiger un avis et noter",
      description:
        "Votre avis et votre note sont précieux, contribuant à améliorer continuellement nos services.",
    },
  ];

  const features = [
    {
      icons: "/assets/experience.svg",
      title: "Expérience Utilisateur Simplifiée",
    },
    {
      icons: "/assets/security.svg",
      title: "Mesures de Sécurité Avancées ",
    },
    {
      icons: "/assets/performance.svg",
      title: "Performances Rapides et Réactives",
    },
  ];
  return (
    <section className="flex flex-col mb-0">
      <div className="container flex items-center justify-between">
        <h1 className="text-[#FFC700] font-bold text-[40px]">OUR SERVICES</h1>
        <h1 className="text-[#FFC700] font-medium text-[40px]">
          WHAT CAN YOU DO ON THIS WEBSITE
        </h1>
      </div>
      <div className="flex items-center justify-between border-b-solid border-b-[#FFC700] border-b-[5px] border-b-solid border-t-[#FFC700] border-t-[2px]">
        <div className="p-[50px] w-2/4 flex flex-col items-start justify-center">
          <h1 className="text-[#FFC700] text-[40px] font-bold">
            VOTRE SATISFACTION
            <br /> EST NOTRE OBJECTIF
          </h1>
          <p className="text-[#FFF] font-semibold">
            Chez <span className="text-[#FFC700]">Dzmohami</span>, votre
            satisfaction
            <br /> guide notre démarche. Nous nous <br /> consacrons à dépasser
            vos attentes, <br /> offrant des services exceptionnels à <br />
            chaque étape. Optez pour <br /> l'excellence et le dévouement en
            <br /> choisissant
            <span className="text-[#FFC700] ml-1">Dzmohami</span>.
          </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-6 p-[35px] w-2/4 border-r-solid border-l-2 border-[#FFC700] ">
          {services.map((service, index) => (
            <div
              className="flex flex-col items-start justify-between "
              key={index}
            >
              <Image src={service.icons} alt="icons" width={70} height={70} />
              <div>
                <p className="text-[#FFC700] font-medium text-[25px]">
                  {service.title}
                </p>
                <p className="text-[#FFF] font-medium text-[24px]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-6 p-[35px] w-2/4 border-r-solid border-l-2 border-[#FFC700] h-[200px] pb[10px]"
          >
            <Image
              src={feature.icons}
              alt="icons"
              width={100}
              height={80}
              className="mt-3"
            />
            <p className="text-[#FFC700] font-medium text-[25px] text-center">
              {feature.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
