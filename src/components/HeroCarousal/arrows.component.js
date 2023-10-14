import React from "react";

export const NextArrow = (props) => {
     return(
        <>
        <div 
        className={props.className}
        style={{ ...props.style , backgroundColor: "black" , }}
        onClick={props.onClick }
        viewBox = "0 0 24 24"
      //   className = "!absolute top-2/4 left-4 -translate-y-2/4"
        />
        </>
     )
};

export const PrevArrow = (props) => {
    return(
        <>
        <div 
        className={props.className}
        style={{ ...props.style , backgroundColor:"black" }}
        onClick={props.onClick}
        />
        </>
     )
};
