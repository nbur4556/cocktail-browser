import React, { ChangeEvent, MouseEvent } from 'react';

// Interfaces
import { ISearchParams } from './SearchSlider';
interface ISearchBarProps {
    searchParams: ISearchParams,
    setSearchParams: (searchParams: ISearchParams) => void,
    handleSearch: () => void
}

const SearchBar: React.FC<ISearchBarProps> = (props) => {
    const handleSetSearchTerm = (e: ChangeEvent<HTMLInputElement>): void => {
        props.setSearchParams({ ...props.searchParams, searchTerm: e.currentTarget.value });
    }

    const handleSearchClick = (e: MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        props.handleSearch();
    }

    return <form className="flex justify-center gap-8 p-3">
        <input className="p-3 w-3/4 rounded" type="text" value={props.searchParams.searchTerm} onChange={handleSetSearchTerm} />
        <button className="bg-gray-500 text-white py-3 px-10 rounded" onClick={handleSearchClick}>Search</button>
    </form>
}

export default SearchBar