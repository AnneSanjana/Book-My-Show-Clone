import React from "react";
import {PiDotBold} from "react-icons/pi";
import {BiRupee} from  "react-icons/bi";
import {BsShare} from  "react-icons/bs";
import { launchRazorPay, launchRazorPay1 } from "../../pages/Movie.page";

const MovieHero = () => {
    return (
        <>
        <div className="md:hidden">
            <img src="https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/king-lear-et00370418-1695299200.jpg"/>
        </div>

        <div className="hidden md:block lg:hidden">
            <img src="https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/king-lear-et00370418-1695299200.jpg"/>
        </div>

        <div className="relative hidden lg:block" style={{height: "30rem"}}>
            <div className="absolute w-full h-full z-10"
            style={{backgroundImage: "linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%)"}}> 
            </div>

            <div className="absolute z-30 h-96 w-64 left-40 top-12 flex flex-row text-white" >
                <img src="https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/king-lear-et00370418-1695299200.jpg"
                alt="mini poster" className="w-full h-full rounded-2xl"/>
                <div className="px-8 py-16 ">
                   <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png" alt="premier" className="h-5"/>
                   
                   <h3 className="font-bold text-4xl py-4">King Lear</h3>

                   <div className="flex flex-row py-4 text-gray-300">
                     <p className="flex flex-row">English<PiDotBold className="w-8 h-8 align-baseline"/> Languages:&nbsp;</p>
                      <p className="text-red-400 hidden:underline hover:underline-offset-2"> Audio(2),Subtitles(1)</p>
                   </div>
                   
                   <div className="flex flex-row">
                    <p>1hr&nbsp;55m</p><PiDotBold className="w-8 h-8 align-baseline"/><p>Adventure,Drama,Thriller</p> 
                    <PiDotBold className="w-8 h-8 align-baseline"/>
                    <p>18+</p> 
                    <PiDotBold className="w-8 h-8 align-baseeline" /> <p>28&nbsp;May,2018</p>
                   </div>

                   <div className="flex flex-row gap-4 font-bold py-6">
                    <button onClick = {launchRazorPay1} className="bg-navColor-800 rounded px-10 py-2 text-white text-sm cursor-pointer flex flex-row">Rent
                    <BiRupee className="w-full h-full align-baseline"/>99</button>
                    <button onClick = {launchRazorPay} className="bg-navColor-800 rounded px-10 py-2 text-white text-sm cursor-pointer flex flex-row">Buy 
                    <BiRupee className="w-full h-full align-baseline"/>199</button>
                   </div>
                </div>
            </div>

            <img src="https://assets-in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/king-lear-et00370418-1695299200.jpg"
            alt="bg poster" className="w-full h-full"/>
        </div>
        </>
    )
}
export default MovieHero;