import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import NavBar from "../components/nav-component/NavBar";
import MyOrderSection from "../components/sellers-order-page-component/MyOrderSection";

const MyOrder = () => {
  const [modalInfo, setModalInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  let [num, setNum] = useState(1);
  let [cur, setCur] = useState(1);

  const pages = [
    {page: num },
    {page: num + 1},
    {page: num + 2 },
    {page: num + 3 }
  ]

  const Next = () => {
    setNum(num++)
  }

  const Prev = () => {
    num > 1 && setNum(--num)
  }



  const OrderData = [
    {
      id: "1",
      img: "./images/productimg1.png",
      location: "Abuja",
      time: "20:40pm",
      product_name: "100%  Healthy-Fed Pork Lap",
      store_name: "Porker Hut",
      order_date: "21 September 2022",
      order_id: "21 September 2022",
      price: "32,500",
      quantity: "4",
      order_total: "30,000",
      order_status: "PLACED",
    },
    {
      id: "2",
      img: "./images/productimg1.png",
      location: "Abuja",
      time: "20:40pm",
      product_name: "100%  Healthy-Fed Pork Lap",
      store_name: "Porker Hut",
      order_date: "21 September 2022",
      order_id: "21 September 2022",
      price: "32,500",
      quantity: "4",
      order_total: "30,000",
      order_status: "PLACED",
    },
    {
      id: "3",
      img: "./images/productimg1.png",
      location: "Abuja",
      time: "20:40pm",
      product_name: "100%  Healthy-Fed Pork Lap",
      store_name: "Porker Hut",
      order_date: "21 September 2022",
      order_id: "21 September 2022",
      price: "32,500",
      quantity: "4",
      order_total: "30,000",
      order_status: "PLACED",
    },
    {
      id: "4",
      img: "./images/productimg1.png",
      location: "Abuja",
      time: "20:40pm",
      product_name: "100%  Healthy-Fed Pork Lap",
      store_name: "Porker Hut",
      order_date: "21 September 2022",
      order_id: "21 September 2022",
      price: "32,500",
      quantity: "4",
      order_total: "30,000",
      order_status: "PLACED",
    },
    {
      id: "5",
      img: "./images/productimg1.png",
      location: "Abuja",
      time: "20:40pm",
      product_name: "100%  Healthy-Fed Pork Lap",
      store_name: "Porker Hut",
      order_date: "21 September 2022",
      order_id: "21 September 2022",
      price: "32,500",
      quantity: "4",
      order_total: "30,000",
      order_status: "PLACED",
    },
    {
      id: "6",
      img: "./images/productimg1.png",
      location: "Abuja",
      time: "20:40pm",
      product_name: "100%  Healthy-Fed Pork Lap",
      store_name: "Porker Hut",
      order_date: "21 September 2022",
      order_id: "21 September 2022",
      price: "32,500",
      quantity: "4",
      order_total: "30,000",
      order_status: "PLACED",
    },
    {
      id: "7",
      img: "./images/productimg1.png",
      location: "Abuja",
      time: "20:40pm",
      product_name: "100%  Healthy-Fed Pork Lap",
      store_name: "Porker Hut",
      order_date: "21 September 2022",
      order_id: "21 September 2022",
      price: "32,500",
      quantity: "4",
      order_total: "30,000",
      order_status: "PLACED",
    },
    {
      id: "8",
      img: "./images/productimg1.png",
      location: "Abuja",
      time: "20:40pm",
      product_name: "100%  Healthy-Fed Pork Lap",
      store_name: "Porker Hut",
      order_date: "21 September 2022",
      order_id: "21 September 2022",
      price: "32,500",
      quantity: "4",
      order_total: "30,000",
      order_status: "PLACED",
    },
    {
      id: "9",
      img: "./images/productimg1.png",
      location: "Abuja",
      time: "20:40pm",
      product_name: "100%  Healthy-Fed Pork Lap",
      store_name: "Porker Hut",
      order_date: "21 September 2022",
      order_id: "21 September 2022",
      price: "32,500",
      quantity: "4",
      order_total: "30,000",
      order_status: "PLACED",
    },
    {
      id: "10",
      img: "./images/productimg1.png",
      location: "Abuja",
      time: "20:40pm",
      product_name: "100%  Healthy-Fed Pork Lap",
      store_name: "Porker Hut",
      order_date: "21 September 2022",
      order_id: "21 September 2022",
      price: "32,500",
      quantity: "4",
      order_total: "30,000",
      order_status: "PLACED",
    },
  ];

  const rowEvents = {
    onClick: (e: any, row: any) => {
      console.log(row);
      
    }
  }
  return (
    <div className="w-full h-screen">
      <NavBar />
      <div className="flex items-center flex-col justify-center mt-28">
        <h2 className="text-2xl font-medium">My Orders</h2>

        <div className="h-1 w-16 bg-[#197B30] mt-1"></div>
      </div>
      <div>
        <div className="flex items-center justify-between  px-20 mt-8">
          <div className="flex items-center justify-between gap-8">
            <button className="underline text-sm">All</button>
            <button className="border-2 border-[#197B30] rounded-lg py-2 px-4 text-sm">
              Pending
            </button>
            <button className="underline text-sm">Ready to GO</button>
            <button className="underline text-sm">Completed</button>
            <button className="underline text-sm">Failed</button>
          </div>

          <div>
            <div>
              <div className="relative flex items-center justify-center px-5">
                <div className="text-[#1F1F1F] absolute top-1/2 -translate-y-1/2 left-[350px] h-9 bg-[#F4F4F4] w-10 flex items-center justify-center rounded-r-lg">
                  <HiOutlineSearch size={20} />
                </div>
                <input
                  type="text"
                  placeholder="Order  number, item name or other criteria"
                  className="text-sm focus:outline-none active:outline-none h-9 w-[350px] bg-[#F4F4F4] rounded-l-lg pl-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <table className="m-auto mt-10 w-[89%]">
          <thead className="py-5 px-5 bg-[#F4F4F4]">
            <td className="px-5 py-5">Product Name</td>
            <td className="px-5 py-5">Store Name</td>
            <td className="px-5 py-5">Order Data</td>
            <td className="px-5 py-5">Order ID</td>
            <td className="px-5 py-5">Price</td>
            <td className="px-5 py-5">Quantity</td>
            <td className="px-5 py-5">Order Total</td>
            <td className="px-5 py-5">Status</td>
            <td></td>
          </thead>

          {OrderData.map((order, index) => {
            return (
              <MyOrderSection order={order} key={index} rowEvents={rowEvents} />
            );
          })}
        </table>
      </div>

      <div className="flex items-center justify-center gap-2  border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-10">
        <button
          onClick={Prev}
          className="h-8 border border-[#A2A2A2] w-10 hover:bg-[#197B30] hover:text-white px-1 rounded-l-lg"
        >
          <RxCaretLeft size={28} />
        </button>
        {pages.map((pg, i) => (
          <button
            className={`h-8 border  border-[#A2A2A2] w-10 ${
              cur === pg.page && "text-[#197B30] border-[#197B30]"
            }`}
            key={i}
            onClick={() => setCur(pg.page)}
          >
            {pg.page}
          </button>
        ))}

        <button
          onClick={Next}
          className="h-8 border border-[#A2A2A2] w-10 hover:bg-[#197B30] hover:text-white px-1 rounded-r-lg"
        >
          <RxCaretRight size={28} />
        </button>
      </div>
    </div>
  );
};

export default MyOrder;


// import React, { useState } from "react";

// interface Order {
//   id: string;
//   img: string;
//   location: string;
//   time: string;
//   product_name: string;
//   store_name: string;
//   order_date: string;
//   order_id: string;
//   price: string;
//   quantity: string;
//   order_total: string;
//   order_status: string;
// }

// const MyOrder: React.FC<{ orders: Order[] }> = ({ orders: any }) => {


//    const orders = [
//     {
//       id: "1",
//       img: "./images/productimg1.png",
//       location: "Abuja",
//       time: "20:40pm",
//       product_name: "100%  Healthy-Fed Pork Lap",
//       store_name: "Porker Hut",
//       order_date: "21 September 2022",
//       order_id: "21 September 2022",
//       price: "32,500",
//       quantity: "4",
//       order_total: "30,000",
//       order_status: "PLACED",
//     },
//     {
//       id: "2",
//       img: "./images/productimg1.png",
//       location: "Abuja",
//       time: "20:40pm",
//       product_name: "100%  Healthy-Fed Pork Lap",
//       store_name: "Porker Hut",
//       order_date: "21 September 2022",
//       order_id: "21 September 2022",
//       price: "32,500",
//       quantity: "4",
//       order_total: "30,000",
//       order_status: "PLACED",
//     },
//     {
//       id: "3",
//       img: "./images/productimg1.png",
//       location: "Abuja",
//       time: "20:40pm",
//       product_name: "100%  Healthy-Fed Pork Lap",
//       store_name: "Porker Hut",
//       order_date: "21 September 2022",
//       order_id: "21 September 2022",
//       price: "32,500",
//       quantity: "4",
//       order_total: "30,000",
//       order_status: "PLACED",
//     },
//     {
//       id: "4",
//       img: "./images/productimg1.png",
//       location: "Abuja",
//       time: "20:40pm",
//       product_name: "100%  Healthy-Fed Pork Lap",
//       store_name: "Porker Hut",
//       order_date: "21 September 2022",
//       order_id: "21 September 2022",
//       price: "32,500",
//       quantity: "4",
//       order_total: "30,000",
//       order_status: "PLACED",
//     },
//     {
//       id: "5",
//       img: "./images/productimg1.png",
//       location: "Abuja",
//       time: "20:40pm",
//       product_name: "100%  Healthy-Fed Pork Lap",
//       store_name: "Porker Hut",
//       order_date: "21 September 2022",
//       order_id: "21 September 2022",
//       price: "32,500",
//       quantity: "4",
//       order_total: "30,000",
//       order_status: "PLACED",
//     },
//     {
//       id: "6",
//       img: "./images/productimg1.png",
//       location: "Abuja",
//       time: "20:40pm",
//       product_name: "100%  Healthy-Fed Pork Lap",
//       store_name: "Porker Hut",
//       order_date: "21 September 2022",
//       order_id: "21 September 2022",
//       price: "32,500",
//       quantity: "4",
//       order_total: "30,000",
//       order_status: "PLACED",
//     },
//     {
//       id: "7",
//       img: "./images/productimg1.png",
//       location: "Abuja",
//       time: "20:40pm",
//       product_name: "100%  Healthy-Fed Pork Lap",
//       store_name: "Porker Hut",
//       order_date: "21 September 2022",
//       order_id: "21 September 2022",
//       price: "32,500",
//       quantity: "4",
//       order_total: "30,000",
//       order_status: "PLACED",
//     },
//     {
//       id: "8",
//       img: "./images/productimg1.png",
//       location: "Abuja",
//       time: "20:40pm",
//       product_name: "100%  Healthy-Fed Pork Lap",
//       store_name: "Porker Hut",
//       order_date: "21 September 2022",
//       order_id: "21 September 2022",
//       price: "32,500",
//       quantity: "4",
//       order_total: "30,000",
//       order_status: "PLACED",
//     },
//     {
//       id: "9",
//       img: "./images/productimg1.png",
//       location: "Abuja",
//       time: "20:40pm",
//       product_name: "100%  Healthy-Fed Pork Lap",
//       store_name: "Porker Hut",
//       order_date: "21 September 2022",
//       order_id: "21 September 2022",
//       price: "32,500",
//       quantity: "4",
//       order_total: "30,000",
//       order_status: "PLACED",
//     },
//     {
//       id: "10",
//       img: "./images/productimg1.png",
//       location: "Abuja",
//       time: "20:40pm",
//       product_name: "100% ",
//       store_name: "Porker Hut",
//       order_date: "21 September 2022",
//       order_id: "21 September 2022",
//       price: "32,500",
//       quantity: "4",
//       order_total: "30,000",
//       order_status: "PLACED",
//     },
//   ];
//   const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

//   const handleRowClick = (order: Order) => {
//     setSelectedOrder(order);
//   };

//   return (
//     <div>
//       {selectedOrder ? (
//         <div>
//           <button onClick={() => setSelectedOrder(null)}>Close Pop Up</button>
//           <div>
//             {orders.map(order => (
//               <div>{order.product_name}</div>
              
//             ))}
//           </div>
          
          
//         </div>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Image</th>
//               <th>Location</th>
//               <th>Time</th>
//               <th>Product Name</th>
//               <th>Store Name</th>
//               <th>Order Date</th>
//               <th>Order ID</th>
//               <th>Price</th>
//               <th>Quantity</th>
//               <th>Order Total</th>
//               <th>Order Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order.id} onClick={() => handleRowClick(order)}>
//                 <td>{order.id}</td>
//                 <td>
//                   <img src={order.img} alt={order.product_name} width="50" />
//                 </td>
//                 <td>{order.location}</td>
//                 <td>{order.time}</td>
//                 <td>{order.product_name}</td>
//                 <td>{order.store_name}</td>
//                 <td>{order.order_date}</td>
//                 <td>{order.order_id}</td>
//                 <td>{order.price}</td>
//                 <td>{order.quantity}</td>
//                 <td>{order.order_total}</td>
//                 <td>{order.order_status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };


// export default MyOrder;

