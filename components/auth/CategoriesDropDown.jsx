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

export function CategoriesDropDown({ name, displayValue }) {
  const dispatch = useDispatch();
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
    <select
    className="p-4 rounded-sm"
      onChange={(e) => {
        dispatch(setUser({ name, value: e.target.value }));
      }}
    >
      {categories &&
        categories.map((categorie) => (
          <option key={categorie.id} value={categorie.id}>
            {categorie.name}
          </option>
        ))}
    </select>
  );
}
