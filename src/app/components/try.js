import { faEllipsisV, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useEffect, useState }  from "react";

export default function Try({menucon}){

  const [data ,setData] = useState([])
  const [query , setQuery] = useState('')
  const [result , setResult] = useState([])
  const [hovered, setHovered] = useState(null )

  
  useEffect(() => {
    async function fetchData() {
      const files = ["all.json","music.json", "games.json","indian.json","news.json","drama.json","sports.json"];
    
      const results = await Promise.all(
        files.map((f) => fetch(`/data/${f}`).then((res) => res.json()))
      )

      setData(results.flat())
    }
    fetchData();
  },[])
  
    const handlesearch = () => {
      if(!query.trim()){
        setResult([])
        return;
      }
      const filtered = data.filter((item) => 
      JSON.stringify(item).toLowerCase().includes(query.toLowerCase()))

      setResult(filtered)
    }

      // Handle Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handlesearch();
    }
  };

  return(
 <div className="w-full  ">
      <div className="border border-white w-max rounded-full flex justify-self-center ">
        <input type="text"
          placeholder="Search..."
          className="w-90  rounded-l-full h-10 pl-3 focus:outline-none "
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handlesearch} className="bg-[#282828] h-10 w-16 rounded-r-full border-l border-white"><FontAwesomeIcon icon={faSearch} className="text-lg"/></button>
      </div>

      <ul className="mt-6 space-y-2 flex flex-wrap gap-4">
        {result.length > 0 ?(
          result.map((video, idx) => {
              const thumbnail = `https://img.youtube.com/vi/${video.Id}/hqdefault.jpg`;
              return (
            <div key={idx} className="w-100 ">
                <div  className="aspect-video rounded-2xl overflow-hidden cursor-pointer" 
                    onMouseEnter={() => setHovered(video.Id)}
                    onMouseLeave={() => setHovered(null)}
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
                        <div className={`flex xl:mr-1 mr-2  justify-center items-center rounded-full bg-yellow-500 h-max `}>
                            <h3 className={` text-black font-semibold xl:w-10 xl:h-10 flex justify-center items-center   ${menucon===true? '2xl:text-lg  ':'2xl:text-2xl xl:text-lg'}`}>{video.channel[0]}</h3>
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
          )})): (
            <p className="text-xl text-center text-red-500">No results</p>
          )  

      }
      </ul>
    </div>
  )
}