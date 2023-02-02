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
    <div className="flex py-10 flex-1 items-center text-sm text-secondary gap-x-1 flex-wrap space-y-2 rounded-none">
     
      
      {items.map((item, index) =>
        index !== items.length - 1 ? (
          <div key={index} className="flex items-center gap-x-1 rounded-none text-white  text-lg">
            <Link to={item.link} >
              <button className="capitalize rounded-none">{item.name}</button>
            </Link>
            <RxSlash />
          </div>
        ) : (
          <span
            key={index}
            className="text-primary text-white py-1 px-2 rounded-md capitalize text-lg"
          >
            {item.name}
          </span>
        )
      )}
    </div>
  );
};
export default BreadCrumb;