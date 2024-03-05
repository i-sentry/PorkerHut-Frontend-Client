import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem";
import Checkbox from "./Checkbox";
import RangeInput from "./RangeInput";
import _ from "lodash";
import { useGetAllCategories } from "../../services/hooks/Vendor/category";

interface FiltercompProps {
  data: any[];
  selectedItems: string[];
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
  handleApplyClick: () => void;
  handleClear: () => void;
}

const Filtercomp: React.FC<FiltercompProps> = ({
  data,
  selectedItems,
  setSelectedItems,
  handleApplyClick,
  handleClear,
}) => {
  // const [priceRange, setPriceRange] = useState<number[]>([0, 100]);
  const allCategories = useGetAllCategories();

  const { data: catagories } = allCategories;
  const handleCheckboxChange = (label: string, isChecked: boolean) => {
    if (isChecked) {
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, label]);
    } else {
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((item) => item !== label),
      );
    }
  };

  // const handleRangeChange = (values: number[]) => {
  //   setPriceRange(values);
  // };

  const analyzePrices = (products: any[]) => {
    if (products?.length === 0) {
      return { highestPrice: 0, lowestPrice: 0 };
    }

    const uniquePrices = Array.from(
      new Set(products?.map((product) => product.pricing.productPrice)),
    );

    const highestPrice = Math.max(...uniquePrices);
    const lowestPrice = Math.min(...uniquePrices);

    return { highestPrice, lowestPrice };
  };

  const { highestPrice, lowestPrice } = analyzePrices(data);

  //   const handleApplyClick = () => {
  //     console.log("Selected Items:", selectedItems);
  //     console.log("Price Range:", priceRange);
  //   };

  //   console.log(data);
  const cityData = data?.map((item) =>
    item?.vendor?.businessInformation?.city.toLowerCase(),
  );

  const UniqueCity: any[] = Array.from(new Set(cityData));

  //   console.log(UniqueCity, "lii");

  return (
    <div className="p-4">
      <div className="hidden lg:block">
        <h1>Filters</h1>
      </div>
      <Accordion
        items={[
          ...(catagories?.data || []).map((item: any, index: any) => (
            <AccordionItem title={_.startCase(item?.name)} key={index}>
              {(item.subcategories || []).map(
                (subCategory: any, subIndex: any) => (
                  <Checkbox
                    key={subIndex}
                    label={_.startCase(subCategory.name)}
                    onCheckboxChange={handleCheckboxChange}
                  />
                ),
              )}
            </AccordionItem>
          )),

          <AccordionItem title={"Location"}>
            {(UniqueCity || []).map((city, index) => (
              <Checkbox
                key={index}
                label={_.startCase(city)}
                onCheckboxChange={handleCheckboxChange}
              />
            ))}
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
        ]}
      />
      <div className="hidden items-center justify-between lg:flex ">
        <button
          className="mt-4 rounded border border-[#a10]  px-4 py-2 text-[#a10]"
          onClick={handleClear}
        >
          Cancel
        </button>
        <button
          className="mt-4 rounded border border-[#197B30] bg-[#197B30] px-4 py-2 text-right text-white"
          onClick={handleApplyClick}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default Filtercomp;
