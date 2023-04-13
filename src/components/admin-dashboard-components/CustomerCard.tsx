import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";

interface CustomerProps {
  id: number;
  email: string;
  company_address: string;
  phone: string;
  total_orders: number;
  total_failed_orders: number;
  data_joined: string;
  status: string;
}

const CustomerCard = (item: CustomerProps) => {
  const {
    id,
    email,
    company_address,
    phone,
    total_orders,
    total_failed_orders,
    data_joined,
    status,
  } = item;

  return (
    <div
      className={`border border-gray-400 rounded-md w-full h-[400px] pt-4 px-2 relative ${
        status === "deactivated" ? "" : ""
      }`}
    >
      {status === "deactivated" && (
        <div className="absolute inset-0 rounded-md  bg-[#333333bd] ">

          <div className="flex items-center justify-center h-full">
          <p className="text-[#F91919] flex items-center justify-center font-bold text-xl z-10 select-none
         ">Deactivated</p>
            
          </div>
        </div>
      )}

      <div>
        <div className="grid justify-items-stretch cursor-pointer">
          <HiDotsHorizontal size={24} className=" justify-self-end" />
        </div>

        <div className="flex flex-col items-center justify-center">
          <div
            className="rounded-full bg-cover bg-no-repeat bg-center flex h-20 w-20"
            style={{
              backgroundImage: 'url("https://source.unsplash.com/80x80?face")',
            }}
          ></div>
          <div className="mt-4">
            <span className=" text-2xl font-medium">Williams Nado</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="text-gray-400 text-xs">
            ID: {""}
            <span className="text-black text-xs">{item.id}</span>
          </div>
          <div className="text-gray-400 text-xs">
            Email: {""}
            <span className="text-black text-xs">{item.email}</span>
          </div>
          <div className="text-gray-400 text-xs">
            Company Address: {""}
            <span className="text-black whitespace-nowrap text-xs">
              {item.company_address}
            </span>
          </div>
          <div className="text-gray-400  text-xs">
            Phone: {""}
            <span className="text-black text-xs">{item.phone}</span>
          </div>
          <div className="text-gray-400  text-xs">
            Total Orders: {""}
            <span className="text-black text-xs">{item.total_orders}</span>
          </div>
          <div className="text-gray-400 text-xs">
            Total Failed Orders: {""}
            <span className="text-black text-xs">
              {item.total_failed_orders}
            </span>
          </div>
          <div className="text-gray-400 text-xs">
            Joined: {""}
            <span className="text-black text-xs">{item.data_joined}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;

// const CustomerCard = (item: CustomerProps) => {
//   const { id, email, company_address, phone, total_orders, total_failed_orders, data_joined, status } = item;

//   return (
//     <div className={`border border-gray-400 rounded-lg w-full h-[400px] pt-4 px-2 ${status === 'deactivated' ? 'opacity-50 bg-gray-300' : ''}`}>
//       {status === 'deactivated' && (
//         <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
//           <span className="text-red-600 text-lg font-medium">Deactivated</span>
//         </div>
//       )}
//       <div className="grid justify-items-stretch">
//         <HiDotsHorizontal size={24} className="justify-self-end" />
//       </div>
//       <div className="flex flex-col items-center justify-center">
//         <div
//           className="rounded-full bg-cover bg-no-repeat bg-center flex h-20 w-20"
//           style={{
//             backgroundImage: 'url("https://source.unsplash.com/80x80?face")',
//           }}
//         ></div>
//         <div className="mt-4">
//           <span className="text-2xl font-medium">{email}</span>
//         </div>
//         <div className="mt-2">
//           <span>{company_address}</span>
//         </div>
//         <div className="mt-2">
//           <span>{phone}</span>
//         </div>
//         <div className="mt-2">
//           <span>Total Orders: {total_orders}</span>
//         </div>
//         <div className="mt-2">
//           <span>Total Failed Orders: {total_failed_orders}</span>
//         </div>
//         <div className="mt-2">
//           <span>Date Joined: {data_joined}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomerCard;
