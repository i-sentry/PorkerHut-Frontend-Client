import { useStepperContext } from "../../context/StepperContext";

export default function Payment() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex flex-col gap-2 bg-[#F4F4F4] px-4 py-6">
      <div className="mb-2">
        <h1>Product information</h1>
        <span className="text-xs text-[#797979]">
          Please fill in the necessary information.{" "}
        </span>
      </div>
    

      <table className="bg-white border">
        <thead className="bg-[#F4F4F4]">
          <tr className="">
            <td className="text-xs px-2 py-4">Product ID</td>
            <td className="text-xs px-2 py-4">Sale Start Date</td>
            <td className="text-xs px-2 py-4">Sale End Date</td>
            <td className="text-xs px-2 py-4">Product Price</td>
            <td className="text-xs px-2 py-4">Product Quantity</td>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td className="px-1 py-2">
              <input
                onChange={handleChange}
                value={userData["pork"] || ""}
                name="pork"
                placeholder="Enter product ID"
                type="number"
                className=" border w-32 h-10 appearance-none  text-xs px-1 outline-none"
              />
            </td>
            <td className="px-1 py-2">
              <input
                onChange={handleChange}
                value={userData["pork"] || ""}
                name="pork"
                type="date"
                className=" border w-32 h-10 appearance-none uppercase  text-xs outline-none px-1"
              />
            </td>
            <td className="px-1 py-2">
              <input
                onChange={handleChange}
                value={userData["pork"] || ""}
                name="pork"
                type="date"
                className=" border w-32 h-10 appearance-none uppercase  text-xs px-1 outline-none"
              />
            </td>
            <td className="px-1 py-2">
              <input
                onChange={handleChange}
                value={userData["pork"] || ""}
                name="pork"
                placeholder="Enter product price"
                type="number"
                className=" border w-32 h-10 appearance-none  text-xs px-1 outline-none   border-r-[#D9D9D9]"
              />
            </td>
            <td className="px-1 py-2">
              <input
                onChange={handleChange}
                value={userData["pork"] || ""}
                name="pork"
                placeholder="Enter product quantity"
                type="number"
                className=" border w-32 h-10 appearance-none  text-xs outline-none px-2   border-r-[#D9D9D9]"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
