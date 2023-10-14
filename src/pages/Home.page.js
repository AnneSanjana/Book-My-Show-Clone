import React, {useState, useEffect} from "react";
import axios from "axios";
import EntertainmentCardSlider from "../components/Entertainment/entertainmentcard.component";
import Premier from "../components/Premier/premier.component";
import PosterSlider from "../components/PosterSlider/posterslider.component";
import OtherPosterSlider from "../components/OtherPosterSlider/otherposterslider.component";
// import PremierImages from "../config/TempPosters.config";
import { OnlineEventImages,OutdoorEventImages,SportImages } from "../config/TempPosters.config";

function HomePage(){
    const [popularMovies, setPopularMovies] = useState([]);
    useEffect(() => {
        const requestPopularMovies = async() => {
            const getPopularMovies = await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
    } ,[])
    console.log({popularMovies});

    const [ TopRatedMovies , setTopRatedMovies ] = useState([]);
  useEffect(() => {
        const requestTopRatedMovies = async() => {
          const getTopRatedMovies = await axios.get("/movie/top_rated");
          console.log({TopRatedMovies});
          setTopRatedMovies(getTopRatedMovies.data.results);  
        };
        requestTopRatedMovies();
  }, []) 
return( 
<>
<div className="flex flex-col gap-10">
    <div className="container mx-auto px-6">
        <PosterSlider images={TopRatedMovies} title="Recommended Top Movies" isDark={false}/>
    </div>

    <div className="container mx-auto px-6 ">
        <h1 className="font-bold text-2xl text-gray-800 px-4">The Best Of Live Events</h1>
        <EntertainmentCardSlider />
        
    </div>

    <div className="bg-navColor-700">
        
        <div className="container mx-auto px-6 py-6">
            <div className="flex">
            <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
            alt="premier"
            className="w-full h-full px-6"/>
            </div>
            <PosterSlider images={popularMovies}  title="Premiers" genre="Brand new releases every Friday" isDark={true}/>
        </div>
    </div>

    <div className="container mx-auto px-6 py-4">
        <OtherPosterSlider images= {OnlineEventImages} title="Online Streaming Events" isDark={false}/>
    </div>
    <div className="container mx-auto px-6 py-4">
        <OtherPosterSlider images={OutdoorEventImages} title="Outdoor Events" isDark={false} />
    </div>
    <div className="container mx-auto px-6 py-4">
        <OtherPosterSlider images={SportImages} title="ICC'S MEN'S CWC & Other Sports" isDark={false} />
    </div>
</div>

</>
)
}

export default HomePage;