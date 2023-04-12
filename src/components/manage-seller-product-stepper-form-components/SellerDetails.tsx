

export default function SellerDetails() {
  

  return (
    <div className="flex flex-col gap-2 bg-[#F4F4F4] px-4 pt-2 ">
      <div className="mb-2">
        <h1>More Product Details</h1>
        <span className="text-xs text-[#797979]">
          Please fill in the necessary information.
        </span>
      </div>
      <div className="mx-2 flex-1">
        <div className=" h-4 text-xs">Product Weight*</div>
        <div className=" flex rounded border border-gray-200 bg-white p-1">
          <input
          
            name="weight"
            placeholder="Enter product weight"
            className="w-full appearance-none p-1 px-2 outline-none text-sm"
          />
        </div>
        <span className="text-xs text-[#797979]">
          Please fill in the product weight.
        </span>
      </div>
      <div className="mx-2 flex-1">
        <div className="mt-3 h-4 text-xs ">Product Content</div>
        <div className=" flex rounded border border-gray-200 bg-white p-1">
          <input
           
            name="content"
            placeholder="Enter product Content"
            type="text"
            className="w-full appearance-none p-1 px-2 text-sm outline-none"
          />
        </div>
        <span className="text-xs text-[#797979]">
          The product content should give the customer an overview of what they
          ordered.
        </span>
      </div>
      <div className="mx-2 flex-1 mt-2">
        <div className="mt-3 h-4 text-xs ">Cooking Method</div>
        <div className=" flex rounded border border-gray-200 bg-white p-1">
          <input
         
            name="method"
            placeholder="Enter cooking method"
            type="text"
            className="w-full appearance-none p-1 px-2 text-sm outline-none"
          />
        </div>
        <span className="text-xs text-[#797979]">
          Give a brief details on how its being Cooked. Example: Fried,
          Roasting, Boiling, Grilling.
        </span>
      </div>
      <div className="mx-2 flex-1 mt-2">
        <div className="mt-3 h-4 text-xs ">Product Description</div>
        <div className=" flex rounded border border-gray-200 bg-white p-1 h-28">
          <textarea
           
            name="description"
            placeholder="Enter product description..."
            className="w-full appearance-none p-1 px-2 text-sm outline-none"
          />
        </div>
        <span className="text-xs text-[#797979]">
          The product description should give the customer useful information
          about the product to ensure a purchase.
        </span>
      </div>
    </div>
  );
}
