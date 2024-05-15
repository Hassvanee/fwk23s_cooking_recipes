import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';

const Navbar = ({ handleSearch }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSearch(searchValue);
    };

    return (
        <div className='max-w-full mx-auto flex justify-between items-center p-4'>
            <div className='flex items-center'>
            <div className='cursor-pointer'>
            <AiOutlineMenu size={25} /></div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 font-bold'>
                    What's <span className=' text-orange-500'>cooking?</span>
                </h1>
            </div>
            <form onSubmit={handleFormSubmit}>
            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                    <AiOutlineSearch size={25} />
                    <input
                        className='bg-transparent p-2 w-full focus:outline-none'
                        onChange={handleInputChange}
                        value={searchValue}
                        type='text'
                        placeholder='Search recipe'
                    />
                </div>
            </form>
            
        </div>
    );
};

export default Navbar;