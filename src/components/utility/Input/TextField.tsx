import React from "react";

function TextField({ errors, data, register }: any) {
  return (
    <div className="mb-[2px] w-full">
      <label
        htmlFor={data.name}
        className={`mb-[6px] block text-[14px] leading-normal text-[#333] ${
          data.required && "after:ml-0.5 after:text-red-500 after:content-['*']"
        } }`}
      >
        {data.label}
      </label>
      <input
        id={data.name}
        type={data.type}
        className={`relative  block h-12 w-full appearance-none rounded-md border border-gray-300 px-[14px] py-[10px] text-[13px] leading-normal text-[#333] placeholder-gray-500 focus:z-10 focus:border-green-200 focus:outline-none focus:ring-green-300 ${
          errors[data.name] && "border-[#a10]"
        }`}
        placeholder={data.place_holder}
        {...register(data.name, {
          required: data.required ? data.error_message : undefined,
          minLength: 1,
        })}
      />
      <span className="mb-1 text-[10px] leading-normal text-[#797979]">
        {data.info}
      </span>
      <p className="mt-1 text-xs text-[#a10]">
        {errors[data.name] && (errors[data.name]!.message as string)}
      </p>
    </div>
  );
}

export default TextField;
