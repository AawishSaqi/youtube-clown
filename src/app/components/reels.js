'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Reels({menucon}) {
    const reels = [
      { Id: 'S-9MuPhnB4g', title:'The man found newly hatched quail eggs abandoned on the road and then...', view: '2 months ago' },
      { Id: 'omyIsw6NoTw', title:'Thor Vs Ironman in sakaar | #shorts', view: '1 year ago' },
      { Id: '-aSemdpz6CA', title:'Demon ne bachaya Do Hee ko❤️my demon kdrama couple love whatsapp status', view: '1 hour ago' },
      { Id: 'oJJ0ctSFlmU', title:'pitbull dog Version ☠️', view: '2 days ago' },
      { Id: '64F20V5DAv8', title:'Snack Shack | "We Need Summer Jobs" Clip | Paramount Movies', view: '3 hours ago' },
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


 


  

  return (
    <div className={`flex flex-col  gap-6 w-full xl:mt-5 ${menucon===true? '':''}`}>
        <div className='flex xl:gap-3 xl:text-xl font-semibold  items-center'>
            <img src='/images/shorts.png' alt='shorts' className='w-6 h-max'/>
            <h1>Shorts</h1>
        </div>

        <div className=" flex gap-5 ">
        {reels.slice(0,issmall? 2: ismbl?3: issm? 3: ismd ? 4 : 5).map((reel) => {
            const thumbnail = `https://img.youtube.com/vi/${reel.Id}/maxresdefault.jpg`;


            return (
            <div
            key={reel.Id}
            onMouseEnter={()=>setHoveredId(reel.Id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => window.open(`https://www.youtube.com/shorts/${reel.Id}`, '_blank')}
                className={`h-full pb-3 ${menucon===true? 'w-[230px] ':'w-[300px] h-[500px]'}`}
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

  );
}









































































































































// 'use client'
// import React, { useState } from "react";

// export default function Reels() {
//     // const [hovered, sethovered] = useState(false)
//     const [hoveredId, setHoveredId] = useState(null);


//           const reels= [
//             {Id : 'S-9MuPhnB4g',
//             view : '2 months ago'
//             },
//             {Id : 'omyIsw6NoTw',
//             view : '1 year ago'
//             },
//             {Id : '-aSemdpz6CA',
//             view : ' 1 hous ago'
//             },
//             {Id : 'oJJ0ctSFlmU',
//             view : ' 2 days ago'
//             },
//             {Id : 'A0MJRqMEqOY',
//             view : '3 hours ago'
//             },
//         ]
        
//     return(
//         <div className="w-max flex" 
//           >
            
//             {
//                 reels.map((reel) => {
//                     const thumbnail = `https://img.youtube.com/vi/${reel.Id}/hqdefault.jpg`;    

//                     return(
//                         <div key={reel.Id}  onMouseEnter={() => setHoveredId(reel.id)}
//                             onMouseLeave={() => setHoveredId(null)}
//                             onClick={() => window.open(`https://www.youtube.com/watch?v=${reel.Id}`, "_blank")}
//                             className="w-[10%] h-max  ">

//                             <div  className="rounded-xl">
//                                 {hoveredId === reel.Id ? (
//                                     <iframe
//                                         // src='/images/99.avif'
//                                         src={`https://www.youtube.com/embed/${reel.Id}?autoplay=1&mute=0&controls=0&loop=1&playlist=${reel.Id}`}
//                                         // src={`https://www.youtube.com/embed/${reel.Id}?autoplay=1&mute=0&controls=0&loop=1&playlist=${reel.Id}`}
//                                         allow="autoplay; encrypted-media"
//                                         allowFullScreen
//                                         className=""
//                                     />
//                                 ) : (
//                                     <img
//                                         src={thumbnail}
//                                         // src="/images/99.avif"
//                                         alt="reel"
//                                         width={390}
//                                         hight={202}
//                                         className=" bg-white "
//                                     />
//                                 )}
//                             </div>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }

        