import { Building2, MapPin } from "lucide-react";
import React from "react";
import DisplayLoyerLocation from "./DisplayLoyerLocation";

const AddressLoyer = ({ address, longitude, latitude }) => {
  return (
    <section id="address" className="p-10">
      <h1 className="text-[#FFC700] text-[40px] font-bold">Address</h1>
      <div className="flex flex-col items-start justify-center gap-3 mt-9 mb-4">
        <div className="flex items-center gap-3 text-[#001F3F]">
          <MapPin />
          {address}
        </div>
        <div className="flex items-center gap-3 text-[#001F3F]">
          <Building2 />
          {address}
        </div>
      </div>
      <DisplayLoyerLocation longitude={longitude} latitude={latitude} />
    </section>
  );
};

export default AddressLoyer;
