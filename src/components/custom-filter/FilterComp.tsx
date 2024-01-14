import React, { useState } from "react";
import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem";
import Checkbox from "./Checkbox";
import RangeInput from "./RangeInput";
import _ from "lodash";

interface FiltercompProps {
  data: any[]; // Update this based on the expected data type
}

const Filtercomp: React.FC<FiltercompProps> = ({ data }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 100]);

  const handleCheckboxChange = (label: string, isChecked: boolean) => {
    if (isChecked) {
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, label]);
    } else {
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((item) => item !== label)
      );
    }
  };

  const handleRangeChange = (values: number[]) => {
    setPriceRange(values);
  };

  const analyzePrices = (products: any[]) => {
    if (products?.length === 0) {
      return { highestPrice: 0, lowestPrice: 0 };
    }

    const uniquePrices = Array.from(
      new Set(products?.map((product) => product.pricing.productPrice))
    );

    const highestPrice = Math.max(...uniquePrices);
    const lowestPrice = Math.min(...uniquePrices);

    return { highestPrice, lowestPrice };
  };

  const { highestPrice, lowestPrice } = analyzePrices(data);

  const handleApplyClick = () => {
    console.log("Selected Items:", selectedItems);
    console.log("Price Range:", priceRange);
  };
  console.log(data);
  const cityData = data?.map((item) =>
    item?.vendor?.businessInformation?.city.toLowerCase()
  );

  const UniqueCity: any[] = Array.from(new Set(cityData));

  console.log(UniqueCity, "lii");

  return (
    <div className=" p-4">
      <Accordion
        items={
          //   <AccordionItem title="Livestock" key="livestock">
          //     <Checkbox label="Type 1" onCheckboxChange={handleCheckboxChange} />
          //     <Checkbox label="Type 2" onCheckboxChange={handleCheckboxChange} />
          //     {/* Add more checkboxes as needed */}
          //   </AccordionItem>,
          //   <AccordionItem title="Feed" key="feed">
          //     <Checkbox label="Type 1" onCheckboxChange={handleCheckboxChange} />
          //     <Checkbox label="Type 2" onCheckboxChange={handleCheckboxChange} />
          //     {/* Add more checkboxes as needed */}
          //           </AccordionItem>,
          [
              <AccordionItem title="Pork" key="pork">
                <Checkbox label="Type 1" onCheckboxChange={handleCheckboxChange} />
                <Checkbox label="Type 2" onCheckboxChange={handleCheckboxChange} />
                {/* Add more checkboxes as needed */}
              </AccordionItem>,
            <AccordionItem title={"Location"}>
              {UniqueCity?.map((city, index) => (
                <Checkbox
                  key={index}
                  label={_.startCase(city)}
                  onCheckboxChange={handleCheckboxChange}
                />
              )) || []}
            </AccordionItem>,
            <AccordionItem title="Price" key="price">
              <RangeInput
                min={lowestPrice}
                max={highestPrice}
                onChange={({ min, max }) =>
                  console.log(`min = ${min}, max = ${max}`)
                }
              />
            </AccordionItem>,
          ]
        }
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-4"
        onClick={handleApplyClick}
      >
        Apply
      </button>
    </div>
  );
};

export default Filtercomp;
