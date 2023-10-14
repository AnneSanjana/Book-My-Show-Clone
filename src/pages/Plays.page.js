import React from "react";
import Poster from "../components/Poster/poster.component";
import PlaysFilter from "../components/PlaysFilter/playsfilter.component";

const PlaysPage = () => {
    return(
        <>
        <div className="container mx-auto px-4  bg-stone-100">
            <div className="w-full lg:flex lg:flex-row-reverse gap-2">
                <div className="lg:w-8/12">
                <h2 className="font-bold text-2xl my-4 pl-6">Plays in Visakhapatnam</h2>
                <div className="flex flex-wrap lg:pr-10">
                <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
                    <Poster
                    src= "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCA4IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00369298-hjjtvcnlng-portrait.jpg"
                    alt= "buddhey ne maari"
                    title= "Buddhey Ne Maari Century"
                    genre= "Hindi ₹250 onwards" 
                    />
                </div>
                <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
                    <Poster
                    src= "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCA1IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00369076-marqpqknej-portrait.jpg"
                    alt= "kaagaz ke gubbare"
                    title= "Kaagaz Ke Gubbare"
                    genre= "Hindi/Urdu ₹250 onwards"
                    />
                </div>
                <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
                    <Poster
                    src= "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCA5IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00369325-ulwtyhnrmj-portrait.jpg"
                    alt= "Love real/reel"
                    title= "Love Real/Reel"
                    genre= "English/Hindi/Urdu ₹250 onwards"
                    />
                </div>
                <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
                    <Poster
                    src= "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00369097-munlgvquju-portrait.jpg"
                    alt= "words have been uttered"
                    title= "Words Have Been Uttered"
                    genre= "English/Hindi/Urdu/Punjabi ₹ 1000" 
                    />
                </div>
                <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
                    <Poster
                    src= "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxNSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00370198-smwgyhhrbv-portrait.jpg"
                    alt= "letter"
                    title= "Letter"
                    genre= "₹500"
                    />
                </div>
                <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
                    <Poster
                    src= "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCA2IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00369293-arzjccbfkz-portrait.jpg"
                    alt= "kutta aurat aadmi"
                    title= "Kutta Aurat Aadmi"
                    genre= "Hindi ₹250 onwards"
                    />
                </div>
                <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
                    <Poster
                    src= "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCA4IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00369314-cagpambrcx-portrait.jpg"
                    alt= "sunil shabag"
                    title= "Master Class: Sunil Shanbag"
                    genre= "Free"
                    />
                </div>
                <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4 ">
                    <Poster
                    src= "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCA4IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00370056-khgegcnvvw-portrait.jpg"
                    alt= "kishkinda kanda"
                    title= "Kishkinda Kanda"
                    genre= "Telugu ₹250 onwards"
                    />
                </div>
                </div>
                </div>
                <div className="lg:w-1/5">
                    <h2 className="font-bold text-2xl my-4">Filters</h2>
                    
                    
                    <PlaysFilter title="Date" tags={["Today","Tomorrow","This Weekend"]} />
                    <div className="pb-2 "> </div>
                    <PlaysFilter title="Languages" tags={["English","Hindi","Telugu","Urdu","Punjabi"]}/>
                    <div className="pb-2"> </div>
                    <PlaysFilter title="Categories" tags={["Theatre","Storytelling"]}/>
                    <div className="pb-2"> </div>
                    <PlaysFilter title="Genre" tags={["Drama","Comedy","Adaptation","Contemporary","Musical","Mythological"]}/>
                    <div className="pb-2"> </div>
                    <PlaysFilter title="More Filters" tags={["Outdoor Events","Fast Filling"]}/>
                    <div className="pb-2"> </div>
                    <PlaysFilter title="Price" tags={["Free","0-500","501-2000","Above 2000"]}/>
                    <div className="pb-2"> </div>
                    <div className="border-2 border-red-500 px-2  text-red-500 rounded py-1 hover:cursor-pointer">
                        <span className="px-16">Browse By Venues</span>
                    </div>
                    
                </div>
                
                
            </div>
        </div>
        </>
    )
}

export default PlaysPage;