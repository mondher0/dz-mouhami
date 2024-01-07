import React from "react";

const FormControl = ({ name, type }) => {
  return (
    <div className="flex flex-col w-1/2">
      <label htmlFor={type} className="text-white text-[18px] font-semibold">
        {name}
      </label>
      <input
        id={type}
        type={type}
        className="bg-transparent border-b-2 border-b-stone-50 outline-none text-white"
      />
    </div>
  );
};

export default FormControl;
