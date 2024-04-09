import { useState } from "react";

interface BlueDiv {
  id: number;
}
const ManageCategories = () => {
  const [blueDivs, setBlueDivs] = useState<BlueDiv[]>([]);
  const handleAddBlueDiv = () => {
    const newBlueDiv: BlueDiv = {
      id: blueDivs.length + 1,
    };
    setBlueDivs([...blueDivs, newBlueDiv]);
  };

  const handleCancelBlueDiv = (id: number) => {
    const updatedBlueDivs = blueDivs.filter((blueDiv) => blueDiv.id !== id);
    setBlueDivs(updatedBlueDivs);
  };
  return (
    <>
      <div className="mt-10 rounded-sm bg-[#F4F4F4] p-5 shadow-sm">
        <h1 className="text-[24px] font-medium leading-[28px] text-[#333333]">
          Category Information
        </h1>
        <p className="mt-2 text-[16px] font-normal leading-[19px] text-[#A2A2A2]">
          The form is required for product detailing and sellers are required
          fill the product form for approval.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-lg bg-red-500 p-4">
          <input
            type="text"
            className="w-full rounded-md bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter text"
          />
          <div className="mt-4 flex justify-end">
            <button className="mr-2 rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
              Cancel
            </button>
            <button className="rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
              Add
            </button>
          </div>
        </div>
        <div className="rounded-lg bg-blue-500 p-4">
          <input
            type="text"
            className="w-full rounded-md bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter text"
          />
          <div className="mt-4 flex justify-end">
            <button className="mr-2 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Cancel
            </button>
            <button
              className="rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              onClick={handleAddBlueDiv}
            >
              Add
            </button>
          </div>
        </div>
        {blueDivs.map((blueDiv) => (
          <div key={blueDiv.id} className="rounded-lg bg-blue-500 p-4">
            <input
              type="text"
              className="w-full rounded-md bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter text"
            />
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => handleCancelBlueDiv(blueDiv.id)}
                className="mr-2 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Cancel
              </button>
              <button
                onClick={handleAddBlueDiv}
                className="rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ManageCategories;
