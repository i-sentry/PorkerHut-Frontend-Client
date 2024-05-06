import React, { useState, useEffect, FC } from "react";
import { BsStar } from "react-icons/bs";

interface IRatingProps {
  onChange: (value: string | number) => void;
  defaultValue?: number;
  starSize?: number;
}

const RatingWidget: FC<IRatingProps> = ({
  onChange = (value: string | number) => {},
  defaultValue = 0,
  starSize = 14,
}) => {
  const [rating, setRating] = useState(defaultValue);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    onChange(rating);
  }, [onChange, rating]);

  const handleStarClick = (ratingValue: number) => {
    setRating(ratingValue);
    onChange(ratingValue);
  };

  return (
    <div className="flex text-yellow-500 cursor-pointer">
      {[...Array(5)].map((_, i) => {
        const ratingValue = i + 1;
        return (
          <label
            key={ratingValue}
            className=""
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(0)}
            onClick={(e) => {
              e.preventDefault();
              handleStarClick(ratingValue);
            }}
          >
            <input
              type="radio"
              name="rating"
              className="hidden"
              value={ratingValue}
            />
            <BsStar
              key={ratingValue}
              size={starSize}
              color={ratingValue <= (hover || rating) ? "#fe6600" : "#e4e5e9"}
              className="cursor-pointer mr-[2px] "
            />
          </label>
        );
      })}
    </div>
  );
};

export default RatingWidget;
