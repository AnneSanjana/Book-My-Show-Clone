import React from "react";
import { BiChevronRight,BiSearch ,BiMenu, BiChevronLeft,BiShareAlt} from "react-icons/bi";
import {MdArrowDropDown} from "react-icons/md";

const NavSm = () => {
    return (
        <>
        <div className="text-white flex items-center justify-between">
            <div className="flex items-center px-1">
                <BiChevronLeft className="w-8 h-8"/>
                <h3 className="text-lg font-bold">It All Starts Here!</h3> 
            </div>
            <div className="w-6 h-6 text-gray-300">
            <BiShareAlt className="w-full h-full"/>
            </div>
        </div>
        
        </>
    )
};

const NavLg = () => {
    return(
        <div className="container mx-auto px-10 flex items-center justify-between">
            <div className="flex items-center w-1/2">
                {/* logo division */}
                <div className="w-40 h-24 ">
                    <img src="https://seeklogo.com/images/B/bookmyshow-logo-31BC3C7354-seeklogo.com.png" alt="logo" className="w-full h-full p-3"></img>
                </div>
                {/* search bar division */}
                <div className="w-full flex items-center bg-white px-3 py-2 gap-2 rounded-sm">
                <BiSearch />
                <input type = "search" className="w-full  focus:outline-none" placeholder="Search for Movies, Events, Plays, Sports and Activities"></input>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer">
                    Vizag(Visakhapatnam) <MdArrowDropDown />
                </span>
                <button className="bg-navColor-800 rounded px-2 py-1 text-white text-sm">Sign in</button>
                {/* Menu bar division */}
                <div className="text-white w-8 h-8">
                   <BiMenu className="w-full h-full cursor-pointer"/>
                </div>
            </div>
        </div>
    )
};

const MovieNavbar = () => {
    return (
        <>
        <nav className="bg-navColor-700">
            {/* mobile screen */}
            <div className="md:hidden absolute inset-x-0 z-30 backdrop-filter bg-opacity-10  backdrop-blur-lg lg-relative bg-gradient-to-b from-black px-4 py-4">{
                <NavSm />
            }</div>
            {/* Ipad Screens */}
            <div className="hidden lg:hidden md:block absolute inset-x-0 z-30 backdrop-filter bg-opacity-10  backdrop-blur-lg lg-relative bg-gradient-to-b from-black px-4 py-4">{
                <NavSm />
            }</div>
            <div className="hidden lg:flex">{
                <NavLg />
            }</div> 
            
        </nav>
        </>
    );
};

export default MovieNavbar;
 