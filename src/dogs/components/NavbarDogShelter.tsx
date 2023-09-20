import {useState, useEffect} from 'react';
import { useAuthStore } from '../../hooks';

import {
  Navbar,
  Typography,
  IconButton,
  List,
  ListItem,
  Collapse,
} from '@material-tailwind/react';

export const NavbarDogShelter = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const { startLogout } = useAuthStore();

  const navList = (
    <List className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <ListItem className="">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal text-orange-400"
          onClick={() => startLogout()}
        >
          <div className="grid grid-flow-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-log-out"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            <p className="ml-2 font-bold text-base text-white">Log Out</p>
          </div>
        </Typography>
      </ListItem>
    </List>
  );
  return (
    <Navbar className="mx-auto w-full py-2 px-4 lg:px-8 lg:py-4 bg-cyan-800 rounded-none">
      <div className="container mx-auto flex items-center justify-between text-black">
        <Typography
          className="mr-4 py-1.5 text-white font-bold"
        >
          FETCH - SHELTER DOG EXERCISE
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
