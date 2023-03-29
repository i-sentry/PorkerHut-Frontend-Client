import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

const GlobalFilter = ({ filter, setFilter }: any) => {
  const [value, setValue] = useState(filter)
  const handleChange = useAsyncDebounce(value => {
     setFilter(value || undefined)
   }, 1000)
  return (
    <div className="flex items-center justify-between gap-4 ">
      <input
        type="search"
        value={value || ""}
        className="h-9 w-[300px] bg-[#F4F4F4] focus:outline-none active:outline-none rounded-lg"
        onChange={(e) => {
          setValue(e.target.value)
          handleChange(e.target.value)
        }}
      />
    </div>
  );
};

export default GlobalFilter;
