// 'use client'
// import { use, useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBell, faMicrophone, faSearch,faBars } from '@fortawesome/free-solid-svg-icons';

// export default function Navbar({senddata, menucon, handleSearching }) {
//     const [menu , setMenu] = useState(false)
//     const [mblsearch, setmblsearch] = useState(false)
      
//     const [data ,setData] = useState([])
//     const [query , setQuery] = useState('')
//     const [result , setResult] = useState([])
    
//     ////////////////////typing ==== searching/////////////
//     useEffect(() => {
//         async function fetchData() {
//         const files = ["all.json","music.json", "games.json","indian.json","news.json","drama.json","sports.json"];
        
//         const results = await Promise.all(
//             files.map((f) => fetch(`/data/${f}`).then((res) => res.json()))
//         )
    
//         setData(results.flat())
//         }
//         fetchData();
//     },[])
//         //////////to stop searching while typing///////////////
//         const handlesearch = () => {
//         if(!query.trim()){
//             setResult([])
//             return;
//         }
//         const filtered = data.filter((item) => 
//         JSON.stringify(item).toLowerCase().includes(query.toLowerCase()))
    
//         setResult(filtered)
//         handleSearching(filtered)
//         }
    
//         // Handle Enter key to search with enter 
//     const handleKeyDown = (e) => {
//         if (e.key === "Enter") {
//             console.log("enter passed", query)
//         handlesearch(query);
//         setQuery("")
//         }
//     };

//     useEffect(()=> {
//             const handleEscsearch = (e)=>{
//         if(e.key === "Escape"){
//             setmblsearch(false)
//         }
//     }
//     window.addEventListener('keydown', handleEscsearch)
//     return () => window.removeEventListener('keydown', handleEscsearch)
//     })




//         const togglemenu= ()=>{
//             setMenu(!menu)
//             senddata(!menu)
//       }

//       const setsearch = () => {
//         setmblsearch(true)
//       }
//       const removesearch = () => {
//         setmblsearch(false)
//       }


    
//   return (
//         <div className=' flex w-full justify-between  sm:justify-center md:justify-between  
//             items-center  xl:pr-11 md:pr-8 pr-1 sm:pr-6 pl-3 md:pl-0  sm:pt-1  md:pt-0 
//                 border-b-[.01vw] border-[#808080] sm:border-none'>

//             <div className={`flex items-center xl:gap-4 md:gap-5 sm:gap-5 gap-5 w-full ${mblsearch? 'hidden ':'flex'}
//                  xl:mr-20  sm:w-[59%]  md:w-[27.2%] xl:w-auto   md:pl-4  pt-2 sm:pb-2   
//                     ${menucon===true? 'md:bg-[#121111] lg:bg-transparent':''}`}
//             >
//                 <div onClick={togglemenu}  className={`hidden sm:flex w-max  justify-center items-center py-[7px] px-[5px]  
//                 border-1  hover:bg-[#282828]   border-transparent hover:border-white/20 rounded-full ${menucon===true? 'border-white/20 bg-[#282828]':'bg-transparent'} `}>
//                     <FontAwesomeIcon className={`text-xl`} icon={faBars} />
//                 </div>
//                 <div className={`w-full justify-between items-center ${mblsearch? 'hidden': 'flex'}`}>
//                     <img className={` md:w-25 sm:w-20 w-23 h-5`} src='/images/youlogo.png'></img>
//                     <div className='flex sm:hidden'>
//                         <button
//                             onClick={setsearch}
//                                 className='h-10 w-10 rounded-full hover:bg-white/10 hover:backdrop-blur-md shadow hover:border-1     hover:border-white  text-white'>
//                             <FontAwesomeIcon className='text-xl  text-white ' icon={faSearch} />
//                         </button>  
//                     </div>

//                 </div>
//             </div>

//             <div>
//                 <div className='hidden sm:flex  items-center md:gap-4 sm:gap-3 gap-4 mx-3 md:mx-0 h-10  '>
//                     <search className='flex h-full   sm:justify-between lg:justify-between  items-center text-center 
//                         sm:border-1 border-[#282828] hover:border-blue-400  rounded-full'
//                     >
//                         <input onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyDown}
//                           className={`xl:w-130 md:w-[100%] lg:w-80  sm:w-[40%] xl:pl-5 sm:pl-3 xl:text-md 
//                             opacity-50   rounded-l-full  text-white outline-none border-r-1 border-[#282828] 
//                             hover:border-blue-400`} 
//                             type='text' value={query} placeholder='Search'>
//                         </input>
                            
//                         <button onClick={handlesearch} className=' xl:px-7 md:px-5 sm:px-5 h-full rounded-r-full sm:bg-white/10 sm:backdrop-blur-md shadow  text-white'>
//                             <FontAwesomeIcon className='sm:text-xl  text-white ' icon={faSearch} />
//                         </button>
//                     </search>
//                     <div className='sm:bg-white/10  h-10 sm:px-2 backdrop-blur-md shadow rounded-full flex justify-center items-center'>
//                         <FontAwesomeIcon className='md:text-lg sm:text-xl  ' icon={faMicrophone}/>
//                     </div>
//                 </div>
//             </div>

