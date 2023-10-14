import React from "react";
import Slider from "react-slick";

// component
import Poster from "../Poster/poster.component";
// settings
import settings from "../../config/PosterCarousal.config";
// images
import PremierImages from "../../config/TempPosters.config";
import { PosterImages } from "../../config/TempPosters.config";

const Premier = () => {


    return (
        <>
        <div className="flex flex-col px-8">
            <h3 className="font-bold text-white text-2xl">Premiers</h3>
            <p className="text-sm text-white">Brand new releases every Friday</p>
        </div>
        <Slider {...settings}>
        {
            PosterImages.map((image) => (
            <Poster {...image} />
            ))
        }
        </Slider>
        </>
    )
}

export default Premier;