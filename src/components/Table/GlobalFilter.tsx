import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useAsyncDebounce } from "react-table";

const GlobalFilter = ({ filter, setFilter, placeholder }: any) => {
  const [value, setValue] = useState(filter);
  const [isFocused, setIsFocused] = useState(false);
  const handleChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 1000);

  return (
    <div className="relative w-full">
      <input
        type="search"
        value={value || ""}
        placeholder={placeholder}
        // placeholder="Order  number, item name or other criteria"

        className="w-full  bg-[#F4F4F4] focus:outline-none focus:border focus:border-green-500 active:outline-none rounded-md px-3 md:py-2 xxs:py-3 placeholder:text-[12px] placeholder:font-light placeholder:leading-[15px] focus:ring-0"
        onChange={(e) => {
          setValue(e.target.value);
          handleChange(e.target.value);
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {!isFocused && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <BsSearch />
        </div>
      )}
    </div>
  );
};

export default GlobalFilter;
