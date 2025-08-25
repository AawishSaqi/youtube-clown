'use client'
import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";


export default function VideoCard2 ({menucon}){
        const [hovered, setHovered] = useState(false);

        
        
        const videos = [
    {
      videoId: 'Cu3002rwCpg',
      title: 'Abhijeet और Daya को Dr. Tarika ने खिलाया अपने हाथ से बना कर खाना | CID I New Episode 2025',
      channel:'Daily TV Serials',
      views: '67.5M views',
      date: '2 days ago'
    },
    {
      videoId: '-qzE9_748_M',
      title: 'Vidyut और CID मिलकर क्या ढूंढ पाएंगे Purvi को? | CID | सी.आई.डी. | 3 Oct 2024',
      channel:'Sony Wah ',
      views: '16M views',
      date: '1 month ago'
    },
    {
      videoId: 'RdQojF5l-W4',
      title: 'Massive Flood & Rain - Monsoon Heavy Rains Alert - Destruction In Gilgit Baltistan - 6am Headlines',
      channel:'24 News Hd',
      views: '138k views',
      date: '1 week ago'
    },
    {
      videoId: 'b4vFKr8q7_M',
      title: 'Sad News At Late Night | Heavy Rains Cause Urban Flooding, Deaths Reported | 04 AM Headlines',
      channel:'Dunya News',
      views: '138k views',
      date: '1 week ago'
    },
    {
        videoId:'jCVjudmnByk',
        title:'Saiyaara Title Song | Ahaan, Aneet | Tanishk Bagchi, Faheem Abdullah, Arslan| Irshad Kamil',
        channel:'YRF musics',
        views:'8 M',
        date:'1 month ago'
    },
    {
        videoId:'AR50ZX8VP3w',
        title:'Humraaz Ep 29 [Eng Sub] Presented by Skin Care | Feroze Khan - Ayeza Khan | 7th August 2025',
        channel:'HAR PAL GEO',
        views:'8 M',
        date:'2 hours ago'
    },{
        videoId:'tVWVJE_EBkA',
        title:'Alif Allah Aur Insaan Episode 1',
        channel:'Alif Allah Aur Insaan',
        views:'1.6 M',
        date:'1 month ago'
    },{
        videoId:'41bWMQ_8Bdk',
        title:'Billie Eilish & Khalid - Lovely (slowed to perfection)',
        channel:'Billie Bossa Nova',
        views:'5.4 M',
        date:'2 years ago'
    },{
        videoId:'d9bdGKqY4xU',
        title:'Arya 2 (HD) South Blockbuster Hindi Dubbed Movie | Allu Arjun, Kajal Aggarwal, Brahmanandam',
        channel:'Goldmines Great Indian Comedy',
        views:'9.4 M',
        date:'1 years ago'
    },{
        videoId:'mKca6q29Ng4',
        title:'CID की नई चाल ! फ्रेड्डी को भेष बदलकर भेजा जब गुंण्डो के अड्डे पर | CID | New Latest Episode 2025',
        channel:'Crime And Mystery',
        views:'1.4 M',
        date:'3 weeks ago'
    },{
        videoId: 'VbFMTPe8QmM',
        title:'Falak Ijazat Cover-Rasel Hosen || Falak Shabir || Lofi ( Slowed+Reverb)🎧Full Song',
        channel:'Zone Lofi 🎵',
        views:'1.4 M',
        date:'6 months ago'
    },
  ]
  return(
        <div className="flex flex-wrap justify-between w-full ">
            {videos.map((video) => {
            const thumbnail = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                return(
                    <div key={video.videoId} onClick={() => window.open(`https://www.youtube.com/watch?v=${video.videoId}`, "_blank")}
                        onMouseEnter={() => setHovered(video.videoId)}
                        onMouseLeave={() => setHovered(null)}
                    className={`cursor-pointer h-max xl:mb-3 xl:pb-2 md:pb-4 pb-3 md:w-[359px] sm:w-[300px] w-full ${menucon===true? 'w-[350px]': 'xl:w-[405px]'}`}
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
                                        width={1200}
                                        height={900}
                                        alt={video.title}
                                        className={` object-cover h-full w-full`}
                                    />
                                )}
                            </div>

                            {/* <div className={`flex pt-3 justify-between w-full`}>
                                <div className="flex justify-between">
                                    <div className={`flex xl:mr-1  justify-center items-center rounded-full bg-yellow-500 
                                            ${menucon===true? '2xl:w-8 2xl:h-8 xl:w-7 xl:h-7'
                                                :' 2xl:w-11 2xl:h-11 xl:w-8 xl:h-8'} `}>
                                        <h3 className={` text-black  ${menucon===true? 'xl:text-lg font-semibold ':'xl:text-xl xl:text-xl'}`}>{video.channel[0]}</h3>
                                    </div>
                                    <div className={`full-w-max`}>
                                        <h1 className={` opacity-95 xl:text-md `}>{video.title}</h1>
                                        <h1 className={`2xl:text-lg opacity-50`}>{video.channel}</h1>

                                        <div className={`flex 2xl:gap-4 xl:gap-3 2xl:text-lg opacity-50`}>
                                            <h1>{video.views}views</h1>
                                            <h1>{video.date}</h1>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <FontAwesomeIcon className="2xl:text-2xl" icon={faEllipsisV} />
                                </div>
                            </div> */}
                            <div className={`flex pt-3 justify-between ${menucon===true? 'xl:w-[350px]': 'xl:w-[405px] '}`}>
                                <div className="flex justify-between">
                                    <div className={`flex xl:mr-1 mr-2 sm:px-2 sm:h-7 w-8 h-8 justify-center items-center rounded-full bg-yellow-500 
                                            ${menucon===true? '2xl:w-8 2xl:h-8  '
                                                :' 2xl:w-11 2xl:h-11'} `}>
                                        <h3 className={` text-black font-semibold  ${menucon===true? '2xl:text-lg  ':'2xl:text-2xl xl:text-lg'}`}>{video.channel[0]}</h3>
                                    </div>
                                    <div className={`full-w-max '}`}>
                                        <h1 className={`line-clamp-2 opacity-95 xl:text-md `}>{video.title}</h1>
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
    )
}
