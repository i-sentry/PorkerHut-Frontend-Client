import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import ReactLoading from "react-loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";
import Admin from "../../assets/Admin.png";
import PorkerLogo from "../../assets/porker hut 1 1.png";
import CustomSelect, { SelectOptionType } from "../utility/CustomSelect";

import { toast } from "react-toastify";
import { useAdminSignUp } from "../../services/hooks/admin/Auth";

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

const CreateAdminAcct = () => {
  const navigate = useNavigate();
  const createAdmin = useAdminSignUp();
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
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  // const email = encodedEmail ? decodeURIComponent(encodedEmail) : null;
  const onSubmit: SubmitHandler<AdminSignUpProps> = (data) => {
    setLoading(true);
    const { firstName, lastName, password, email, role } = data;
    createAdmin
      //@ts-ignore
      .mutateAsync({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        role: role,
        invitationToken: token as string,
      })
      .then((res: any) => {
        reset();
        toast.success(`Account Created Successfully`);
        navigate("/admin-login");
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
      });
  };

  const toggleConfirmEye = (e: any) => {
    e.preventDefault();
    setEyeState2((prev) => !prev);
  };

  return (
    <>
      <div className="hide-scroll-bar fixed top-0 left-0 z-[999] h-screen w-full overflow-y-auto bg-black bg-opacity-30 p-3">
        <div className="hide-scroll-bar relative mb-40 flex h-full w-full items-start justify-between gap-9 bg-white px-[56px] py-12">
          <div className="w-[calc(50%_-_20px)]">
            <div className="flex items-center justify-between border-b border-[#D9D9D9] pb-[9px]">
              <div
                onClick={() => navigate("/")}
                className="flex cursor-pointer select-none items-center gap-2"
              >
                <img
                  src={PorkerLogo}
                  alt="Poker Logo"
                  className="h-7 lg:cursor-pointer"
                />
                <h1 className="porker select-none whitespace-nowrap font-Roboto-slab text-lg  font-bold text-[#197B30] sm:text-lg">
                  Porker Hut
                </h1>
              </div>
              <h1 className="text-xl font-bold text-black">
                ADMIN<span className="font-normal">CENTER</span>
              </h1>
            </div>
            <div className="mt-6 h-[420px] w-full ">
              <img src={Admin} className="mx-auto w-11/12" alt="Admin img" />
            </div>
          </div>
          <div className="hide-scroll-bar h-auto w-[calc(50%_-_20px)] overflow-auto border border-[#D9D9D9] bg-white px-8 py-8">
            <div>
              <h2 className="mb-2 text-2xl font-medium text-black">
                Create an account
              </h2>
              <p className="mb-3 text-base font-normal text-neutral-500">
                Register your account by filling the form below
              </p>
              <form
                action=""
                id="admin-sign-up"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="mt-4 flex gap-3">
                  <div className="w-1/2">
                    <label
                      htmlFor=""
                      className="text-sm font-normal text-zinc-800"
                    >
                      First Name
                    </label>
                    <input
                      {...register("firstName", { required: true })}
                      type="text"
                      name="firstName"
                      placeholder="Enter your first name"
                      id="firstName"
                      className={`mt-1 w-full appearance-none rounded border border-[#D9D9D9] px-3 py-3 text-sm font-normal placeholder:text-sm placeholder:text-[#A2A2A2] focus-within:border-[#197B30] focus:outline-none focus:ring-[#197b30] active:border-[#197B30] ${
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
                      className="text-sm font-normal text-zinc-800"
                    >
                      Last Name
                    </label>
                    <input
                      {...register("lastName", { required: true })}
                      type="text"
                      name="lastName"
                      placeholder="Enter your last name"
                      id="lastName"
                      className={`mt-1 w-full appearance-none rounded border border-[#D9D9D9] px-3 py-3 text-sm font-normal placeholder:text-sm placeholder:text-[#A2A2A2] focus-within:border-[#197B30] focus:outline-none focus:ring-[#197b30] active:border-[#197B30] ${
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
                <div className="mt-4 flex gap-3">
                  <div className="w-1/2">
                    <label
                      htmlFor=""
                      className="text-sm font-normal text-zinc-800"
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
                      placeholder="Enter your email address"
                      id="email"
                      className={`mt-1 w-full appearance-none rounded border border-[#D9D9D9] px-3 py-3 text-sm font-normal placeholder:text-sm placeholder:text-[#A2A2A2] focus-within:border-[#197B30] focus:outline-none focus:ring-[#197b30] active:border-[#197B30] ${
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
                      className="text-sm font-normal text-zinc-800"
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

                <div className="relative mt-4">
                  <label
                    htmlFor=""
                    className="text-sm font-normal text-zinc-800"
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
                    className={`mt-1 w-full appearance-none rounded border border-[#D9D9D9] px-3 py-3 placeholder:text-sm placeholder:text-[#A2A2A2] focus-within:border-[#197B30] focus:outline-none active:border-[#197B30] focus:ring-[#197b30]${
                      errors.password
                        ? "border-[#e10] focus-within:border-[#e10]"
                        : "border-[##EEEEEE] "
                    }`}
                  />
                  <button
                    className="absolute right-0 rounded-r-md pt-4 pr-5 text-center text-gray-500 outline-[#0eb683]"
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
                      className="w-full select-none rounded bg-[#197b30] py-3 px-4 tracking-wider text-white disabled:cursor-not-allowed disabled:bg-[#568a62]"
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
                    <p className="text-center font-normal text-[#A2A2A2]">
                      Already have an account?{" "}
                      <Link
                        to="/admin-login"
                        // onClick={() => closeModal(false)}
                        className="cursor-pointer font-normal text-[#197b30] hover:underline"
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
          {/* <button
            onClick={close}
            className="bg-[#197b30] p-2 absolute top-3 right-3"
          >
            <BsXLg className="fill-white" />
          </button> */}
        </div>
      </div>
    </>
  );
};

export default CreateAdminAcct;

const role = [
  { id: 1, value: "admin", label: "Admin" },
  { id: 2, value: "superadmin", label: "Super Admin" },
];
// user, admin, superadmin;