//             <div className={`hidden sm:flex justify-center items-center md:gap-3 sm:gap-4  gap-3 `}>

//                 <div className='flex gap-2 items-center md:px-3 sm:px-3 px-3 md:gap-2  xl:gap-2 md:h-9 sm:h-9 h-9  
//                     rounded-full bg-[#282828]'>
//                     <h1 className='text-3xl  '>+</h1>
//                     <h1 className='text-sm  sm:font-semibold ' >Create</h1> 
//                 </div>
//                 <div>
//                     <FontAwesomeIcon className='md:text-xl text-lg'  icon={faBell} />
//                 </div>
//                 <div className='ml-4 flex items-center justify-center w-8 h-8  flex justify-center items-center bg-[#8C6F65] rounded-full cursor-pointer'>
//                     <h1 className='xl:text-md text-white opacity-75'>a</h1>
//                 </div>

//             </div>

            
//             <div className={`w-full flex sm:hidden  justify-between  items-center ${mblsearch? 'flex h-12 ':'hidden'}`}>
//                 <div onClick={removesearch} 
//                     className='h-10 px-3 flex justify-center items-center hover:bg-white/10 
//                         backdrop-blur shadow hover:border-1 border-[#808080] rounded-full'>
//                     <h1  className='text-xl'>{`<`}</h1>
//                 </div>
//                 <div className='flex sm:hidden  items-center  mx-3 gap-3  h-8  '>
//                     <search className='flex h-full  items-center text-center border-1 border-[#282828] bg-white/10 backdrop-blur-md shadow rounded-full'
//                     >
//                         <input onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyDown} className={` opacity-50 w-[60vw]   pl-3 rounded-l-full  text-white outline-none border-r-1 border-[#282828] hover:border-blue-400`} 
//                             type='text' value={query} placeholder='Search'>
//                         </input>
                            
//                         <button onClick={handlesearch}
//                              className='  px-5 h-full rounded-r-full   text-white'>
//                             <FontAwesomeIcon className='text-lg  ' icon={faSearch} />
//                         </button>
//                     </search>
//                     <div className='bg-white/10 border-1 border-[#808080]  h-9 w-9  backdrop-blur-md shadow rounded-full flex justify-center items-center'>
//                         <FontAwesomeIcon className='md:text-lg sm:text-xl  ' icon={faMicrophone}/>
//                     </div>
//                 </div>
//             </div>
//         </div>

//   );
// }

