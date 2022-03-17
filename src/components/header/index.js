import React from 'react';
import webNavigator from '../../constants/webNavigator.json';
import Link from "next/link";
import {useRouter} from "next/router";

function Header(){
    const router = useRouter();
    return(
        <header className='bg-white px-10 py-4 grid grid-cols-3 items-center'>
            <div className='brandBlock flex gap-x-10'>
                <div className="logo inline-flex gap-x-4 items-center">
                    <span className='h-8 w-8 rounded-full bg-pink-500 overflow-hidden grid place-items-center font-600 text-white'>T</span>
                    <span className='font-600 text-pink-500'>TASK</span>
                </div>
                <div className="flex-1 inline-flex items-center bg-theme-100 px-4 rounded-full">
                    <i className="fa-solid fa-magnifying-glass text-theme-400"/>
                    <input type="search" className='flex-1 bg-transparent border-none px-4 py-3 outline-0 text-sm' placeholder='Search Everything'/>
                </div>
            </div>
            <nav>
                <ul className='flex gap-x-10 justify-center font-500'>
                    {webNavigator.map((item, index) => (
                        <li key={index}>
                            <Link href={item.url}>
                                <a className={router.asPath === item.url ? 'text-pink-500' : 'text-theme-400'}>{item.name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className='flex justify-end'>
                <button className="relative after:content-[''] after:w-3 after:h-3 after:bg-pink-500 after:absolute after:-top-1 after:-right-1 after:rounded-full after:border-2 after:border-white">
                    <i className="fa-solid fa-bell fa-lg text-theme-400" />
                </button>
            </div>
        </header>
    )
}

export default Header;