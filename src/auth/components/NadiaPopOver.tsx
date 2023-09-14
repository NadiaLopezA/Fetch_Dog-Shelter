import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Avatar,
    Typography,
  } from "@material-tailwind/react";
  
  export const NadiaPopOver = () => {
    return (
      <Popover placement="bottom">
        <PopoverHandler>
          <Typography
            as="li"
            variant="small"
            className="p-1 font-normal text-white hover:cursor-pointer"
            href=""
          >
            <p>About the site creator</p>
          </Typography>
        </PopoverHandler>
        <PopoverContent className="w-72">
          <div className="flex items-center gap-4 border-blue-gray-50">
            <Avatar             
              alt="Nadia López photo" 
              src="../assets/img/login/Nadia.png" 
              className="rounded-full"
            />
            <div>
              <Typography variant="h6" color="blue-gray" className="border-b">
                Nadia López
              </Typography>
              <Typography variant="small" color="gray" className="font-normal mt-2 hover:underline text-blue-800">
                <a href="https://www.nadia-lopez.com/" target="_blank">Check out my website!</a>
              </Typography>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    );
  };
  