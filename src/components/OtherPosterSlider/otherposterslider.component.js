import React from "react";
import Slider from "react-slick";
import settings from "../../config/PosterCarousal.config";
import OtherPoster from "../OtherPosters/otherposters.component";

const OtherPosterSlider = (props) => {
    return (
        <>
        <div className="flex flex-col px-8">
            <h3 className={`text-2xl font-bold ${ props.isDark ? "text-white" : "text-gray-800"}`}>{props.title}</h3>
            <p className={`text-md  ${ props.isDark ? "text-white" : "text-gray-600"}`}>{props.genre}</p>
        </div>
        <Slider {...settings}>
        {
            props.images.map((image) => (
            <OtherPoster {...image} isDark={props.isDark} />
            ))
        }
        </Slider>
        </>
    )
}

export default OtherPosterSlider;