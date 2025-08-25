'use client';
import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

export default function VideoCard({menucon, videos}) {

    const [hovered, setHovered] = useState(null);

        // const videos = [
        //     {
        //     videoId: 'nTmaCJ0yDMw',
        //     title: 'Marju koi Title Song | Ahaan, Aneet | Tanishk Bagchi, Faheem Abdullah, Arslan| Irshad Kamil',
        //     channel:'YRF',
        //     views: '67.5M views',
        //     date: '2 days ago'
        //     },
        //     {
        //     videoId: 'fvMBeY2g3hg',
        //     title: 'Rajab Butt Videos Viral Full EXPOSED ✌️',
        //     channel:'KashiKing Roast',
        //     views: '138k views',
        //     date: '1 week ago'
        //     },
        //     {
        //     videoId: 'RzE7g8VJi-A',
        //     title: 'Sher Episode 21 | Danish Taimoor | Sarah Khan | 30 July 2025 [ENG SUB] ARY Digital Drama',
        //     channel:'ARY Digital HD ',
        //     views: '16M views',
        //     date: '1 month ago'
        //     }
        // ];


    return(
            <div id="video-list" className="flex flex-col sm:flex-wrap sm:flex-row justify-between w-full ">
                {videos.map((video) => {
                const thumbnail = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                    return(
                        <div key={video.videoId} onClick={() => window.open(`https://www.youtube.com/watch?v=${video.videoId}`, "_blank")}
                            onMouseEnter={() => setHovered(video.videoId)}
                            onMouseLeave={() => setHovered(null)}
                        className={`cursor-pointer h-max md:w-[360px] sm:w-[300px] w-[100%] pb-3 xl:pb-0 ${menucon===true? 'xl:w-[350px] ': 'xl:w-[405px] '}`}
                        >
                            <div>
                                <div  className="aspect-video rounded-2xl overflow-hidden cursor-pointer" 
                                    onClick={() => window.open(`https://www.youtube.com/watch?v=${video.videoId}`, "_blank")}>
                                    {hovered === video.videoId ? (
                                        <iframe
                                        src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=1&controls=1&loop=1&playlist=${video.videoId}`}
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
                                        <div className={`flex xl:mr-1 mr-2  justify-center items-center rounded-full bg-yellow-500 sm:w-8 sm:h-8  h-8 w-8
                                                ${menucon===true? '2xl:w-8 2xl:h-8 xl:w-7 xl:h-7'
                                                    :' 2xl:w-11 2xl:h-11 xl:w-8 xl:h-8'} `}>
                                            <h3 className={` text-black font-semibold  ${menucon===true? '2xl:text-lg  ':'2xl:text-2xl xl:text-lg'}`}>{video.channel[0]}</h3>
                                        </div>
                                        <div className={`full-w-max '}`}>
                                            <h1 className={`line-clamp-2 opacity-95 xl:text-md `}>{video.title}</h1>
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
    )
}
