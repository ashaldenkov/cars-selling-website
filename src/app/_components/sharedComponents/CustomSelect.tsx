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
    placeHolder: string;
    dropdownLabel: string;
    name: string;
    [x:string]: any;
}

  const Icon = ({isOpen}:{isOpen: boolean}) => {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="#222" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className={`${isOpen ? 'rotate-180' : ''}`}>
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    );
};

const debounce = (callback:any, wait:number) => {
    let timeoutId: any = null;
    return (...args:any[]) => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        callback(...args);
      }, wait);
    };
  }
const trunc = (input:string) => {
    if (input.length > 37) {
        return input.substring(0, 37) + '...';
    }
    return input;
};

const CustomSelect = ({ options, form, name, data, setData, placeHolder, dropdownLabel }: CustomSelect) => {

    const [showMenu, setShowMenu] = useState(false); // Controls the visibility of the dropdown menu
    const [visible, setVisible] = useState(false); // Controls the visibility of the dropdown menu

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

    useEffect(() => {
        setTimeout(() => {
            setVisible(showMenu)
        }, 100)
    }, [showMenu])

    const handleInputClick = () => {
        setShowMenu(!showMenu)
    };

    const getDisplay = () => {
        if (!data[name] || data[name].length === 0) {
            return placeHolder;
        }
        return data[name].label;
    };

    const onItemClick = (option: any) => {
        let newValue;
        newValue = option;
        setData({...data, [name]: newValue});
    };

    const isSelected = (option: any) => {
        if (!data[name]) {
            return false;
        }

        return data[name].value === option.value;
    };

    return (
        <div className={`relative flex items-center bg-white select-none h-10 w-full min-lg:max-w-[324px] border border-slate-200 py-2 px-3 
            ${form == 'full' ? 'rounded-md' : ''} ${form == 'half-left' ? 'w-1/2 rounded-l-md' : ''} ${form == 'half-right' ? 'w-1/2 rounded-r-md' : ''} 
            text-sm text-slate-900 ${showMenu ? 'border-slate-900' : ''}`}>

            <div ref={inputRef} onClick={handleInputClick} className={`flex w-full justify-between items-center ${(form == "full" || data[name]?.value) ? '' : 'text-slate-400'}`}>
            <div className="max-[400px]:text-xs">{getDisplay()}</div>
            <Icon isOpen={showMenu}/>
            </div>

            {
                showMenu && (
                    <div className={`absolute z-10 bg-white top-[50px] -left-1 w-[212px] p-[5px] rounded-md max-h-[250px] transistion-opacity duration-200 ${ !visible ? 'opacity-0' : 'opacity-100'}
                     overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-white [&::-webkit-scrollbar-thumb]:bg-slate-600 
                     [&::-webkit-scrollbar-thumb]:rounded-full shadow-[0_4px_6px_0_#00000017]`}>
                        
                        <div className={`relative flex items-center font-semibold h-10 w-full rounded-md py-2 px-3 
                        text-sm text-slate-900 pl-8`}>
                            {dropdownLabel}
                        </div>
                            {
                            options.map((option:any) => (
                                <div onClick={() => onItemClick(option)} key={option.value} className={`relative flex items-center ${isSelected(option) && "bg-slate-100"}
                                 ${option.value ? '' : 'font-semibold'} h-10 ${option.label.length > 21 ? 'h-[50px]' : ''} leading-5 overflow-hidden w-full rounded-md px-3 text-sm text-slate-900 hover:bg-slate-100 pl-8`} >
                                    {(isSelected(option) && option.value) && (
                                                            <Image
                                                            className='w-auto h-auto absolute left-2'
                                                            src={SelectedOption}
                                                            alt="selected"
                                                            />
                                    )
                                    }
                                    {trunc(option.label)}
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