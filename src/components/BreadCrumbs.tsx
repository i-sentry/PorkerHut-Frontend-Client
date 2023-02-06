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
    <div className="flex  items-center text-sm text-secondary flex-wrap  rounded-none">
     
      
      {items.map((item, index) =>
        index !== items.length - 1 ? (
          <div
            key={index}
          >
            <Link to={item.link}>
              <button className="capitalize rounded-none">{item.name}</button>
          <div key={index} className="flex items-center gap-x-1 rounded-none text-white  text-base hover:animate-pulse">
            <Link to={item.link} >
              <button className="capitalize rounded-none hover:animate-pulse">{item.name}</button>
            </Link>
            <RxSlash />
          </div>
        ) : (
          <button
          <button
            key={index}
            className="text-primary hover:animate-pulse text-white py-2 px rounded-md capitalize text-lg"
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