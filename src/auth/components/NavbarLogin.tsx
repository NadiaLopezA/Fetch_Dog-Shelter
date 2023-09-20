import React from "react";

import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";

import { NadiaPopOver } from "../components/NadiaPopOver";

export const NavbarLogin = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <NadiaPopOver />
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-white"
      >
        <a
          href="https://fetch.com/"
          target="_blank"
          className="flex items-center"
        >
          <p>
            Learn more about <span className="text-orange-500">FETCH</span>!
          </p>
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto w-full py-2 px-4 lg:px-8 lg:py-4 bg-cyan-800">
      <div className="container mx-auto flex items-center justify-between text-black">
        <Typography 
          className="mr-4 py-1.5 text-white font-bold"
        >
          FETCH - DOG SHELTER EXERCISE
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto mb-6 h-6 w-12 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </Collapse>
    </Navbar>
  );
};
