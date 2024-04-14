import React, { useEffect, useRef, useState } from "react";
import ComingSoonImg from "../assets/coming-soon.png";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import BreadCrumb from "../components/story-components/ProductsBreadCrumbs";

const ComingSoon = ({
  pendingPage,
  items,
  className,
}: {
  pendingPage: string;
  items?: any;
  className?: string;
}) => {
  const [email, setEmail] = useState<string>("");
  const form = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  console.log(email, "email");

  const message = `I hope this email finds you well. I wanted to express my interest in the PorkerHut service mentioned on your website. Specifically, I am interested in the ${pendingPage} service.`;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // info@porkerhut.com
    // !porkerhut123
    if (form.current)
      emailjs
        .sendForm(
          "service_v7keb5q",
          "template_e7iub9d",
          form.current,
          "uATVS-GfuLxukJbho",
        )
        .then(
          (result: any) => {
            toast("Email sent! You will be notified soon");
            console.log(result.text, "Successufull", result);
          },
          (error: any) => {
            toast("An error occurred, try again!");
            console.log(error.text, error);
          },
        );
  };

  return (
    <>
      <div className={`w-full pb-16 ${className || "pt-[70px]"}`}>
        <ToastContainer />

        {items?.length && (
          <div className="mb-8 bg-neutral-100 px-4 pt-1">
            <BreadCrumb items={items} />
          </div>
        )}
        <div className="px-4 ">
          <div className="flex flex-col items-center pb-5">
            <img
              src={ComingSoonImg}
              alt="Coming Soon"
              width={250}
              height={250}
              className="mb-7 w-[250px]"
            />
            <div className="flex w-full flex-col items-center space-y-4">
              <div className="space-y-2 text-center">
                <p className="font-medium text-[#197B30]">
                  We're working hard to bring you something awesome. Stay tuned!
                </p>
                <p className="mx-auto w-[80vw] text-center font-medium text-[#FE6600] sm:w-full">
                  **Notify me when PorkerHut {pendingPage} is available**
                </p>
              </div>

              <div className="relative flex w-full flex-col items-center sm:w-2/3 lg:w-7/12 xl:w-1/2">
                <form
                  id="campaign"
                  ref={form}
                  onSubmit={sendEmail}
                  className="w-full"
                >
                  <div className="flex items-center justify-center">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      aria-label="Email"
                      id="email"
                      placeholder="Please enter your email address"
                      className="form-input inline-block w-full flex-grow rounded-md rounded-r-[0px] border placeholder:text-sm placeholder:text-[#A2A2A2] focus:border-green-700 focus:outline-0 focus:ring-green-700"
                    />
                    <textarea
                      name="message"
                      id="message"
                      aria-label="message"
                      defaultValue={message}
                      className="pointer-events-none invisible absolute top-0 left-0"
                    ></textarea>
                    {/* <button className="inline-block rounded-sm px-6 py-2 text-sm font-medium text-green-700 ring-1 ring-[#197B30]">
                    Back
                  </button> */}
                    <button className="inline-flex h-[41.33px] items-center justify-center rounded-sm bg-[#197B30] px-6 py-2 text-sm font-medium text-white ring-1 ring-[#197B30]">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
