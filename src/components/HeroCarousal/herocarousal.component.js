import React, {useState, useEffect} from "react";
import HeroSlider from "react-slick";
import axios from "axios";

import {NextArrow , PrevArrow} from "./arrows.component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {
  const [ images , setImages ] = useState([]);
  useEffect(() => {
        const requestNowPlayingMovies = async() => {
          const getImages = await axios.get("/movie/now_playing");
          console.log(getImages);
          setImages(getImages.data.results);  
        };
        requestNowPlayingMovies();
  }, []) 


    const settingsLg = {
        arrows: true,
        centerMode: true,
        centerPadding: "200px",
        dots: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    } 
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };


      return (
        <>
         {/* Small and medium screens */}
        <div className="lg:hidden">
           <HeroSlider {...settings}>
          {
          images.map ( (image) => (
            <div className="w-full h-72 md:h-96 py-3">
                <img src = {`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full rounded-sm"/>
            </div>
          ))
          }
        </HeroSlider>  
        </div>

         {/* Large screens */}
        <div className="hidden lg:block">
           <HeroSlider {...settingsLg}>
          {
          images.map ( (image) => (
            <div className="w-full h-96 px-1.5 py-2">
                <img src = {`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full rounded-sm"/>
            </div>
          ))
          }
        </HeroSlider>
        </div>
        </>
  
      )
}
export default HeroCarousal;