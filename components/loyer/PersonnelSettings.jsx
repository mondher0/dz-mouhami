import React from "react";
import ProfileInput from "./ProfileInput";
import EditLocation from "./EditLocation";
import EditDispoTable from "./EditDispoTable";
import { useSelector } from "react-redux";

const PersonnelSettings = () => {
  const {
    firstName,
    lastName,
    wilaya,
    commune,
    phone,
    address,
    speciality,
  } = useSelector((state) => state.profile);
  return (
    <div className="flex gap-4 flex-col items-start justify-center w-4/5 border border-solid border-blue-900 rounded-lg bg-white shadow-md p-6">
      <ProfileInput
        name="Family name :"
        type="text"
        id="fn"
        data="lastName"
        value={lastName}
      />
      <ProfileInput
        name="first name :"
        type="text"
        id="ln"
        data="firstName"
        value={firstName}
      />
      <ProfileInput
        name="address :"
        type="text"
        id="add"
        data="address"
        value={address}
      />
      <ProfileInput
        name="wilaya :"
        type="text"
        id="wy"
        data="wilaya"
        value={wilaya}
      />
      <ProfileInput
        name="Commune:"
        type="text"
        id="co"
        data="commune"
        value={commune}
      />
      <ProfileInput
        name="n de telephone"
        type="tel"
        id="phone"
        data="phone"
        value={phone}
      />
      <ProfileInput
        name="spécialité"
        type="text"
        id="sp"
        data="speciality"
        value={speciality}
      />
      <EditLocation />
      <EditDispoTable />
    </div>
  );
};

export default PersonnelSettings;
