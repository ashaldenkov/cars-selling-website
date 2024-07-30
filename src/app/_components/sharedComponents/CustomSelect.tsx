'use client'
import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image'
import SelectedOption from '@/app/_images/SelectedOption.svg'

type Option = {
    label: string;
    value: string;
}

type CustomSelect = {
    options: Option[];
    data: any;
    setData: React.Dispatch<React.SetStateAction<any>>;
    form?: "full" | "half-left" | "half-right";
  }

  const Icon = ({isOpen}:{isOpen: boolean}) => {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="#222" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className={`${isOpen ? 'rotate-180' : ''}`}>
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    );
};

const CustomSelect = ({ options, form, data, setData }: CustomSelect) => {

    const [showMenu, setShowMenu] = useState(false); // Controls the visibility of the dropdown menu
    const inputRef = useRef<any>(); // Reference to the custom select input element

    useEffect(() => {
        const handler = (e:any) => {
            if (inputRef.current && !inputRef.current.contains(e.target)) {
                setShowMenu(false);
            }
        };

        window.addEventListener("click", handler);
        return () => {
            window.removeEventListener("click", handler);
        };
    });
    
    const handleInputClick = () => {
        setShowMenu(!showMenu);
    };

    const getDisplay = () => {
        if (!data || data.length === 0) {
            return options[0]!.label;
        }
        return data.label;
    };

    const onItemClick = (option: any) => {
        let newValue;
        newValue = option;
        setData(newValue);
    };

    const isSelected = (option: any) => {
        if (!data) {
            return false;
        }

        return data.value === option.value;
    };
    

    return (
        <div className={`relative bg-white select-none h-10 w-full min-lg:max-w-[324px] border border-slate-200 py-2 px-3 
            ${form == 'full' ? 'rounded-md' : ''} ${form == 'half-left' ? 'w-1/2 rounded-l-md' : ''} ${form == 'half-right' ? 'w-1/2 rounded-r-md' : ''} 
            text-sm text-slate-900 mb-4 ${showMenu ? 'border-1 border-black' : ''}`}>

            <div ref={inputRef} onClick={handleInputClick} className={`flex justify-between items-center ${(form == "full" || data.value) ? '' : 'text-slate-400'}`}>
            {getDisplay()}
            <Icon isOpen={showMenu}/>
            </div>

            {
                showMenu && (
                    <div className={`absolute z-10 bg-white top-[50px] -left-1 w-[212px] p-[5px] rounded-md max-h-[250px]  
                     overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-white [&::-webkit-scrollbar-thumb]:bg-slate-600 
                     [&::-webkit-scrollbar-thumb]:rounded-full`}>
                            {
                            options.map((option:any) => (
                                <div onClick={() => onItemClick(option)} key={option.value} className={`relative flex items-center ${isSelected(option) && "bg-slate-100"}
                                 ${option.value ? '' : 'font-semibold'} h-10 w-full rounded-md py-2 px-3 text-sm text-slate-900 hover:bg-slate-100 pl-8`} >
                                    {(isSelected(option) && option.value) && (
                                                            <Image
                                                            className='w-auto h-auto absolute left-2'
                                                            src={SelectedOption}
                                                            alt="selected"
                                                            />
                                    )
                                    }
                                    {option.label}
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
}

export default CustomSelect