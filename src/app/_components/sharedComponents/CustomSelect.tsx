'use client'
import React, { useState } from 'react'

const CustomSelect = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectData, setSelectData] = useState('');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = (e:any) => {
        setIsOpen(false);
        setSelectData(e.target.getAttribute('data-value'))
    };


  return (
    <div className='w-full py-6 pb-8'>
        <div className="relative w-fit">
            <button
                type="button"
                className="px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center"
                onClick={toggleDropdown}
            >{`${selectData || 'Марка'}`}</button>

            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <li>
                            <button
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={closeDropdown}
                                data-value={`Option 1`}
                            >
                                Option 1
                            </button>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={closeDropdown}
                                data-value={` Option 2`}
                            >
                                Option 2
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={closeDropdown}
                            >
                                Option 3
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    </div>
)

}

export default CustomSelect