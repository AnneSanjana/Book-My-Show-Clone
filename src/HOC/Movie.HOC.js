import React from "react";
import { Route } from "react-router-dom";

//layouts
import MovieLayout from "../layouts/Movie.layout";
const MovieHOC = ({ component: Component , ...restprops }) => {
    // component
    // restprops -> path , exact
    return (
        <>
        <Route
        {...restprops}
        component = { (props) => (
            <MovieLayout>
             <Component {...props}/>
            </MovieLayout>
        )

        }
        />
        </>
    );
};
export default MovieHOC;