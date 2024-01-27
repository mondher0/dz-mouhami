"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/features/auth/auth-slice";

const FormControl = ({ displayName, type, name }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col w-1/2">
      <label htmlFor={type} className="text-white text-[18px] font-semibold">
        {displayName}
      </label>
      <input
        required
        id={type}
        type={type}
        className="bg-transparent border-b-2 border-b-stone-50 outline-none text-white"
        onChange={(e) => {
          dispatch(setUser({ name, value: e.target.value }));
        }}
      />
    </div>
  );
};

export default FormControl;
