import React, { useState } from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";

interface Product {
  id: string;
  title: string;
  type?: any;
  category: string;
  price: string;
  rating?: any;
  product: {
    location: string;
    name: string;
    weight: string;
    productName: string;
  };
  img: string;
  status: string;
  desc: string;
}

interface ComponentProps {
  data: Product[] | any;
  setData: React.Dispatch<React.SetStateAction<Product[]>> | any;
}

const Component: React.FC<ComponentProps> = ({ data, setData }) => {
  const [openSort, setOpenSort] = useState(false);
  const [sortType, setSortType] = useState("High to Low");

  const handleSort = (type: string) => {
    setOpenSort(false);
    setSortType(type);
  };

  const sortProducts = (type: string) => {
    let sortedProducts = [...data];

    switch (type) {
      case "High to Low":
        sortedProducts.sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
        break;
      case "Low to High":
        sortedProducts.sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
        break;
      case "Product Rating":
        sortedProducts.sort(
          (a, b) => parseFloat(b.rating) - parseFloat(a.rating)
        );
        break;
      default:
        break;
    }
    setData(sortedProducts);
    setSortType(type);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full flex justify-center">
        <div className="relative">
          <button
            className="flex bg-gray-200 items-center justify-around pr-4 w-[150px] py-2 mt-2 text-sm font-normal text-left bg-transparent rounded-lg"
            onClick={() => setOpenSort(!openSort)}
          >
            <span>{sortType}</span>
            {openSort ? <RxCaretDown size={24} /> : <RxCaretUp size={24} />}
          </button>
          {openSort && (
            <div className="absolute z-50 w-full origin-top-right">
              <div className="px-2 pt-2 pb-2 bg-white rounded-md shadow-lg dark-mode:bg-gray-700">
                <div className="flex flex-col">
                  <a
                    className="flex flex-row items-start rounded-lg bg-transparent p-2 hover:bg-gray-200"
                    href="#"
                    onClick={() => sortProducts("High to Low")}
                  >
                    <div>
                      <p className="text-[14px] leading-[16px] font-normal">
                        Price: High to Low
                      </p>
                    </div>
                  </a>
                  <a
                    className="flex flex-row items-start rounded-lg bg-transparent p-2 hover:bg-gray-200"
                    href="#"
                    onClick={() => sortProducts("Low to High")}
                  >
                    <div>
                      <p className="text-[14px] leading-[16px] font-normal">
                        Price: Low to High
                      </p>
                    </div>
                  </a>
                  <a
                    className="flex flex-row items-start rounded-lg bg-transparent p-2 hover:bg-gray-200"
                    href="#"
                    onClick={() => sortProducts("Product Rating")}
                  >
                    <div>
                      <p className="text-[14px] leading-[16px] font-normal">
                        Product Rating
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Component;
