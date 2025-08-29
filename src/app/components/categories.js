'use client';
import '../globals.css';
import React, { useState, useEffect } from "react";

export default function Categories({handlevid}) {
    const [activeCategory, setActiveCategory]= useState("all")
    // const [videos, setVideos] = useState('')

        const categories = ["all", "music", "drama", "Mixes", "Indian", "Rythem", "News", "Reverberation",
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
      <div className={`flex gap-4 xl:pl-8 xl:pt-7 md:py-3 py-2  pl-6 xl:pb-9  scrollbar-hide overflow-x-auto border-b-1 border-[#808080] sm:border-none `}>
            {categories.map((category) =>{
                return(
                <button
                key={category}
                onClick={()=> setActiveCategory(category)}
                className={`min-w-max px-[10px] h-8 text-sm  font-semibold  cursor-pointer rounded-lg  hover:bg-white hover:text-black ${activeCategory=== category? 'bg-white text-black': 'text-white bg-[#282828]'}`}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
                )
            })}
        </div>

    )
}