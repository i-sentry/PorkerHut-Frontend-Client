import React from "react";

function TextField({ errors, data, register }: any) {
  return (
    <div className="mb-[2px] w-full">
      <label
        htmlFor={data.name}
        className={`block text-[14px] leading-normal mb-[6px] text-[#333] ${
          data.required && "after:content-['*'] after:ml-0.5 after:text-red-500"
        } }`}
      >
        {data.label}
      </label>
      <input
        id={data.name}
        type={data.type}
        className={`appearance-none  relative block w-full px-[14px] py-[10px] border border-gray-300 placeholder-gray-500 text-[#333] rounded-md focus:outline-none focus:ring-green-300 focus:border-green-200 focus:z-10 text-[13px] leading-normal h-12 ${
          errors[data.name] && "border-[#a10]"
        }`}
        placeholder={data.place_holder}
        {...register(data.name, {
          required: data.required ? data.error_message : undefined,
          minLength: 1,
        })}
      />
      <span className="text-[#797979] text-[10px] leading-normal mb-1">
        {data.info}
      </span>
      <p className="mt-1 text-[#a10] text-xs">
        {errors[data.name] && (errors[data.name]!.message as string)}
      </p>
    </div>
  );
}

export default TextField;
