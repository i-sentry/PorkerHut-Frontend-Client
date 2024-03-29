import React from "react";

const Header = () => {
  return (
    <div className="px-4 py-8 md:p-10">
      <h1 className="flex items-center justify-center pb-4 text-[20px] font-medium leading-[23px] text-[#FFFFFF] md:text-[40px] md:leading-[47px]">
        Join our Vet Team
      </h1>
      <p className="flex items-center justify-center text-[14px]   text-[#FFFFFF] md:text-[16px] md:leading-[150%] ">
        At Porker Hut, we believe in forging strong partnerships to deliver the
        highest level of care for our beloved pigs. We are excited to introduce
        our Vet Partner program designed to collaborate with veterinary
        professionals who share our commitment to responsible pig rearing and
        exceptional animal welfare.
      </p>
      <p className="mt-3 text-[14px]   text-[#FFFFFF] md:text-[16px] md:leading-[150%]">
        By becoming a Vet Partner with Porker Hut, you’ll join a network of
        dedicated experts in the field of veterinary medicine. As a Vet Partner,
        you will have the opportunity to work closely with our team of
        experienced pig farmers, nutritionists, and animal care specialists to
        ensure the health and well-being of our pigs throughout their journey
        from farm to table.
      </p>
    </div>
  );
};

export default Header;
