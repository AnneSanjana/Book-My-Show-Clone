import React from "react";

//import the components
import PlaysNavbar from "../components/Navbar/playsNavbar.component";

const PlaysLayout = (props) => {
    return (
        <>
         <PlaysNavbar />
         {props.children}
        </>
        
    );
}

export default  PlaysLayout;