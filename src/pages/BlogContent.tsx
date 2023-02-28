import React, { useEffect, useState } from "react";
import AppLayout from "../components/utility/AppLayout";
import Breadcrumbs from "../../src/components/utility/BreadCrumbs";
import { useParams } from "react-router-dom";
import { blogData } from "../utils/blogData";
import { IBlog } from "../utils/blogData";

const BlogContent = () => {
  const { id } = useParams();
  console.log(id);
  const [blog, setBlog] = useState<IBlog>({
    id: "",
    image: "",
    title: "",
    readDuration: "",
    createdAt: "",
    content: "",
    banner: "",
  });

  useEffect(() => {
    const filteredOrder = blogData.find((ord: IBlog) => ord.id === id);
    //@ts-ignore
    setBlog(filteredOrder);
  }, [id]);
    console.log(blog, "gekkki");
    // const paragraphsBlog = blog?.content
    //   .split("\n")
    //   .map((paragraph, index) => (
    //     <p key={index} className="text-base mb-6 bg-gray-100">
    //       {paragraph}
    //     </p>
    //   ));

  const paragraphs = blog?.content.split("\n");
  return (
    <AppLayout>
      <div className="">
        {/* <nav className="mb-20">
        <NavBar />
      </nav> */}
        <div className="  max-w-screen-xl ">
          <div
            className=" md:block xxs:flex flex-col  w-full md:h-[330px] bg-cover bg-center py-20 md:px-14 xxs:px-5"
            style={{
              backgroundImage: ` url('${blog?.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100vw",
            }}
          >
            <h1 className="mb-2 md:text-3xl font-medium  text-left    text-[#fff]">
              {blog?.title}
            </h1>

            <Breadcrumbs
              items={[
                {
                  name: "Home",
                  link: "/",
                },
                {
                  name: "blog",
                  link: "/blog",
                },
                {
                  name: `content`,
                  link: "/contact-us",
                },
              ]}
            />
          </div>
        </div>
        <div className="max-w-screen-lg md:m-auto py-8 bg-white relative top-[-90px] xxs:m-5 border ">
          <div className="mb-8">
            <p className="text-xs text-slate-400 text-center mb-5">
              {blog?.createdAt}
            </p>
            <h2 className="md:text-3xl font-bold  text-center xxs:text-base">{blog?.title}</h2>
            <div className="w-40 h-1 bg-[#197B30] mx-auto"></div>
          </div>
          <div className="xxs:w-full  md:w-3/4 m-auto text-justify  ">
            <div className="py-4 px-8">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-4 md:text-lg xxs:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default BlogContent;

// import React from "react";
// import Breadcrumbs from "./Breadcrumbs";

// const BlogPost = ({ blog }) => {
//   return (
//     <div>
//       <div className="max-w-screen-xl mx-auto">
//         <div
//           className="flex flex-col items-center justify-center w-full md:h-330 bg-cover bg-center py-20 px-14"
//           style={{
//             backgroundImage: `url('${blog?.image}')`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <h1 className="mb-2 text-3xl font-medium text-left text-white">
//             Contact Us
//           </h1>

//           <Breadcrumbs
//             items={[
//               {
//                 name: "Home",
//                 link: "/",
//               },
//               {
//                 name: "Contact Us",
//                 link: "/contact-us",
//               },
//             ]}
//           />
//         </div>
//       </div>

//       <div className="max-w-screen-xl mx-auto py-8">
//         <div className="w-3/4 m-auto text-center border">
//           <h2 className="text-3xl font-bold mb-4">Benefits of Meditation</h2>
//           <p className="text-lg mb-6">
//             Meditation is a practice that has been around for thousands of
//             years, and for good reason. It's been shown to have numerous
//             benefits for both the mind and body. Here are just a few of the
//             benefits of meditation:
//           </p>
//           <ol className="list-decimal pl-6">
//             <li className="mb-4 bg-gray-100 p-4">
//               <p className="text-lg">Reduces Stress and Anxiety</p>
//               <p className="text-gray-600">
//                 Meditation is known to reduce feelings of stress and anxiety by
//                 slowing down your thoughts and helping you focus on the present
//                 moment.
//               </p>
//             </li>
//             <li className="mb-4 bg-gray-100 p-4">
//               <p className="text-lg">Improves Focus and Concentration</p>
//               <p className="text-gray-600">
//                 Meditation has been shown to improve focus and concentration by
//                 training your brain to focus on one thing at a time.
//               </p>
//             </li>
//             <li className="mb-4 bg-gray-100 p-4">
//               <p className="text-lg">Promotes Emotional Health</p>
//               <p className="text-gray-600">
//                 Regular meditation can improve your emotional health by reducing
//                 negative emotions and promoting positive ones.
//               </p>
//             </li>
//           </ol>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogPost;
