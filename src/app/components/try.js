"use client"
// import VideoCard from "./videoCard";
// import Reels from "./reels";
// import VideoCard2 from "./video2";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

export default function Try({menucon,videos,searchdata}){

    const firstThree = videos.slice(0,3)
    const nextreels = videos.slice(3,9)
    const secondvid = videos.slice(9)
/////////////////////////FOR REEEELS SECTION//////////////////////
      const reels = [
        { Id: 'S-9MuPhnB4g', title:'The man found newly hatched quail eggs abandoned on the road and then...', view: '2 months ago' },
        { Id: 'omyIsw6NoTw', title:'Thor Vs Ironman in sakaar | #shorts', view: '1 year ago' },
        { Id: '-aSemdpz6CA', title:'Demon ne bachaya Do Hee ko❤️my demon kdrama couple love whatsapp status', view: '1 hour ago' },
        { Id: 'oJJ0ctSFlmU', title:'pitbull dog Version ☠️', view: '2 days ago' },
        { Id: '5QtOcSUxO6E', title:'잃어버린 땅콩을 만들어 주었더니 고양이 반응 #cat #고양이 #고양이일상 #funny', view: '3 hours ago' },
      ];
  
  
    const [hoveredId, setHoveredId] = useState(null);
    const [ismd , setIsmd] = useState(false);
    const [issm, setIssm] = useState(false)
    const [ismbl , setIsMbl] = useState(false)
    const [issmall, setIsSmall] = useState(false)
  
  
    useEffect(()=> {
      const handlereelscount = () => 
          {setIsmd(window.innerWidth <= 1000)
            setIssm(window.innerWidth <= 768)
            setIsMbl(window.innerWidth <= 640)
            setIsSmall(window.innerWidth<= 569)
          };
      handlereelscount();
      window.addEventListener('resize', handlereelscount);
      return()=> window.removeEventListener('resize', handlereelscount);
  
    }, []);



    /////////////////////////////FOR VIDEO 1 SECTION/////////////////////////
        const [hovered, setHovered] = useState(null);
    ///////////////////////////FOR VIDEO 2 SECTION //////////////////////////
    
  
  
  return(
    <div>
       <div className={`id="video-list" className="w-[100%] line-clamp-1 flex flex-col sm:flex-wrap sm:flex-row justify-start gap-3 w-full `}>
          {/* <VideoCard  menucon={menucon} videos={videos} searchdata={searchdata} /> */}
            {(searchdata.length > 0 ? searchdata:firstThree).map((video) => {
            const thumbnail = `https://img.youtube.com/vi/${video.Id}/hqdefault.jpg`;
                return(
                    <div key={video.Id} onClick={() => window.open(`https://www.youtube.com/watch?v=${video.Id}`, "_blank")}
                        onMouseEnter={() => setHovered(video.Id)}
                        onMouseLeave={() => setHovered(null)}
                    className={`cursor-pointer h-max md:w-[32.2%]    sm:w-[48.9%] w-[100%] pb-3 xl:pb-1 ${menucon===true? 'lg:w-[32.3%] xl:w-[32.5%] ': 'xl:w-[32.6%] lg:w-[32.43%] '}`}
                    >
                        <div>
                            <div  className="aspect-video rounded-2xl overflow-hidden cursor-pointer" 
                                onClick={() => window.open(`https://www.youtube.com/watch?v=${video.Id}`, "_blank")}>
                                {hovered === video.Id ? (
                                    <iframe
                                    src={`https://www.youtube.com/embed/${video.Id}?autoplay=1&mute=1&controls=1&loop=1&playlist=${video.Id}`}
                                    className={`h-full w-full`}
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                    />
                                ) : (
                                    <Image
                                        src={thumbnail}
                                        width={2000}
                                        height={1800}
                                        alt={video.title}
                                        className={` object-cover h-full w-full`}
                                    />
                                )}
                            </div>

                            <div className={`flex pt-3 justify-between w-full`}>
                                  {/* ${menucon===true? 'xl:w-[355px]': 'xl:w-[405px] '} */}
                                <div className="flex justify-between sm:leading-none">
                                    <div className={`flex xl:mr-1 mr-2  justify-center items-center rounded-full bg-yellow-500   h-max`}>
                                        <h3 className={` text-black font-semibold uppercase w-7 h-7 flex justify-center items-center  ${menucon===true? '2xl:text-lg  ':'2xl:text-2xl xl:text-lg'}`}>{video.channel[0]}</h3>
                                    </div>
                                    <div className={`full-w-max '}`}>
                                        <h1 className={`line-clamp-2 leading-5 opacity-95 xl:text-md `}>{video.title}</h1>
                                        <h1 className={`xl:text-sm sm:text-xs text-sm opacity-50`}>{video.channel}</h1>

                                        <div className={`flex xl:gap-7 gap-3 xl:text-sm sm:text-xs text-sm opacity-50`}>
                                            <h1>{video.views}</h1>
                                            <h1>{video.date}</h1>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <FontAwesomeIcon className="2xl:text-2xl" icon={faEllipsisV} />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                )
            })}
        </div>
        <div className='z-0 '>
          {/* <Reels menucon={menucon}/>   */}
            <div className={`flex flex-col  gap-6 w-full xl:mt-5 ${menucon===true? '':''}`}>
                <div className='flex xl:gap-3 xl:text-xl font-semibold  items-center'>
                    <img src='/images/shorts.png' alt='shorts' className='w-6 h-max'/>
                    <h1>Shorts</h1>
                </div>
        
                <div className=" flex gap-5 ">
                {nextreels.slice(0,issmall? 2: ismbl?3: issm? 3: ismd ? 4 : 5).map((reel) => {
                    const thumbnail = `https://img.youtube.com/vi/${reel.Id}/maxresdefault.jpg`;
        
        
                    return (
                    <div
                    key={reel.Id}
                    onMouseEnter={()=>setHoveredId(reel.Id)}
                        onMouseLeave={() => setHoveredId(null)}
                        onClick={() => window.open(`https://www.youtube.com/shorts/${reel.Id}`, '_blank')}
                        className={`h-full pb-3 ${menucon===true? 'w-full ':'w-full h-[500px]'}`}
                        style={{ pointerEvents: 'auto' }}>
        
                        <div className='flex flex-col gap-2'>
        
                            <div className={`relative  aspect-[9/16] rounded-2xl overflow-hidden ${menucon===true? '':''}`}>
                            {hoveredId === reel.Id ? (
                                <iframe
                                src={`https://www.youtube.com/embed/${reel.Id}?autoplay=1&mute=1&controls=1&loop=1&playlist=${reel.Id}`}
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                className={` pointer-events-none w-full h-full`}
                                />
                            ) : (
                                <Image
                                src={thumbnail}
                                alt='reels'
                                width={1300}
                                height={500}
                                className={`  object-cover w-full h-full`}
                                />
                            )}
                            </div>
        
                            <div className='px-2 '>
                              <h1 className=' line-clamp-2'>{reel.title}</h1>
                              <p className="text-sm text-gray-500 mt-1">{reel.view}</p>
                            </div>
                            
                        </div>
                    </div>
                    );
                })}
                </div>
            </div>
        </div>
        <div className='   md:pt-15 sm:pt-7 xl:pt-10   xl:p-0'>
          {/* <VideoCard2 menucon={menucon}/> */}
            <div  className="flex flex-wrap justify-start gap-3 w-full ">
              {secondvid.map((video) => {
              const thumbnail = `https://img.youtube.com/vi/${video.Id}/hqdefault.jpg`;
                  return(
                      <div key={video.Id} onClick={() => window.open(`https://www.youtube.com/watch?v=${video.Id}`, "_blank")}
                          onMouseEnter={() => setHovered(video.Id)}
                          onMouseLeave={() => setHovered(null)}
                      className={`cursor-pointer h-max xl:mb-3 xl:pb-2 md:pb-4 pb-3 md:w-[32%]  sm:w-[49%] w-full ${menucon===true? 'xl:w-[32.5%] lg:w-[32.3%] ': 'xl:w-[32.6%] lg:w-[32.4%]'}`}
                      >
                          <div>
                              <div  className="aspect-video rounded-2xl overflow-hidden cursor-pointer" 
                                  onClick={() => window.open(`https://www.youtube.com/watch?v=${video.Id}`, "_blank")}>
                                  {hovered === video.Id ? (
                                      <iframe
                                      src={`https://www.youtube.com/embed/${video.Id}?autoplay=1&mute=1&controls=1&loop=1&playlist=${video.Id}`}
                                      className={`h-full w-full`}
                                      allow="autoplay; encrypted-media"
                                      allowFullScreen
                                      />
                                  ) : (
                                      <Image
                                          src={thumbnail}
                                          width={1200}
                                          height={900}
                                          alt={video.title}
                                          className={` object-cover h-full w-full`}
                                      />
                                  )}
                              </div>

                              <div className={`flex pt-3 justify-between ${menucon===true? 'xl:w-[350px]': 'xl:w-[405px] '}`}>
                                  <div className="flex justify-between">
                                      <div className={`xl:mr-1 mr-2 h-max justify-center items-center rounded-full bg-yellow-500 `}>
                                          <h3 className={`flex justify-center items-center w-7 h-7 text-black font-semibold  ${menucon===true? '2xl:text-lg  ':'2xl:text-2xl xl:text-lg'}`}>{video.channel[0]}</h3>
                                      </div>
                                      <div className={`full-w-max '}`}>
                                          <h1 className={`line-clamp-2 leading-5 opacity-95 xl:text-md `}>{video.title}</h1>
                                          <h1 className={`xl:text-sm text-xs opacity-50`}>{video.channel}</h1>

                                          <div className={`flex xl:gap-7 xl:gap-3 xl:text-sm sm:text-xs text-sm opacity-50`}>
                                              <h1>{video.views}</h1>
                                              <h1>{video.date}</h1>
                                          </div>
                                      </div>
                                  </div>
                                  <div>
                                      <FontAwesomeIcon className="2xl:text-2xl" icon={faEllipsisV} />
                                  </div>
                              </div>
                          </div>
                          
                      </div>
                  )
              })}
            </div>
        </div>
    </div>
  )
}