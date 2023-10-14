import React from "react";

//import the components
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousal from "../components/HeroCarousal/herocarousal.component";

const DefaultLayout = (props) => {
    return (
        <>
         <Navbar />
         <HeroCarousal />
         {props.children}
        </>
        
    );
}

export default DefaultLayout;