'use client'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMicrophone, faSearch,faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar({senddata, menucon, handleSearching }) {
    const [menu , setMenu] = useState(false)
    const [mblsearch, setmblsearch] = useState(false)
      
    const [data ,setData] = useState([])
    const [query , setQuery] = useState('')
    const [video, setvideo ] = useState([])
    
    ////////////////////typing ==== searching/////////////
    // useEffect(() => {
    //     async function fetchData() {
    //     const files = ["all.json","music.json", "games.json","indian.json","news.json","drama.json","sports.json"];
        
    //     const results = await Promise.all(
    //         files.map((f) => fetch(`/data/${f}`).then((res) => res.json()))
    //     )
    
    //     setData(results.flat())
    //     }
    //     fetchData();
    // },[])
    const searchVideos = async () => {
        const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(
        query
        )}&key=${API_KEY}&maxResults=20`;

    const res = await fetch(url);
    const data = await res.json();
    setvideo(data.items.filter(item => item.id.kind === "youtube#video"))
    console.log(video)
    handleSearching(data.items.filter(item => item.id.kind === "youtube#video"))

  };

        //////////to stop searching while typing///////////////
        // const handlesearch = () => {
        // if(!query.trim()){
        //     setResult([])
        //     return;
        // }
        // const filtered = data.filter((item) => 
        // JSON.stringify(item).toLowerCase().includes(query.toLowerCase()))
    
        // handleSearching(filtered)
        // }
    
        // Handle Enter key to search with enter 
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            console.log("enter passed", query)
        searchVideos(query);
        setQuery("")
        }
    };

    useEffect(()=> {
            const handleEscsearch = (e)=>{
        if(e.key === "Escape"){
            setmblsearch(false)
        }
    }
    window.addEventListener('keydown', handleEscsearch)
    return () => window.removeEventListener('keydown', handleEscsearch)
    })




        const togglemenu= ()=>{
            setMenu(!menu)
            senddata(!menu)
      }

      const setsearch = () => {
        setmblsearch(true)
      }
      const removesearch = () => {
        setmblsearch(false)
      }


    
  return (
        <div className=' flex w-full justify-between  sm:justify-center md:justify-between  
            items-center  xl:pr-11 md:pr-8 pr-1 sm:pr-6 pl-3 md:pl-0  sm:pt-1  md:pt-0 
                border-b-[.01vw] border-[#808080] sm:border-none'>

            <div className={`flex items-center xl:gap-4 md:gap-5 sm:gap-5 gap-5 w-full ${mblsearch? 'hidden ':'flex'}
                 xl:mr-20  sm:w-[59%]  md:w-[27.2%] xl:w-auto   md:pl-4  pt-2 sm:pb-2   
                    ${menucon===true? 'md:bg-[#121111] lg:bg-transparent':''}`}
            >
                <div onClick={togglemenu}  className={`hidden sm:flex w-max  justify-center items-center py-[7px] px-[5px]  
                border-1  hover:bg-[#282828]   border-transparent hover:border-white/20 rounded-full ${menucon===true? 'border-white/20 bg-[#282828]':'bg-transparent'} `}>
                    <FontAwesomeIcon className={`text-xl`} icon={faBars} />
                </div>
                <div className={`w-full justify-between items-center ${mblsearch? 'hidden': 'flex'}`}>
                    <img className={` md:w-25 sm:w-20 w-23 h-5`} src='/images/youlogo.png'></img>
                    <div className='flex sm:hidden'>
                        <button
                            onClick={setsearch}
                                className='h-10 w-10 rounded-full hover:bg-white/10 hover:backdrop-blur-md shadow hover:border-1     hover:border-white  text-white'>
                            <FontAwesomeIcon className='text-xl  text-white ' icon={faSearch} />
                        </button>  
                    </div>

                </div>
            </div>

            <div>
                <div className='hidden sm:flex  items-center md:gap-4 sm:gap-3 gap-4 mx-3 md:mx-0 h-10  '>
                    <search className='flex h-full   sm:justify-between lg:justify-between  items-center text-center 
                        sm:border-1 border-[#282828] hover:border-blue-400  rounded-full'
                    >
                        <input onChange={(e) => setQuery(e.target.value)} 
                            onKeyDown={handleKeyDown}
                            className={`xl:w-130 md:w-[100%] lg:w-80  sm:w-[40%] xl:pl-5 sm:pl-3 xl:text-md 
                            opacity-50   rounded-l-full  text-white outline-none border-r-1 border-[#282828] 
                            hover:border-blue-400`} 
                            type='text' 
                            value={query} 
                            placeholder='Search'>
                        </input>
                            
                        <button onClick={searchVideos} className=' xl:px-7 md:px-5 sm:px-5 h-full rounded-r-full sm:bg-white/10 sm:backdrop-blur-md shadow  text-white'>
                            <FontAwesomeIcon className='sm:text-xl  text-white ' icon={faSearch} />
                        </button>
                    </search>
                    <div className='sm:bg-white/10  h-10 sm:px-2 backdrop-blur-md shadow rounded-full flex justify-center items-center'>
                        <FontAwesomeIcon className='md:text-lg sm:text-xl  ' icon={faMicrophone}/>
                    </div>
                </div>
            </div>

            <div className={`hidden sm:flex justify-center items-center md:gap-3 sm:gap-4  gap-3 `}>

                <div className='flex gap-2 items-center md:px-3 sm:px-3 px-3 md:gap-2  xl:gap-2 md:h-9 sm:h-9 h-9  
                    rounded-full bg-[#282828]'>
                    <h1 className='text-3xl  '>+</h1>
                    <h1 className='text-sm font-sans sm:font-semibold ' >Create</h1> 
                </div>
                <div>
                    <FontAwesomeIcon className='md:text-xl text-lg'  icon={faBell} />
                </div>
                <div className='ml-4 flex items-center justify-center w-8 h-8  flex justify-center items-center bg-[#8C6F65] rounded-full cursor-pointer'>
                    <h1 className='xl:text-md text-white opacity-75'>a</h1>
                </div>

            </div>


            
            <div className={`w-full flex sm:hidden  justify-between  items-center ${mblsearch? 'flex h-12 ':'hidden'}`}>
                <div onClick={removesearch} 
                    className='h-10 px-3 flex justify-center items-center hover:bg-white/10 
                        backdrop-blur shadow hover:border-1 border-[#808080] rounded-full'>
                    <h1  className='text-xl'>{`<`}</h1>
                </div>
                <div className='flex sm:hidden  items-center  mx-3 gap-3  h-8  '>
                    <search className='flex h-full  items-center text-center border-1 border-[#282828] bg-white/10 backdrop-blur-md shadow rounded-full'
                    >
                        <input onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyDown} className={` opacity-50 w-[60vw]   pl-3 rounded-l-full  text-white outline-none border-r-1 border-[#282828] hover:border-blue-400`} 
                            type='text' value={query} placeholder='Search'>
                        </input>
                            
                        <button onClick={searchVideos}
                             className='  px-5 h-full rounded-r-full   text-white'>
                            <FontAwesomeIcon className='text-lg  ' icon={faSearch} />
                        </button>
                    </search>
                    <div className='bg-white/10 border-1 border-[#808080]  h-9 w-9  backdrop-blur-md shadow rounded-full flex justify-center items-center'>
                        <FontAwesomeIcon className='md:text-lg sm:text-xl  ' icon={faMicrophone}/>
                    </div>
                </div>
            </div>
        </div>

  );
}