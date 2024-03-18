'use client';

import {FormEvent, useState} from "react";

const Search = ({executeSearch} : {executeSearch: (searchTerm: string) => void}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        executeSearch(searchTerm);
    }

    return (
        <>
            <form className="flex gap-2 my-4 items-center justify-center w-[450px]" onSubmit={onSubmit}>
                <input type="text" placeholder="Search" onChange={(e) => setSearchTerm(e.target.value)}
                       className="p-2 w-[300px] border border-gray-200 grow-1"/>
                <div>
                    <button type="submit">
                        <img src="/images/search.png" />
                    </button>

                </div>
            </form>
        </>);
}

export default Search;
