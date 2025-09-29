"use client"
// import VideoCard from "./videoCard";
// import Reels from "./reels";
// import VideoCard2 from "./video2";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faL } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from 'react';

export default function Try({menucon,videos = [],searchdata=[]}){

    const firstThree = videos.slice(0,3);
    const nextreels = videos.slice(3,9);
    const secondvid = videos.slice(9);

    const [apiVideos, setApiVideos] = useState([])
    const [apiReels, setApiReels] = useState([])
/////////////////////////FOR REEEELS SECTION//////////////////////
    //   const reels = [
    //     { Id: 'S-9MuPhnB4g', title:'The man found newly hatched quail eggs abandoned on the road and then...', view: '2 months ago' },
    //     { Id: 'omyIsw6NoTw', title:'Thor Vs Ironman in sakaar | #shorts', view: '1 year ago' },
    //     { Id: '-aSemdpz6CA', title:'Demon ne bachaya Do Hee ko❤️my demon kdrama couple love whatsapp status', view: '1 hour ago' },
    //     { Id: 'oJJ0ctSFlmU', title:'pitbull dog Version ☠️', view: '2 days ago' },
    //     { Id: '5QtOcSUxO6E', title:'잃어버린 땅콩을 만들어 주었더니 고양이 반응 #cat #고양이 #고양이일상 #funny', view: '3 hours ago' },
    //   ];
  
  
    const [hoveredId, setHoveredId] = useState(null);
    const [ismd , setIsmd] = useState(false);
    const [issm, setIssm] = useState(false)
    const [ismbl , setIsMbl] = useState(false)
    const [issmall, setIsSmall] = useState(false)
    const [isxs , setIsxs] = useState(false)
    const [isxl, setIsxl] = useState(false)
  
  
    useEffect(()=> {
      const handlereelscount = () => 
          {setIsmd(window.innerWidth <= 1000)
            setIssm(window.innerWidth <= 768)
            setIsMbl(window.innerWidth <= 640)
            setIsSmall(window.innerWidth<= 569)
            setIsxs(window.innerWidth <= 500)
            setIsxl(window.innerWidth <=1580)
            
            
          };
      handlereelscount();
      window.addEventListener('resize', handlereelscount);
      return()=> window.removeEventListener('resize', handlereelscount);
  
    }, []);

    useEffect(()=> {
        if(searchdata.length > 0){
            const vids = [];
            const reels = [];

        searchdata.forEach((video) => {
            const videoId = video.id?.videoId;
            if(!videoId) return;

            const title = video.snippet?.title || "";
            const description = video.snippet?.description || "";


            const isReel =
            title.toLowerCase().includes("#shorts") ||
            title.toLowerCase().includes("# shorts") ||
            title.toLowerCase().includes("#") ||
            description.toLowerCase().includes("#shorts") ||
            description.toLowerCase().includes("# shorts") ||
            description.toLowerCase().includes("#");

            if(isReel){
                reels.push(video)
            }else{
                vids.push(video)
            }
        })
        setApiReels(reels)
        setApiVideos(vids)

        
        }else{
            setApiReels([])
            setApiVideos([])
        }
    }, [searchdata])

    console.log(apiReels)

    /////////////////////////////FOR VIDEO 1 SECTION/////////////////////////
        const [hovered, setHovered] = useState(null);
    ///////////////////////////FOR VIDEO 2 SECTION //////////////////////////
    
  
  
  return(
    <div>
       <div className={`id="video-list" className="w-[100%]  flex flex-col sm:flex-wrap sm:flex-row justify-start gap-3 w-full `}>
          {/* <VideoCard  menucon={menucon} videos={videos} searchdata={searchdata} /> */}
            {(apiVideos.length > 0 ? apiVideos:firstThree).map((video,index) => {
                 // Case 1: API data
                const isApiData = !!video.snippet;

                const videoId = isApiData ? video.id.videoId : video.Id;
                if (!videoId) return null;

                const title = isApiData ? video.snippet.title : video.title;
                const channel = isApiData ? video.snippet.channelTitle : video.channel;
                const date = isApiData
                    ? new Date(video.snippet.publishedAt).toDateString()
                    : video.views; // your JSON stores "3 years ago" in views

                const thumbnail = isApiData
                    ? video.snippet.thumbnails.medium.url
                    : `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                return(
                    <div key={videoId || index} onClick={() => window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank")}
                        onMouseEnter={() => setHovered(videoId)}
                        onMouseLeave={() => setHovered(null)}
                    className={`cursor-pointer h-max md:w-[32.2%] line-clamp-1     sm:w-[48.9%] w-[100%] pb-3 xl:pb-1 ${menucon===true? 'lg:w-[32.3%] xl:w-[32.5%] ': 'xl:w-[32.6%] lg:w-[32.43%] '}`}
                    >
                        <div>
                            <div  className="aspect-video rounded-2xl overflow-hidden cursor-pointer" 
                                onClick={() => window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank")}>
                                {hovered === videoId ? (
                                    <iframe
                                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1&loop=1&playlist=${videoId}`}
                                    className={`h-full w-full`}
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                    />
                                ) : (
                                    <Image
                                        src={thumbnail}
                                        width={2000}
                                        height={1800}
                                        priority
                                        alt={title}
                                        className={` object-cover h-full w-full`}
                                    />
                                )}
                            </div>

                            <div className={`flex pt-3 justify-between w-full`}>
                                  {/* ${menucon===true? 'xl:w-[355px]': 'xl:w-[405px] '} */}
                                <div className="flex justify-between sm:leading-none">
                                    <div className={`flex xl:mr-1 mr-2  justify-center items-center rounded-full bg-yellow-500   h-max`}>
                                        <h3 className={` text-black font-semibold uppercase w-7 h-7 flex justify-center items-center  ${menucon===true? '2xl:text-lg  ':'2xl:text-2xl xl:text-lg'}`}>a</h3>
                                    </div>
                                    <div className={`full-w-max '}`}>
                                        <h1 className={`line-clamp-2 leading-5 opacity-95 xl:text-md `}>{title}</h1>
                                        <h1 className={`xl:text-sm sm:text-xs text-sm opacity-50`}>{channel}</h1>

                                        <div className={`flex xl:gap-7 gap-3 xl:text-sm sm:text-xs text-sm opacity-50`}>
                                            {/* <h1>{video.views}</h1> */}
                                            <h1>{date}</h1>
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
                    
                {(apiReels.length > 0 ? apiReels:nextreels).slice(0,isxs ? 1:issmall? 2: ismbl?3: issm? 3: ismd ? 4 : isxl ? 5: 6).map((reel, index) => {
                    // const thumbnail = `https://img.youtube.com/vi/${reel.Id}/maxresdefault.jpg`;
                    const isApiData = !!reel.snippet;

                    const reelId = isApiData? reel.Id?.videoId : reel.Id;
                    console.log(apiReels);
                    if(!reelId) return null;

                    const title = isApiData ? reel.snippet.title : reel.title;
                    const date = isApiData ? new Date(reel.snippet.publishedAt).toDateString() : reel.date;
                    const thumbnail =  isApiData ? reel.snippet.thumbnail?.medium?.url : `https://img.youtube.com/vi/${reelId}/maxresdefault.jpg`;
        
        
                    return (
                    <div
                    key={reel.Id}
                    onMouseEnter={()=>setHoveredId(reel.Id)}
                        onMouseLeave={() => setHoveredId(null)}
                        onClick={() => window.open(`https://www.youtube.com/shorts/${reelId, index}`, '_blank')}
                        className={`h-full pb-3 ${menucon===true? 'w-full ':'w-full xl:w-[20%] h-[500px]'}`}
                        style={{ pointerEvents: 'auto' }}>
        
                        <div className={`flex flex-col gap-2`}>
        
                            <div className={`relative  aspect-[9/16] rounded-2xl overflow-hidden ${menucon===true? '':''}`}>
                            {hoveredId === reelId ? (
                                <iframe
                                src={`https://www.youtube.com/embed/${reelId}?autoplay=1&mute=1&controls=1&loop=1&playlist=${reelId}`}
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                className={` pointer-events-none w-full h-full`}
                                />
                            ) : (
                                <Image
                                src={thumbnail}
                                alt='reels'
                                priority
                                width={15000}
                                height={10000}
                                className={`  object-cover w-full h-full`}
                                />
                            )}
                            </div>
        
                            <div className='px-2 '>
                              <h1 className=' line-clamp-2'>{title}</h1>
                              <p className="text-sm text-gray-500 mt-1">{date}</p>
                            </div>
                            
                        </div>
                    </div>
                    );
                })}
                </div>
            </div>
        </div>
        <div className='  '>
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