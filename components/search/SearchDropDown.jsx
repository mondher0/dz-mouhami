"use client";

import { useDispatch, useSelector } from "react-redux";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { setUser } from "../../store/features/auth/auth-slice";
import { baseUrl, getWilaya } from "../../lib/utils";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export function SearchDropDown({ name, displayValue }) {
  const [wilayas, setWilayas] = useState();
  const router = useRouter();

  // get wilaya
  const getWilaya = async () => {
    try {
      const response = await axios.get(`${baseUrl}location/wilaya`);
      console.log(response);
      setWilayas(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWilaya();
  }, []);

  return (
    <Select
      className="h-5"
      onValueChange={(value) => {
        console.log(value);
        router.push(`/search?wilaya=${value}#search`);
      }}
    >
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder={displayValue} />
      </SelectTrigger>
      <SelectContent>
        {wilayas?.map(
          (wilaya, index) => (
            console.log(wilaya),
            (
              <SelectItem key={index} value={wilaya.id}>
                {wilaya.name}
              </SelectItem>
            )
          ),
        )}
      </SelectContent>
    </Select>
  );
}
