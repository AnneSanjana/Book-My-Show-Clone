import React from "react";
import MovieHero from "../components/MovieHero/moviehero.component";
import {SiBookmyshow} from "react-icons/si";

export const launchRazorPay = () => {
    let options = {
        key: "rzp_test_ejCocVFGjaRupj",
        amount: 199*100 ,
        currency: "INR",
        name: "Book My Show Clone",
        description: "Movie Purchase on rent",
        image:"https://icon2.cleanpng.com/20180713/hiv/kisspng-core-drilling-supplies-pty-ltd-web-design-paintles-bookmyshow-5b4870efc5be60.95697054153147415981.jpg",
        handler: () => {
            alert("Payment Done");
        },
        theme: {color: "#F84464"}
    };
    let rzp = new window.Razorpay(options);
    rzp.open();
}

export const launchRazorPay1 = () => {
    let options = {
        key: "rzp_test_ejCocVFGjaRupj",
        amount: 99*100 ,
        currency: "INR",
        name: "Book My Show Clone",
        description: "Movie Purchase on rent",
        image:"https://icon2.cleanpng.com/20180713/hiv/kisspng-core-drilling-supplies-pty-ltd-web-design-paintles-bookmyshow-5b4870efc5be60.95697054153147415981.jpg",
        handler: () => {
            alert("Payment Done");
        },
        theme: {color: "#F84464"}
    };
    let rzp = new window.Razorpay(options);
    rzp.open();
}

const MoviePage = () => {
    return (
        <>
        <MovieHero />
        <div className="my-10 conatiner w-3/5 ml-40">
            <div className="flex flex-col items-start gap-2">
                <h1 className="font-bold text-2xl text-black">About the movie</h1>
                <p>Set in the fictional present, an aging King invites disaster when he abdicates to his corrupt, toadying daughters and rejects his loving and honest one.</p>
            </div>
            <div className="my-8">
                <hr/>
            </div>

            <div>
                <h1 className="font-bold text-2xl text-black gap-2 pb-4">Applicable Offers</h1> 
                <div className="flex items-start gap-1 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md w-1/2 px-3 py-2">
                    <div className="flex align-top pt-1">
                    <SiBookmyshow size={22} color="red"/>
                    </div>
                  <div className="flex flex-col items-start">
                    <h3 className="text-lg text-black">Filmy pass</h3>
                    <p className="text-gray-600">Get Rs.75* off on 3 movies you buy/rent on stream. Buy Filmy pass @Rs.99</p>
                  </div>
                </div>    
            </div>
            <div className="my-8">
                <hr/>
            </div>

            {/* Cast */}
            <div >
                <h1 className="font-bold text-2xl text-black">Cast</h1>
                <br/>
                <div className="flex flex-row  gap-8">
                <div >
                <img src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/anthony-hopkins-iein001166-24-03-2017-12-37-05.jpg"
                alt="anthony hopkins" className="w-36 rounded-full"/>
                <h3 className="w-2/3 pl-10 py-1.5 ">Anthony Hopkins</h3>
                <p className="pl-10 text-gray-600">Actor</p>
                </div>
    
                <div>
                <img src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/emma-thompson-648-24-03-2017-17-29-22.jpg"
                alt="emma thompson" className="w-36 rounded-full"/>
                <h3 className="w-2/3 pl-10 py-1.5 ">Emma Thompson</h3>
                <p className="pl-10 text-gray-600">Actor</p>
                </div>
                </div>      
            </div>
            <div className="my-8">
                <hr/>
            </div>
            {/* Crew */}
            <div>
                <h1 className="font-bold text-2xl text-black">Crew</h1>
                <br/>
                <div>
                  <img src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/richard-eyre-2030943-1695290446.jpg"
                  alt="richard eyre" className="w-36 rounded-full"/>
                  <h3 className="w-1/2 pl-8 py-1.5 ">Richard Eyre</h3>
                  <p className="pl-10 text-gray-600">Director</p>
                </div>  
            </div>
            <div className="my-8">
                <hr/>
            </div>

        </div>
        </>
    )
}

export default MoviePage;