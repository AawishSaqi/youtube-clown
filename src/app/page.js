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
// import styles from './hero.module.css';


export default function Home(){
  // useEffect(() => {
  //   document.body.style.overflow = 'hidden'; // disable scroll
  //   return () => document.body.style.overflow = 'auto'; // restore scroll
  // }, []);

   const [menucon , setMenuCon] = useState(false)
   const [videos , setVideos] = useState([])
   const [showHeader , setShowHeader] = useState(true)
   const [lastScrollY, setLastScrollY] = useState(0);

   ///////////////////////////////handle scroll to minimize the navbar and cat////////////////////////  
   useEffect(() => {
    const handlescroll = () => {
      const currentScrollY = window.scrollY;
      setLastScrollY((prev) => {
        if(currentScrollY > prev && currentScrollY > 100){
          setShowHeader(false)
        }else{
          setShowHeader(true)
        }
        return currentScrollY;
      })
    };
    window.addEventListener("scroll", handlescroll);

    return() => window.removeEventListener("scroll", handlescroll)
   },[])



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
    <div className={`w-full h-full scrollbar-y-auto relative  `}>
        {/* ////////////////////////////////////navbar and cat  background///////////////////////////////////// */}
        <div className={`z-10 xl:w-[99%] md:w-[98.8%] sm:w-[98.4%] xl:h-30 md:h-27 sm:h-26 h-28 w-[99%]  fixed top-0 backdrop-blur   bg-black/7 transition-transform duration-300 ${showHeader? 'translate-y-0':'-translate-y-full'}`}></div>
                    {/* ///////////////////////////Navbar//////////////////////////// */}
        <div className={`z-20 w-[100%] fixed xl:sticky  top-0 transition-transform duration-300  ${showHeader? 'translate-y-0':'-translate-y-full'}`}>
          <Navbar senddata={handlemenu} menucon={menucon}/>
        </div>
        
      <div className='flex h-screen'>
        <div className={`z-50 hidden sm:block ${styles.wrapper} ${menucon===true? 'xl:w-[17.8%] sm:absolute xl:sticky  sm:w-[31%] md:top-11 sm:top-13 sm:bg-[#121111] xl:bg-transparent': 'sm:hidden xl:block xl:w-max'}`}>
          <Sidebar menucon={menucon} handlevid={handlevid} />
        </div>
        <div className={` xl:pr-7  ${styles.heroScroll}  ${menucon===true? 'xl:w-[83.3%]': 'xl:w-[96%] md:w-full'}`}>

            <div className={`z-10  fixed xl:top-10 md:top-14 sm:top-16 top-17  md:w-[98%] sm:w-[97.5%] w-[96.5%]
                ${menucon===true?'xl:w-[79.6%]  ':'xl:w-[92.5%]  '} `}>
              <Categories handlevid={handlevid}  menucon={menucon}/>
            </div> 

            <div className='z-0  w-full xl:pt-21  md:pt-29 sm:pt-30 pt-30 xl:pl-[9px] xl:pl-[8px] '>
              <div className={` md:pb-4 sm:pb-3 sm:px-4 px-5 xl:p-0 `}>
                  <VideoCard  menucon={menucon} videos={videos}/>
              </div>
              <div className='z-0 px-4 xl:p-0'>
                <Reels menucon={menucon}/>  
              </div>
              <div className='px-4   md:pt-15 sm:pt-7   xl:p-0'>
                <VideoCard2 menucon={menucon}/>
              </div>
            </div>
            {/* <div>
              <Try/>
            </div> */}
        </div>


      </div>
     
     
     
    </div>
  )
}

