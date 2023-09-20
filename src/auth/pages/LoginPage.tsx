import React from "react";
import { useLocation } from "react-router-dom";

import { CardLogin, HeaderLogin, NavbarLogin } from "../components";


export const LoginPage = () => {
    const location = useLocation();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <div>
                <NavbarLogin />
                <HeaderLogin />
                <div className="mx-auto px-4">
                    <div className="mx-auto px-6 flex flex-col justify-center items-center relative w-full lg:w-5/12 -mt-80 md:-mt-96 xl:-mt-72">
                        <CardLogin />
                    </div>
                </div>
            </div>
        </>
    )
}
