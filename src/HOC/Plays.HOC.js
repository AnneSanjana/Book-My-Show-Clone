import React from "react";
import { Route } from "react-router-dom";

//layouts
import PlaysLayout from "../layouts/Plays.layout";
const PlaysHOC = ({ component: Component , ...restprops }) => {
    // component
    // restprops -> path , exact
    return (
        <>
        <Route
        {...restprops}
        component = { (props) => (
            <PlaysLayout>
             <Component {...props}/>
            </PlaysLayout>
        )

        }
        />
        </>
    );
};
export default PlaysHOC;