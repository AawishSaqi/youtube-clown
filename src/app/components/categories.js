// import Sidebar from "./sidebar";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import {Swiper, SwiperSlide} from "swiper/react";
// import { Navigation} from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
'use client';
import '../globals.css';
import React, { useState, useEffect } from "react";

export default function Categories({handlevid}) {
    const [activeCategory, setActiveCategory]= useState("all")
    // const [videos, setVideos] = useState('')

        const categories = ["all", "music", "pakdrama", "Mixes", "Indian", "Rythem", "News", "Reverberation",
        "Nusrat", "Dramedy", "Debugging", "Live","Melodies", "Animated Films", "Birds", "Recently",
        "Watched" , "New","Trending", "Popular","Comedy", "Entertainment", "Movies", "TV Shows", 
        "Gaming", "Sports", "Learning", "Technology", "Travel", "Food", "Fitness", "Lifestyle"]

  // Load JSON when category changes
  useEffect(() => {
    fetch(`/data/${activeCategory}.json`)
      .then((response) => response.json())
      .then((data) => handlevid(data))
      .catch((err) => console.error("Error loading videos:", err));
  }, [activeCategory]);
    
  // function categorysetting (){
  //     setActiveCategory(category);
  //     findcategory(category);
  // }

    return(
      <div className=" flex gap-4">
            {categories.map((category) =>{
                return(
                <button
                key={category}
                onClick={()=> setActiveCategory(category)}
                className={`min-w-max px-[10px] xl:h-8 md:h-8 xl:text-sm md:text-sm font-semibold  cursor-pointer xl:rounded-lg md:rounded-lg  hover:bg-white hover:text-black ${activeCategory=== category? 'bg-white text-black': 'text-white bg-[#282828]'}`}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
                )
            })}
        </div>

    )
}