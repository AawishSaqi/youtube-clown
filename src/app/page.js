'use client'
import { useEffect } from 'react';
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
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // disable scroll
    return () => document.body.style.overflow = 'auto'; // restore scroll
  }, []);
   const [menucon , setMenuCon] = useState(false)
   const [videos , setVideos] = useState([])



   function handlevid (data){
    setVideos(data)
   }


   function handlemenu (data) {
    setMenuCon(prev => !prev);
   }

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
      <div className='z-10 xl:w-[99%] md:w-[99.4%] xl:h-30 md:h-27 fixed backdrop-blur   bg-black/7'></div>
      <div className='z-20 w-[100%] sticky '>
        <Navbar senddata={handlemenu} menucon={menucon}/>
      </div>
      <div className='flex h-screen'>
        <div className={`z-50 ${styles.wrapper} ${menucon===true? 'xl:w-[17.8%] md:absolute xl:sticky md:w-[31%] md:top-11  md:bg-[#121111] xl:bg-transparent': 'md:hidden xl:block xl:w-max'}`}>
          <Sidebar menucon={menucon} handlevid={handlevid} />
        </div>
        <div className={` xl:pr-7  ${styles.heroScroll}  ${menucon===true? 'xl:w-[83.3%]': 'xl:w-[96%] md:w-full'}`}>
            <div className={`z-10  scrollbar-hide overflow-x-auto fixed xl:top-10 md:top-14     xl:pt-7 md:pt-3 md:pb-3 xl:pb-9 md:w-[94%] md:left-6
                ${menucon===true?'xl:w-[77.4%] xl:left-[265px] ':'xl:w-[89.7%]  xl:left-[95px] '} `}>
              <Categories handlevid={handlevid} />
            </div> 
            <div className='z-0 w-full xl:pt-21  md:pt-21 xl:pl-[9px] xl:pl-[8px] '>
              <div className={` md:px-2 xl:px-0 md:pb-4 xl:p-0 `}>
                  <VideoCard  menucon={menucon} videos={videos}/>
              </div>
              <div className='z-0  md:px-5 xl:p-0'>
                <Reels menucon={menucon}/>  
              </div>
              <div className='md:px-5 md:pt-10 xl:p-0'>
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









{/* <div className={` xl:pt-2 overflow-y-auto ${menucon===true? 'xl:w-[19%] ': 'xl:w-[5%]'}`}>
  <Sidebar/>
</div>
<div className={` xl:pt-2 overflow-y-auto`}>
  <div className='w-[100%] '>
    <Navbar senddata={handlemenu}/>
  </div>
  <div className={` ${menucon===true? 'w-[81%]': 'w-[95%]'}`}>
    <div className={`xl:pr-4 xl:pl-[22.9px] xl:pt-5 xl:pb-9`}>
      <Categories/>
    </div>
    <div className='w-full xl:pr-4'>
      <div className={` xl:pl-[22.9px]`}>
          <VideoCard  menucon={menucon}
          />
    </div>
    <div className='xl:pl-[22.9px]'>
      <Reels/>  
    </div>
    <div className='xl:pl-[22.9px] xl:mt-20'>
      <VideoCard2 menucon={menucon}/>
    </div>
    </div>
  </div>
</div> */}
























// export default function Home() {
//   const [menucon , setMenuCon] = useState(false)

//   function handlemenu (data) {
//     setMenuCon(data)
//   }

  // const videos = [
  //   {
  //     videoId: 'nTmaCJ0yDMw',
  //     title: 'Saiyaara Title Song | Ahaan, Aneet | Tanishk Bagchi, Faheem Abdullah, Arslan| Irshad Kamil',
  //     channel:'YRF',
  //     views: '67.5M views',
  //     date: '2 days ago'
  //   },
  //   {
  //     videoId: 'fvMBeY2g3hg',
  //     title: 'Rajab Butt Videos Viral Full EXPOSED ✌️',
  //     channel:'KashiKing Roast',
  //     views: '138k views',
  //     date: '1 week ago'
  //   },
  //   {
  //     videoId: 'RzE7g8VJi-A',
  //     title: 'Sher Episode 21 | Danish Taimoor | Sarah Khan | 30 July 2025 [ENG SUB] ARY Digital Drama',
  //     channel:'ARY Digital HD ',
  //     views: '16M views',
  //     date: '1 month ago'
  //   }
  // ];
//         const videos2 = [
//     {
//       videoId: 'Cu3002rwCpg',
//       title: 'Abhijeet और Daya को Dr. Tarika ने खिलाया अपने हाथ से बना कर खाना | CID I New Episode 2025',
//       channel:'Daily TV Serials',
//       views: '67.5M views',
//       date: '2 days ago'
//     },
//     {
//       videoId: '-qzE9_748_M',
//       title: 'Vidyut और CID मिलकर क्या ढूंढ पाएंगे Purvi को? | CID | सी.आई.डी. | 3 Oct 2024',
//       channel:'Sony Wah ',
//       views: '16M views',
//       date: '1 month ago'
//     },
//     {
//       videoId: 'RdQojF5l-W4',
//       title: 'Massive Flood & Rain - Monsoon Heavy Rains Alert - Destruction In Gilgit Baltistan - 6am Headlines',
//       channel:'24 News Hd',
//       views: '138k views',
//       date: '1 week ago'
//     },
//         {
//       videoId: 'b4vFKr8q7_M',
//       title: 'Sad News At Late Night | Heavy Rains Cause Urban Flooding, Deaths Reported | 04 AM Headlines',
//       channel:'Dunya News',
//       views: '138k views',
//       date: '1 week ago'
//     }
//   ];


//   return (
//     <div className='w-[100%] relative flex flex-col'>
//       {/* ////////////////////////////TOP BLUR///////////////////////////////// */}
//       {/* <div className='w-full h-40 z-[10]   backdrop-blur-xl bg-black/50  fixed top-0'></div> */}
//       {/* ////////////////////////SIDEBAR + NAVBAR/////////////////////////////////////// */}
//       <div className=''>
//         <Sidebar senddata={handlemenu}/>
//       </div>
//       {/* ////////////////////////////////////Categories///////////////////////////////////// */}
//       <div className={` fixed  xl:top-23   ${menucon=== true? 'w-[79.5%] xl:left-83  ':'w-[91%] xl:left-33'}`}>
//         <Categories/>
//       </div>
//       {/* ///////////////////////Hero//////////////////////// */}
//       <div className=''>
        //  <div className={` flex items-start xl:mt-46   2xl:gap-6  ${menucon===true? 'w-[81.5%] 2xl:pr-8 justify-self-end':'w-[100%] 2xl:pr-8 justify-end'}`}>
        //    {videos.map((video) => (
        //      <VideoCard 
        //        menucon={menucon}
        //        key={video.videoId}
        //        {...video}
        //      />
        //    ))}
        //  </div>

//           <Reels menucon={menucon}/>
          
//           {/* <div className={`grid grid-cols-3 items-start 2xl:gap-6 xl:gap-6  justify-self-end   xl:pr-8 ${menucon===true? 'w-[81.5%] ':'w-[92.2%]'}`}>
//             {videos2.map((video2) => (
//               <VideoCard2 
//                 menucon={menucon}
//                 key={video2.videoId}
//                 {...video2}
//               />
//           ))}
//         </div> */}
//       </div>

//     </div>
//   );
// }
