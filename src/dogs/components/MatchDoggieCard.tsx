
import { useDogShelter } from '../../hooks';

import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography
} from '@material-tailwind/react';


export const MatchDoggieCard = (payload: { setOpenModal: React.Dispatch<React.SetStateAction<boolean>>, openModal: boolean }) => {

    const handleOpen = () => payload.setOpenModal(!payload.openModal);

    const { dogMatch } = useDogShelter();

    return (
        <>
            <Dialog
                size="sm"
                open={payload.openModal}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full max-w-[50rem] text-black">
                    <CardHeader
                        className="mb-4 grid h-16 place-items-center bg-cyan-950"
                    >
                        <Typography className="text-3xl uppercase font-bold text-white">
                            Congratulations!
                        </Typography>
                    </CardHeader>
                    <CardBody className="flex gap-4">
                        <div>
                            <img src={dogMatch?.img} className=" ml-4 h-64 w-64 object-cover object-center shadow-lg rounded-md" />
                        </div>
                        <div className="p-4 font-light">
                            <div className="divide-y-2 p-2 divide divide-orange-400">
                                <p className="text-2xl -mt-3">You matched with <span className="font-bold text-orange-400">{dogMatch?.name}</span>!</p>
                                <p></p>
                            </div>
                            <div className="p-2">
                                <p className="text-md">
                                    Welcome <span className=" font-semibold">{dogMatch?.name}</span>! an extraordinary
                                    dog. No doubt you guys will get along very well.
                                </p>
                                <div className="mt-6 flex">
                                    <div className="w-full justify-normal">
                                        <p className="uppercase font-semibold text-xs mb-2">Location</p>
                                        <p className="text-sm">State: {dogMatch?.location?.state}</p>
                                        <p className="text-sm">County: {dogMatch?.location?.county}</p>
                                        <p className="text-sm">City: {dogMatch?.location?.city}</p>
                                        <p className="text-sm">Zip code: {dogMatch?.location?.zip_code}</p>
                                        <a 
                                            className="text-sm hover:cursor-pointer underline text-blue-800 hover:text-blue-700"
                                            href={`https://www.google.com/maps/?q=${dogMatch?.location?.latitude},${dogMatch?.location?.longitude}`}
                                            target="_blank"                                            
                                        >
                                            Click here to see the location
                                        </a>
                                    </div>
                                    <div className="w-full justify-normal">
                                        <p className="uppercase font-semibold text-xs mb-2">characteristics</p>
                                        <p className="text-sm">Breed: {dogMatch?.breed}</p>
                                        <p className="text-sm">Age: {dogMatch?.age}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                    <CardFooter className="flex flex-col items-end mr-6 mb-2 pt-0">
                        <Button onClick={handleOpen} className="bg-zinc-500 hover:bg-zinc-300 w-20 rounded-mg">
                            Got it!
                        </Button>
                    </CardFooter>
                </Card>
            </Dialog>
        </>
    );
}