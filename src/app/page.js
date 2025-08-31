'use client'
import { use, useEffect } from 'react';
import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import Categories from './components/categories';
import VideoCard from './components/videoCard';
import Reels from './components/reels';
import VideoCard2 from './components/video2';
import styles from './wrapper.module.css';
import Try from './components/try';


export default function Home(){
  // useEffect(() => {
  //   document.body.style.overflow = 'hidden'; // disable scroll
  //   return () => document.body.style.overflow = 'auto'; // restore scroll
  // }, []);

   const [menucon , setMenuCon] = useState(false)
   const [videos , setVideos] = useState([])
   const [searchdata , setSearchData] = useState('')
//////////////////get data from search///////////////////
  function handleSearching (data) {
    setSearchData(data)
  }


   function handlevid (data){
    setVideos(data)
   }


   function handlemenu (data) {
    setMenuCon(prev => !prev);
   }
      ////////////////////////handle key down ctrl +  B to minimize sidebar/////////////////////////////////////
     useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key.toLowerCase() === 'b') {
        e.preventDefault(); // stop browser shortcuts
          setMenuCon(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // cleanup
    return () => window.removeEventListener('keydown', handleKeyDown);

  }, []);
  return(
    <div className={`w-full h-full  relative   `}>
        {/* ////////////////////////////////////navbar and cat  background///////////////////////////////////// */}
        <div className={`z-10 xl:w-[99%] md:w-[98.8%] sm:w-[98.4%] xl:h-30 md:h-27 sm:h-26 h-24 w-full  fixed top-0 backdrop-blur   bg-black/7 transition-transform duration-300 `}></div>
                    {/* ///////////////////////////Navbar//////////////////////////// */}
        <div className={`z-20 w-[100%] fixed lg:sticky  top-0 transition-transform duration-300 `}>
          <Navbar senddata={handlemenu} menucon={menucon} handleSearching={handleSearching} />
        </div>
        
      <div className='flex h-screen'>
        <div className={`z-50 hidden sm:block ${styles.wrapper} ${menucon===true? 'xl:w-[17.8%] lg:w-[16%] sm:absolute lg:sticky  sm:w-[31%] md:w-[26%] md:top-13 sm:top-13 sm:bg-[#121111] lg:bg-transparent': 'sm:hidden  lg:block  lg:w-max'}`}>
          <Sidebar menucon={menucon} handlevid={handlevid} />
        </div>

        <div className={`${styles.wrapper} pb-13  ${menucon===true? 'xl:w-[83.3%] lg:w-[84%]': 'xl:w-[96%] lg:w-[97%] md:w-full'}`}>

             <div className={`z-10  fixed xl:top-10 md:top-14 sm:top-16 top-12  md:w-[98%]  sm:w-[97.5%] w-[98%]
                ${menucon===true?'xl:w-[80.9%] lg:w-[82.4%] ':'xl:w-[93.2%] lg:w-[92.3%] '} `}>
              <Categories handlevid={handlevid}  menucon={menucon} handleSearching={handleSearching}/>
            </div> 

            <div className='z-0  w-full flex flex-col    md:pt-29 sm:pt-30 lg:pt-19 pt-30 xl:pl-[9px]  px-4 lg:pr-4  '>
              {/* <div className={` `}>
                  <VideoCard  menucon={menucon} videos={videos} searchdata={searchdata} />
              </div>
              <div className='z-0 '>
                <Reels menucon={menucon}/>  
              </div>
              <div className='   md:pt-15 sm:pt-7 xl:pt-10   xl:p-0'>
                <VideoCard2 menucon={menucon}/>
              </div> */}

            <div className=' flex justify-self-center'>
              <Try menucon={menucon} videos={videos} searchdata={searchdata}/>
            </div>
            </div> 

        </div>
      </div>
     
     
     
    </div>
  )
}

 