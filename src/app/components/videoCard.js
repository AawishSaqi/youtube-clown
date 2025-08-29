'use client';
import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

export default function VideoCard({ menucon, videos, searchdata}) {
    console.log(searchdata)
    const [hovered, setHovered] = useState(null);


    return(
            <div id="video-list" className="w-[100%] line-clamp-1 flex flex-col sm:flex-wrap sm:flex-row justify-start gap-3 w-full ">
                {(searchdata.length >0 ? searchdata:videos).map((video) => {
                const thumbnail = `https://img.youtube.com/vi/${video.Id}/hqdefault.jpg`;
                    return(
                        <div key={video.Id} onClick={() => window.open(`https://www.youtube.com/watch?v=${video.Id}`, "_blank")}
                            onMouseEnter={() => setHovered(video.Id)}
                            onMouseLeave={() => setHovered(null)}
                        className={`cursor-pointer h-max md:w-[32.2%]   sm:w-[48.9%] w-[100%] pb-3 xl:pb-0 ${menucon===true? 'lg:w-[32.3%] xl:w-[32.5%] ': 'xl:w-[32.6%] lg:w-[32.43%] '}`}
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
