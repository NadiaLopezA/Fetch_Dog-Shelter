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
                <div className="container mx-auto px-4">
                    <div className="justify-between items-center flex flex-wrap -mx-4">
                        <div className="mx-auto px-4 relative w-full lg:w-5/12 -mt-56 md:-mt-72 xl:-mt-72">
                            <CardLogin />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
