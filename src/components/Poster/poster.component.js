import React from "react";

const Poster = (props) => {
    return (
        <>
        <div className="flex flex-col items-start px-8 py-2">
            <div className="h-96">
                <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.original_title} className="w-full h-full rounded-md"/>
            </div>
            <h3 className={`text-lg font-bold ${ props.isDark ? "text-white" : "text-black"}`}>{props.title}</h3>
            <p className={`text-md  ${ props.isDark ? "text-white" : "text-gray-600"}`}>{props.genre}</p>
        </div>
        </>
    )

};

export default Poster;