"use client";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export function TopRatedLoyerDropDown() {
  const router = useRouter();
  return (
    <Select
      className="h-5"
      onValueChange={(value) => {
        console.log(value);
        router.push(`/search?topRated=${value}#search`);
      }}
    >
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Top rated" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={true}>Is top rated</SelectItem>
      </SelectContent>
    </Select>
  );
}
