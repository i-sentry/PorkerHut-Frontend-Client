import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useAsyncDebounce } from "react-table";

const GlobalFilter = ({ filter, setFilter }: any) => {
  const [value, setValue] = useState(filter);
  const [isFocused, setIsFocused] = useState(false);
  const handleChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 1000);
  return (
    <div className="flex w-full items-center justify-between gap-4 relative ">
      <input
        type="search"
        value={value || ""}
        placeholder="Order  number, item name or other criteria"
        className="xxs:w-full md:w-[500px] bg-[#F4F4F4] focus:outline-none active:outline-none rounded-md px-3 py-2 placeholder:text-sm placeholder:font-light"
        onChange={(e) => {
          setValue(e.target.value);
          handleChange(e.target.value);
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {!isFocused && (
        <div className="absolute right-3">
          <BsSearch />
        </div>
      )}
    </div>
  );
};

export default GlobalFilter;
