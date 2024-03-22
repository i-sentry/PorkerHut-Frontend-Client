import React from "react";

function CustomTextArea({ data, control, register, errors }: any) {
  return (
    <div className="mb-[2px] w-full">
      <label
        htmlFor={data.name}
        className={`block text-[16px] mb-[6px] text-[#333] ${
          data.required && "after:content-['*'] after:ml-0.5 after:text-red-500"
        } }`}
      >
        {data.label}
      </label>
      <textarea
        id={data.name}
        type={data.type}
        className={`appearance-none capitalize relative block w-full px-[14px] py-[10px] border border-gray-300 placeholder-gray-500 text-[#333] rounded-md focus:outline-none focus:ring-green-300  focus:border-green-300  focus:z-10 text-[13px] leading-normal ${
          errors[data.name] && "border-[#a10]"
        }`}
        placeholder={data.place_holder}
        {...register(data.name, {
          required: data.required ? data.error_message : undefined,
          minLength: 1,
        })}
        rows={5}
      ></textarea>
      <span className="text-[#797979] text-[10px] leading-normal mb-1">
        {data.info}
      </span>
      <p className="mt-1 text-[#a10] text-xs">
        {errors[data.name] && (errors[data.name]!.message as string)}
      </p>
    </div>
  );
}

export default CustomTextArea;
