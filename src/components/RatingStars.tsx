import { useState } from "react";
import { FaRegStar } from "react-icons/fa6";

type StarRatingProp = {
  maxRating: number;
  defaultRating?: number;
  iconSize: number;
  canRate: boolean;
};

const RatingStars: React.FC<StarRatingProp> = ({
  maxRating,
  defaultRating = 2,
  iconSize,
  canRate,
}) => {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(rating: number) {
    setRating(rating);
  }

  return (
    <div className="flex gap-1">
      {Array.from({ length: maxRating }, (_, i) => (
        <Star
          onRate={canRate ? () => handleRating(i + 1) : () => null}
          full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
          onHoverIn={canRate ? () => setTempRating(i + 1) : () => null}
          onHoverOut={canRate ? () => setTempRating(0) : () => null}
          iconSize={iconSize}
          key={i}
        />
      ))}
    </div>
  );
};

export default RatingStars;

type StarProp = {
  onRate: () => void;
  onHoverIn: () => void;
  onHoverOut: () => void;
  full: any;
  iconSize: number;
};
const Star: React.FC<StarProp> = ({
  onRate,
  full,
  onHoverIn,
  onHoverOut,
  iconSize,
}) => {
  return (
    <div onClick={onRate} onMouseEnter={onHoverIn} onMouseLeave={onHoverOut}>
      {full ? (
        <FaRegStar size={iconSize} color="#FE6600" />
      ) : (
        <FaRegStar size={iconSize} color="#797979" />
      )}
    </div>
  );
};
