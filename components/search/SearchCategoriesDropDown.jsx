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

export function SearchCategoriesDropDown({ name, displayValue }) {
  // const [communes, setCommunes] = useState();
  const [categories, setCategories] = useState();

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
    getCategories();
  }, []);

  return (
    <Select
      className="h-5"
      onValueChange={(value) => {
        console.log(value);
      }}
    >
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder={displayValue} />
      </SelectTrigger>
      <SelectContent>
        {categories?.map((cat, index) => (
          <SelectItem key={index} value={cat.id}>
            {cat.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
