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
    <div className="flex  items-center text-sm text-secondary flex-wrap  rounded-none">
     
      
      {items.map((item, index) =>
        index !== items.length - 1 ? (
          <div key={index} className="flex items-center gap-x-1 rounded-none text-white  text-base hover:animate-pulse">
            <Link to={item.link} >
              <button className="capitalize rounded-none hover:animate-pulse">{item.name}</button>
            </Link>
            <RxSlash />
          </div>
        ) : (
          <button
            key={index}
            className="text-primary text-white py-1 px-2 rounded-md hover:animate-pulse capitalize text-base"
          >
            {item.name}
          </button>
        )
      )}
    </div>
  );
};
export default BreadCrumb;