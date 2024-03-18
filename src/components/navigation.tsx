'use client';

import {useRouter} from "next/navigation";

const Navigation = ({selectedPage, numItemsInCart}: { selectedPage: string, numItemsInCart: number }) => {
    const pages = [
        {path: "all", pageName: "all", displayName: "All"},
        {path: "ships", pageName: "ship", displayName: "Ships"},
        {path: "deathstars", pageName: "star", displayName: "Death Stars"},
        {path: "destroyers", pageName: "destroyer", displayName: "Star Destroyers"}
    ];

    const getPage = (path: string) => {
        if (path === "all") {
           return "/";
        } else {
           return `/${path}`;
        }
    };

    return (
        <>
            <div className="relative w-full">
                <a href="/" className="absolute left-2">
                    <img src={"/images/logo.png"} width={"40px"} height={"40px"}/>
                </a>
                <div className="flex gap-4 absolute left-16">
                    {pages.map(filterValue =>
                        <a href={getPage(filterValue.path)}
                           key={filterValue.path}
                           className={`shrink-0 py-2 ${filterValue.pageName === selectedPage ? "font-bold" : ""}`}>
                            {filterValue.displayName}
                        </a>
                    )}
                </div>
                <div className="flex items-center absolute right-2">
                    <img src={"/images/cart.png"} className="" width="24px" height="20px"/>
                    <p className="bg-amber-500 rounded-full px-2">{numItemsInCart}</p>
                </div>
            </div>
        </>);
}

export default Navigation;
