import React, { useEffect, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { BsXLg } from "react-icons/bs";
import PorkerLogo from "../../assets/porker hut 1 1.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Admin from "../../assets/Admin.png";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import ReactLoading from "react-loading";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomSelect, { SelectOptionType } from "../utility/CustomSelect";
import { useUserSignUp } from "../../services/hooks/users";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  role: yup.string().required("role is required"),
});

interface AdminSignUpProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
}

type SignUpModal = {
  openModal: boolean;
  closeModal: any;
  email: string;
};

const CreateAdminAcct = ({ openModal, closeModal, email }: SignUpModal) => {
  const navigate = useNavigate();
  const createUserAcc = useUserSignUp();
  const [loading, setLoading] = useState(false);
  const [eyeState2, setEyeState2] = useState(false);
  const [dropOption, setDropOption] = useState<SelectOptionType>(null);
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<AdminSignUpProps>({ resolver: yupResolver(schema) });
  // const location = useLocation();
  // console.log(location, "location");
  // const queryParams = new URLSearchParams(location.search);
  // const encodedEmail = queryParams.get("email");
  // // console.log(encodedEmail, "encodedEmail");
  // const email = encodedEmail ? decodeURIComponent(encodedEmail) : null;
  const onSubmit: SubmitHandler<AdminSignUpProps> = (data) => {
    setLoading(true);
    const { firstName, lastName, password, role } = data;
    createUserAcc
      //@ts-ignore
      .mutateAsync({
        firstName: firstName,
        lastName: lastName,
        email: email && email.toLowerCase(),
        password: password,
        role: role,
      })
      .then((res: any) => {
        reset();
        toast.success(`Account Created Successfully`);
        closeModal();
        setLoading(false);
        console.log(res);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  };
  // console.log(email, "email");
  const close = () => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.delete("email");
    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
    window.history.replaceState({}, "", newUrl);
    closeModal((s: boolean) => !s);
    setValue("email", "");
    reset();
  };

  const toggleConfirmEye = (e: any) => {
    e.preventDefault();
    setEyeState2((prev) => !prev);
  };

  useEffect(() => {
    if (email) {
      setValue("email", email as string);
    }
  }, [email, setValue]);
  return (
    <>
      {openModal && (
        <div className="w-full h-screen overflow-y-auto bg-black bg-opacity-30 p-3 hide-scroll-bar fixed top-0 left-0 z-[999]">
          <div className="w-full h-full flex justify-between items-start gap-9 mb-40 px-[56px] py-12 hide-scroll-bar bg-white relative">
            <div className="w-[calc(50%_-_20px)]">
              <div className="border-b border-[#D9D9D9] pb-[9px] flex justify-between items-center">
                <div
                  onClick={() => navigate("/")}
                  className="flex items-center gap-2 cursor-pointer select-none"
                >
                  <img
                    src={PorkerLogo}
                    alt="Poker Logo"
                    className="lg:cursor-pointer h-7"
                  />
                  <h1 className="porker sm:text-lg font-bold text-[#197B30] whitespace-nowrap  font-Roboto-slab select-none text-lg">
                    Porker Hut
                  </h1>
                </div>
                <h1 className="text-xl font-bold text-black">
                  ADMIN<span className="font-normal">CENTER</span>
                </h1>
              </div>
              <div className="w-full h-[420px] mt-6 ">
                <img src={Admin} className="w-11/12 mx-auto" alt="Admin img" />
              </div>
            </div>
            <div className="w-[calc(50%_-_20px)] h-auto px-8 py-8 bg-white border-[#D9D9D9] border overflow-auto hide-scroll-bar">
              <div>
                <h2 className="text-black text-2xl font-medium mb-2">
                  Create an account
                </h2>
                <p className="text-neutral-500 text-base font-normal mb-3">
                  Register your account by filling the form below
                </p>
                <form
                  action=""
                  id="admin-sign-up"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="flex gap-3 mt-4">
                    <div className="w-1/2">
                      <label
                        htmlFor=""
                        className="text-zinc-800 text-sm font-normal"
                      >
                        First Name
                      </label>
                      <input
                        {...register("firstName", { required: true })}
                        type="text"
                        name="firstName"
                        placeholder="Enter your first name"
                        id="firstName"
                        className={`rounded w-full px-3 py-3 font-normal text-sm border border-[#D9D9D9] placeholder:text-sm placeholder:text-[#A2A2A2] active:border-[#197B30] focus-within:border-[#197B30] mt-1 focus:outline-none appearance-none focus:ring-[#197b30] ${
                          errors.firstName
                            ? "border-[#e10] focus-within:border-[#e10]"
                            : "border-[#D9D9D9] "
                        }`}
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-[#e10]">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div className="w-1/2">
                      <label
                        htmlFor=""
                        className="text-zinc-800 text-sm font-normal"
                      >
                        Last Name
                      </label>
                      <input
                        {...register("lastName", { required: true })}
                        type="text"
                        name="lastName"
                        placeholder="Enter your last name"
                        id="lastName"
                        className={`rounded w-full px-3 py-3 font-normal text-sm border border-[#D9D9D9] placeholder:text-sm placeholder:text-[#A2A2A2] active:border-[#197B30] focus-within:border-[#197B30] mt-1 focus:outline-none appearance-none focus:ring-[#197b30] ${
                          errors.lastName
                            ? "border-[#e10] focus-within:border-[#e10]"
                            : "border-[#D9D9D9] "
                        }`}
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-[#e10]">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <div className="w-1/2">
                      <label
                        htmlFor=""
                        className="text-zinc-800 text-sm font-normal"
                      >
                        Email Address
                      </label>
                      <input
                        {...register("email", {
                          required: "Email address is required",
                          // pattern: {
                          //   value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          //   message: "Invalid email address",
                          // },
                        })}
                        type="email"
                        name="email"
                        value={email as string}
                        disabled
                        placeholder="Enter your email address"
                        id="email"
                        className={`rounded w-full px-3 py-3 border text-sm font-normal border-[#D9D9D9] placeholder:text-sm placeholder:text-[#A2A2A2] active:border-[#197B30] focus-within:border-[#197B30] mt-1 focus:outline-none appearance-none focus:ring-[#197b30] ${
                          errors.email
                            ? "border-[#e10] focus-within:border-[#e10]"
                            : "border-[#D9D9D9] "
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-[#e10]">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div className="w-1/2">
                      <label
                        htmlFor=""
                        className="text-zinc-800 text-sm font-normal"
                      >
                        Role
                      </label>
                      <Controller
                        name="role"
                        control={control}
                        rules={{ required: "Role is required" }}
                        render={({ field }) => (
                          <CustomSelect
                            selectedOption={dropOption}
                            setSelectOption={(selectedOption) => {
                              setDropOption(selectedOption);
                              setValue("role", selectedOption?.value);
                              clearErrors("role");
                            }}
                            placeholder={"Select role"}
                            options={role || []}
                          />
                        )}
                      />
                      {errors.role && (
                        <p className="mt-1 text-sm text-[#e10]">
                          {errors.role.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 relative">
                    <label
                      htmlFor=""
                      className="text-zinc-800 text-sm font-normal"
                    >
                      Password
                    </label>
                    <input
                      {...register("password", { required: true })}
                      autoComplete="on"
                      type={eyeState2 ? "text" : "password"}
                      name="password"
                      placeholder="**********"
                      id="password"
                      className={`rounded w-full px-3 py-3 border border-[#D9D9D9] placeholder:text-sm placeholder:text-[#A2A2A2] active:border-[#197B30] focus-within:border-[#197B30] mt-1 focus:outline-none appearance-none focus:ring-[#197b30]${
                        errors.password
                          ? "border-[#e10] focus-within:border-[#e10]"
                          : "border-[##EEEEEE] "
                      }`}
                    />
                    <button
                      className="outline-[#0eb683] rounded-r-md text-center text-gray-500 absolute right-0 pt-4 pr-5"
                      onClick={toggleConfirmEye}
                    >
                      {eyeState2 ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                    </button>
                    {errors.password && (
                      <p className="mt-1 text-sm text-[#e10]">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                  <div className="">
                    <div className="mt-6">
                      <button
                        type="submit"
                        // disabled={true}
                        className="bg-[#197b30] py-3 px-4 w-full text-white tracking-wider select-none disabled:bg-[#568a62] disabled:cursor-not-allowed rounded"
                      >
                        {loading ? (
                          <div className="mx-auto flex items-center justify-center">
                            <ReactLoading
                              type={"spin"}
                              color={"#fff"}
                              height={"5%"}
                              width={"5%"}
                            />
                          </div>
                        ) : (
                          "Sign up"
                        )}
                      </button>
                    </div>
                    <div className="mt-8">
                      <p className="text-[#A2A2A2] font-normal text-center">
                        Already have an account?{" "}
                        <Link
                          to="/admin-login"
                          onClick={() => closeModal(false)}
                          className="font-normal hover:underline cursor-pointer text-[#197b30]"
                        >
                          Log in
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* CLOSE MODAL BUTTON */}
            <button
              onClick={close}
              className="bg-[#197b30] p-2 absolute top-3 right-3"
            >
              <BsXLg className="fill-white" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateAdminAcct;

const role = [
  { id: 1, value: "admin", label: "Admin" },
  { id: 2, value: "superadmin", label: "Super Admin" },
];
// user, admin, superadmin;
