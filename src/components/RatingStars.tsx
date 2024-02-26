import { useEffect, useState } from "react";
import { IoMdStarOutline } from "react-icons/io";
type StarRatingProp = {
  maxRating: number;
  defaultRating?: number;
  iconSize: number;
  canRate: boolean;
  onSetRating?: any;
};

const RatingStars: React.FC<StarRatingProp> = ({
  maxRating,
  defaultRating,
  iconSize,
  canRate,
  onSetRating,
}) => {
  const [rating, setRating] = useState(defaultRating ?? 2);
  const [tempRating, setTempRating] = useState(0);

  useEffect(() => {
    setRating(defaultRating ?? 2);
  }, [defaultRating]);

  function handleRating(rating: number) {
    setRating(rating);
    onSetRating(rating);
  }

  return (
    <div className="flex gap-0">
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
    <div
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
      className="cursor-poiner"
    >
      {full ? (
        <IoMdStarOutline size={iconSize} color="#FE6600" />
      ) : (
        <IoMdStarOutline size={iconSize} color="#797979" />
      )}
    </div>
  );
};
