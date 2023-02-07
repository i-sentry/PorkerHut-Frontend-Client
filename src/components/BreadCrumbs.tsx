import { Link } from 'react-router-dom'
import { RxSlash  } from "react-icons/rx";
type itemsType = {
  name: string | undefined;
  link: string;
};
type BreadCrumbType = {
  items: Array<itemsType>;
};
const BreadCrumb = ({ items }: BreadCrumbType) => {
  return (
    <div className="flex py-1 flex-1 items-center text-sm text-secondary gap-x-1 flex-wrap space-x-2 rounded-none text-white">
      {items.map((item, index) =>
        index !== items.length - 1 ? (
          <div
            key={index}
            className="flex items-center hover:animate-pulse gap-x-2 rounded-none text-white text-lg"
          >
            {/* <Link to={item.}>
              <button className="capitalize rounded-none">{item.name}</button>
            </Link> */}
          <div key={index} className="flex items-center gap-x-1 rounded-none text-white  text-base hover:animate-pulse">
            <Link to={item.link} >
              <button className="capitalize rounded-none hover:animate-pulse">{item.name}</button>
            </Link>
            <RxSlash />
          </div>
          </div>
        ) : (
          <button
            key={index}
            className="text-primary hover:animate-pulse text-white py-2 px rounded-md capitalize text-lg"
          >
            {item.name}
          </button>
        )
      )}
    </div>
  
  );
};
export default BreadCrumb;