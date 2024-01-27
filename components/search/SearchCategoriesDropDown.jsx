"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { baseUrl } from "../../lib/utils";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export function SearchCategoriesDropDown({ displayValue }) {
  const [categories, setCategories] = useState();
  const router = useRouter();

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
        router.push(`/search?category=${value}#search`);
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
