import { useState, useEffect, FC } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsStar } from "react-icons/bs";

interface IRatingProps {
  onChange: (value: string | number) => void;
  defaultValue?: number;
}

const RatingWidget: FC<IRatingProps> = ({
  onChange = (value: string | number) => {},
  defaultValue = 0,
}) => {
  const [rating, setRating] = useState(defaultValue);
  const [hover, setHover] = useState(defaultValue);

  useEffect(() => {
    onChange(defaultValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue]);

  return (
    <div className="flex text-yellow-500 cursor-pointer">
      {[...Array(5)].map((start, i) => {
        const ratingValue = i + 1;
        return (
          <label className="">
            <input
              type="radio"
              name="rating"
              className="hidden"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <BsStar
              size={18}
              color={ratingValue <= (hover || rating) ? "#fe6600" : "#e4e5e9"}
              className={`cursor-pointer lg:w-8 lg:h-8 ${
                i < ratingValue ? "fill-orange-500" : "fill-neutral-500"
              }`}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default RatingWidget;
