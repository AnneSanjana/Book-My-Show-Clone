//Transforms one component to another component
//It basically helps us in adding additional functionalities to the existing components

import React from "react";
import { Route } from "react-router-dom";

//layouts
import DefaultLayout from "../layouts/Default.layout";
const DefaultHOC = ({ component: Component , ...restprops }) => {
    // component
    // restprops -> path , exact
    return (
        <>
        <Route
        {...restprops}
        component = { (props) => (
            <DefaultLayout>
             <Component {...props}/>
            </DefaultLayout>
        )

        }
        />
        </>
    );
};
export default DefaultHOC;