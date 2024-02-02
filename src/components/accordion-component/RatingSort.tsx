import { useState } from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";

type RatingSortProps = {
  data: any;
  setData: any;
};

const RatingSort: React.FC<RatingSortProps> = ({ data, setData }) => {
  const [openSort, setOpenSort] = useState(false);
  const [sortType, setSortType] = useState("Most Recent");

  console.log(data, data instanceof Array, "sot data");

  // let sortedReviews = [...data?.ratings];
  // let bb = sortedReviews?.sort((a: any, b: any) => {
  //   const dateComparison =
  //     // new Date(a.createdAt).getDate() - new Date(b.createdAt).getDate();
  //     b.rating - a.rating;
  //   return dateComparison;
  // });

  // console.log(bb, "bb");

  let sortedReviews = [...data];

  const sortProducts = (type: string) => {
    switch (type) {
      case "Most Recent":
        sortedReviews?.sort(
          (a: any, b: any) =>
            new Date(b.createdAt).getDate() - new Date(a.createdAt).getDate()
        );
        break;
      case "High to Low":
        sortedReviews?.sort((a: any, b: any) => {
          console.log(sortedReviews, "sortProducts");
          return b.rating - a.rating;
        });
        break;
      case "Low to High":
        sortedReviews?.sort((a: any, b: any) => a.rating - b.rating);
        break;

      default:
        break;
    }
    setSortType(type);
    setData(sortedReviews);
    setOpenSort(!openSort);
  };

  return (
    <div className="relative">
      <button
        className="flex bg-gray-200 items-center gap-2 text-sm font-normal text-left bg-transparent rounded-lg"
        onClick={() => setOpenSort(!openSort)}
      >
        <span>{sortType}</span>
        {openSort ? <RxCaretDown size={24} /> : <RxCaretUp size={24} />}
      </button>
      {openSort && (
        <div className="absolute right-0 p-2 z-50 inline-block w-[200px] origin-top-right bg-white rounded-md shadow-lg">
          <button
            className="text-sm rounded bg-transparent p-2 hover:bg-gray-200"
            onClick={() => sortProducts("Most Recent")}
          >
            Most Recent
          </button>
          <button
            className="text-sm rounded bg-transparent p-2 hover:bg-gray-200"
            onClick={() => sortProducts("High to Low")}
          >
            Rating: High to Low
          </button>
          <button
            className="text-sm rounded bg-transparent p-2 hover:bg-gray-200"
            onClick={() => sortProducts("Low to High")}
          >
            Rating: Low to High
          </button>
        </div>
      )}
    </div>
  );
};

export default RatingSort;
