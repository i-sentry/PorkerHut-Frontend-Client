import React from 'react'

export  const links = [
  { name: "Home" },
  { name: "Products" },
  {
    name: "Services",
    subMenu: true,
    subLinks: [
      {
        head: "We Offer",
        subLink: [
          { name: "Agro Services", link: "/" },
          { name: "Veterinary Services", link: "/" },
          { name: "Weekend Kills", link: "/" },
        ],
      },
    ],
  },
  { name: "About" },
  { name: "Contact" },
];
