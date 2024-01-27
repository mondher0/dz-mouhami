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

export function DropDown({ name, displayValue }) {
  const dispatch = useDispatch();
  const { wilaya } = useSelector((state) => state.auth);
  const [wilayas, setWilayas] = useState();
  const [communes, setCommunes] = useState();
  const [categories, setCategories] = useState();

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

  // get commune
  const getCommune = async () => {
    console.log(wilaya);
    try {
      const response = await axios.get(`${baseUrl}location/cities/${wilaya}`);
      console.log(response);
      setCommunes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // get categories
  const getCategories = async () => {
    try {
      const response = await axios.get(`${baseUrl}lawyers/categories`);
      console.log(response);
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (wilaya) {
      getCommune();
    } else {
      getWilaya();
    }
  }, [wilaya]);

  return (
    <Select
      className="h-5"
      onValueChange={(value) => {
        console.log(value);
        dispatch(setUser({ name, value }));
      }}
    >
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder={displayValue} />
      </SelectTrigger>
      <SelectContent>
        {name === "wilaya"
          ? wilayas?.map((wilaya, index) => (
              <SelectItem key={index} value={wilaya.id}>
                {wilaya.name}
              </SelectItem>
            ))
          : communes?.map((commune, index) => (
              <SelectItem key={index} value={commune.id}>
                {commune.name}
              </SelectItem>
            ))}
      </SelectContent>
    </Select>
  );
}
