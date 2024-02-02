import React from "react";
import { MdKeyboardArrowRight, MdMessage } from "react-icons/md";
import { NavLink } from "react-router-dom";
import RatingStars from "../../RatingStars";
import moment from "moment";

type RatingCardProps = {
  id: string | undefined;
  data?: any;
};

const RatingCard: React.FC<RatingCardProps> = ({ id, data: ratingData }) => {
  console.log(id, ratingData, "id id");
  // const ratingData = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     date: "2023-03-10",
  //     rating: 4.5,
  //   },
  //   {
  //     id: 2,
  //     name: "Alice Smith",
  //     date: "2023-03-12",
  //     rating: 3.0,
  //   },
  //   {
  //     id: 3,
  //     name: "Bob Johnson",
  //     date: "2023-03-15",
  //     rating: 5.0,
  //   },
  //   {
  //     id: 4,
  //     name: "Emily Wong",
  //     date: "2023-03-09",
  //     rating: 2.5,
  //   },
  //   {
  //     id: 5,
  //     name: "Michael Chen",
  //     date: "2023-03-06",
  //     rating: 4.0,
  //   },
  //   {
  //     id: 6,
  //     name: "Jessica Lee",
  //     date: "2023-03-03",
  //     rating: 4.5,
  //   },
  //   {
  //     id: 7,
  //     name: "David Kim",
  //     date: "2023-03-08",
  //     rating: 3.5,
  //   },
  // ];
  return (
    <>
      <div className="md:grid md:gap-4 md:grid-cols-3 md:mt-10">
        {ratingData?.map((review: any, index: number) => (
          <div
            key={index}
            className="bg-[#F4F4F4] p-4 flex flex-col gap-3 rounded-sm xxs:mb-4 md:mb-0"
          >
            <div className="flex justify-between">
              <div className="items-center flex gap-2">
                <MdMessage size={20} />
                <h1 className="inline">
                  {`${review?.userDetails?.firstName} ${review?.userDetails?.lastName}`}
                </h1>
              </div>
              <div>
                <span className="text-[#040303] text-xs">
                  {moment(review?.created_at).format("DD-MM-YYYY")}
                </span>
              </div>
            </div>
            <RatingStars
              maxRating={5}
              defaultRating={review?.rating}
              iconSize={24}
              canRate={false}
            />
            <div>
              <span className=" text-sm">{review?.comment}</span>
            </div>
          </div>
        ))}
      </div>

      <NavLink
        to={`/product/rating/${id}`}
        className="flex items-center justify-center underline mt-10 gap-2"
      >
        <button className="font-semibold">SEE ALL</button>
        <MdKeyboardArrowRight size={20} />
      </NavLink>
    </>
  );
};

export default RatingCard;
