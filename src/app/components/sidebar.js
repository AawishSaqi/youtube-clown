'use client'
import { faBars, faChildReaching, faCircleQuestion, faClock, faClockRotateLeft, faCoins, faExclamationCircle, faFlag, faGamepad, faGear, faHouse, faList12, faListAlt, faListCheck, faListSquares, faMusic, faNewspaper, faPhotoVideo, faThumbsUp, faTrophy, faTv, faUser, faVideo, faVideoCamera, faVideoSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

// import Navbar from './navbar';
export default function Sidebar ({menucon,handlevid}) {

    const categories=["all","music", "games","news","sports"];
    const [activeCategory, setActiveCategory] = useState('all')
    
    useEffect(()=> {
        fetch(`/data/${activeCategory}.json`)
        .then(response => response.json())
        .then(data => handlevid(data))
        .catch((err)=> console.log('error in finding category', err))
    },[activeCategory])


    
    //   const [menu , setMenu] = useState(false)
      const [seemore, setSeemore] = useState(false)
        const defaultcount = 7
        const [showall, setShowall] = useState(false)
        
      ///////////////const togglemenu ///////////////////////
    //   const togglemenu= ()=>{
    //     setMenu(!menu)
    //     senddata(!menu)
    //   }
      /////////////////const TOGGLESHOWALL ///////////////////////
        const toggleShowall = () => {
            setShowall(!showall)
        }
      //////////////cosnt toggleSeeMore //////////////////////
      const toggleSeemore = () => {
        setSeemore(!seemore)}


      const subscribe = ['Filmsnapp', 'Linus tech tips', 'World star' , 'Prabin official' , 
        'Qalam kar', 'Playboi ADI', 'A.R solar installer','Imran net', 'Tailor master','Camera setup' ]


    
    //   return(
    //     <div className={`flex flex-col xl:gap-1   ${menucon===true? 'xl:pt-16 ': ' xl:pt-14 '} `}>
    //         {/* <div className={` w-max flex justify-center items-center py-[8px] px-2 border-1 bg-transparent hover:bg-[#282828]   border-transparent hover:border-white/20 rounded-full xl:ml-4   ${menu? '' : ''}`}>
    //             <FontAwesomeIcon className={`xl:text-xl `} icon={faBars}  onClick={togglemenu} />
    //         </div> */}
    //         <div>
    //             <div className={`flex flex-col    ${menucon===true? 'xl:pb-4  xl:ml-[10px] xl:pr-4    border-b-2 border-[#282828]': ' xl:pl-1   '}`}>
    //                     {/* //////////////////////home////////////////////////////   */}
    //                 <div className={` flex flex-col xl:gap-2 rounded-xl  xl:py-[10px] backdrop-blur bg-black/8 ${menucon===true? ' bg-[#282828] xl:px-3  w-full flex flex-row xl:gap-6 ' : 'xl:py-[17px] hover:bg-[#282828] items-center px-1'}`} >
    //                     <FontAwesomeIcon className={`xl:text-lg justify-self-center `} icon={faHouse}  />
    //                     <h1 className={`${menucon===true? 'xl:text-sm' : 'xl:text-[.7vw]'}`}>Home</h1>
    //                 </div>
    //                 {/* ///////////////////////////////shorts//////////////////////////////// */}
    //                 <div onClick={()=> window.open('https://www.youtube.com/shorts/QXcNdn7q0JA','blank')} className={`hover:bg-[#282828] flex xl:gap-2 flex-col rounded-xl  xl:py-[8px] ${menucon===true? ' xl:px-3  w-full   flex flex-row xl:gap-6' : 'xl:py-[17px]  justify-center items-center px-1'}`} >
    //                     {/* <FontAwesomeIcon className='xl:text-xl justify-self-center' icon={faVideo}  /> */}
    //                     <img className='w-6' src='/images/shortsbar.svg' />
    //                     <h1 className={`${menucon===true? 'xl:text-sm' : 'xl:text-[.7vw]'}`}>Shorts</h1>
    //                 </div>
    //                 {/* ////////////////////////subscription///////////////////// */}
    //                 <div className={`hover:bg-[#282828] flex flex-col xl:gap-2 rounded-xl xl:py-[10px] ${menucon===true? ' xl:px-3  w-full  flex flex-row xl:gap-6 ' : 'xl:py-[17px]  justify-center items-center px-1 '}`} >
    //                     <FontAwesomeIcon className='xl:text-lg justify-self-center' icon={faTv}  />
    //                     <h1 className={`${menucon===true? 'xl:text-sm' : 'xl:text-[.7vw]'}`}>Subscription</h1>
    //            </div>
    //                 {/* ////////////////////you///////////////////////////// */}
    //                 <div  onClick={()=> window.open('https://i.insider.com/5f88b6a49e9fe40019009a23?width=1200&format=jpeg', 'blank')} className={`hover:bg-[#282828] flex flex-col xl:gap-2 rounded-xl xl:py-[17px] justify-center items-center ${menucon===true? "hidden" : 'block px-1  '}`}>
    //                     <FontAwesomeIcon className='xl:text-lg justify-self-center ' icon={faUser}  />
    //                     <h1 className='xl:text-[.7vw] '>you</h1>
    //                 </div>
    //             </div> 

    //             <div className={``}>

    //                 <div className={` ${menucon===true? 'block   border-b-2 border-[#282828] xl:pb-2  ' : 'hidden'}`}>
    //                     <div className='xl:pt-3 w-full xl:pb-2 xl:pr-4 border-b-2 border-[#282828] '>
    //                     {/* /////////////////////////////////////you///////////////////////////////// */}
    //                         <h1 className='xl:text-md  font-bold xl:ml-2 xl:pl-4   xl:py-[10px] hover:bg-[#282828] rounded-xl  ' >You &#11166;</h1>
                            
    //                         <div className=' flex flex-col xl:w-full pl-2  '>
    //                             <div className=' xl:py-[10px] items-center xl:pl-4     hover:bg-[#282828] rounded-xl flex xl:gap-6 '>
    //                                 <FontAwesomeIcon className='xl:text-lg' icon={faClockRotateLeft} />
    //                                 <h1 className='xl:text-sm'>History</h1>
    //                             </div>
    //                             <div className=' xl:py-[10px] items-center xl:pl-4  rounded-xl hover:bg-[#282828] flex xl:gap-6 '>
    //                                 <FontAwesomeIcon className='xl:text-lg' icon={faList12} />
    //                                 <h1 className='xl:text-sm'>Playlist</h1>
    //                             </div>
    //                             <div className=' xl:py-[10px] items-center xl:pl-4  hover:bg-[#282828] rounded-xl flex xl:gap-6 '>
    //                                 <FontAwesomeIcon className='xl:text-lg' icon={faVideoSlash} />
    //                                 <h1 className='xl:text-sm'>Your Video</h1>
    //                             </div>
    //                             <div className=' xl:py-[10px] items-center xl:pl-4  hover:bg-[#282828] rounded-xl flex xl:gap-6 '>
    //                                 <FontAwesomeIcon className='xl:text-lg' icon={faClock} />
    //                                 <h1 className='xl:text-sm'>Watch Later</h1>
    //                             </div>
    //                             <div className=' xl:py-[10px] items-center xl:pl-4  hover:bg-[#282828] rounded-xl flex xl:gap-6 '>
    //                                 <FontAwesomeIcon className='xl:text-lg' icon={faThumbsUp} />
    //                                 <h1 className='xl:text-sm'>Liked Video</h1>
    //                             </div>                                                                                
    //                         </div>

    //                     </div>

    //                     <div className='w-full xl:pt-2 xl:px-4'>
    //                         <h1 className='xl:text-md xl:pl-4  xl:mb-2  font-bold xl:py-[10px] hover:bg-[#282828] rounded-xl'>Subscription</h1>

    //                         <div className=' flex flex-col w-full '>
    //                         {(showall? subscribe: subscribe.slice(0, defaultcount)).map((item, index) => (
    //                                 <div key={index} className='xl:pl-4  xl:py-[10px]  rounded-xl hover:bg-[#282828] flex xl:gap-6 items-center '>
    //                                     <div className= 'xl:w-6 xl:h-6 rounded-full flex justify-center items-center text-center bg-blue-400 '>
    //                                         <h1 className='xl:text-sm text-black leading-none ' >{item[0]}</h1>
    //                                     </div>
    //                                     <h1 className='xl:text-sm'>{item}</h1>
    //                                 </div>
    //                             ))}

    //                         </div>
                            
    //                         {subscribe.length > defaultcount && (
    //                             <div className='flex xl:gap-8  xl:pl-5  hover:bg-[#282828] xl:py-[10px] rounded-xl' onClick={toggleShowall}>
    //                                 <h1 className='opacity-50 xl:text-md '>&#11167;</h1>
    //                                 <button  className='xl:text-md opacity-50 '  >{`${showall? 'Show less' : 'Show more'}`}</button>
    //                             </div>
    //                         )}

    //                     </div>
    //                 </div> 

    //                 <div className={` flex flex-col xl:w-full xl:px-4   xl:py-4 border-b-2 border-[#282828]  ${menucon===true? 'block' : 'hidden'}`}>
    //                     <h1 className='xl:text-md xl:pl-4  xl:mb-2  font-bold xl:py-[10px] hover:bg-[#282828] rounded-xl'>Explore</h1>
    //                         <div onClick={()=> setActiveCategory('music')} className={`flex xl:gap-6 items-center  hover:bg-[#282828] xl:py-[10px] xl:pl-4  rounded-xl ${activeCategory==='music'? 'bg-[#282828]':''}`}>
    //                             <FontAwesomeIcon className='xl:text-lg' icon={faMusic} />
    //                             <h1 className='xl:text-sm'>Music</h1>
    //                         </div>
    //                         <div onClick={()=> setActiveCategory('games')}  className={`flex xl:gap-6 items-center  hover:bg-[#282828] xl:py-[10px] xl:pl-4  rounded-xl ${activeCategory==='games'? 'bg-[#282828]':''}`}>
    //                             <FontAwesomeIcon className='xl:text-lg' icon={faGamepad} />
    //                             <h1 className='xl:text-sm'>Games</h1>
    //                         </div>
    //                         <div onClick={()=> setActiveCategory('news')}  className={`flex xl:gap-6 items-center  hover:bg-[#282828] xl:py-[10px] xl:pl-4  rounded-xl ${activeCategory==='news'? 'bg-[#282828]':''}`}>
    //                             <FontAwesomeIcon className='xl:text-lg' icon={faNewspaper} />
    //                             <h1 className='xl:text-sm'>News</h1>
    //                         </div>
    //                         <div onClick={()=> setActiveCategory('sports')}  className={`flex xl:gap-6 items-center  hover:bg-[#282828] xl:py-[10px] xl:pl-4  rounded-xl ${activeCategory==='sports'? 'bg-[#282828]':''}`}>
    //                             <FontAwesomeIcon className='xl:text-lg' icon={faTrophy} />
    //                             <h1 className='xl:text-sm'>Sports</h1>
    //                         </div>

    //                 </div>

    //                 <div className={`w-full xl:py-3 xl:py-2 border-b-2 border-[#282828]    ${menucon===true? 'block' : 'hidden'} `}>
    //                     <div className='xl:px-4'>
    //                         <h1 className='xl:text-md  xl:py-[10px] rounded-xl xl:pl-4  hover:bg-[#282828] font-bold  '>More from Youtube</h1>
    //                         <div className={`flex flex-col      ${menucon===true? 'block' : 'hidden'}`}>
    //                             <div className='flex xl:gap-6 items-center hover:bg-[#282828] xl:py-[10px] xl:pl-4  rounded-xl'>
    //                                 <FontAwesomeIcon className='xl:text-lg text-red-700' icon={faCoins} />
    //                                 <h1 className='xl:text-sm'>Youtube Premium</h1>
    //                             </div>
    //                             <div className='flex xl:gap-6 items-center hover:bg-[#282828] xl:py-[10px] xl:pl-4  rounded-xl'>
    //                                 <FontAwesomeIcon className='xl:text-lg text-red-700' icon={faTv} />
    //                                 <h1 className='xl:text-sm'>Youtube TV</h1>
    //                             </div>
    //                             <div className='flex xl:gap-6 items-center hover:bg-[#282828] xl:py-[10px] xl:pl-4  rounded-xl'>
    //                                 <FontAwesomeIcon className='xl:text-lg text-red-700' icon={faChildReaching} />
    //                                 <h1 className='xl:text-sm'>Youtube Kids</h1>
    //                             </div>
    //                             <div className='flex xl:gap-6 items-center hover:bg-[#282828] xl:py-[10px] xl:pl-4  rounded-xl'>
    //                                 <FontAwesomeIcon className='xl:text-lg text-red-700' icon={faMusic} />
    //                                 <h1 className='xl:text-sm'>Youtube Music</h1>
    //                             </div>

    //                         </div>
    //                     </div>
    //                 </div>

    //                 <div className={`xl:w-full xl:px-4 xl:py-3 ${menucon===true? 'block' : 'hidden'} flex flex-col border-b-2 border-[#282828]   `}>
    //                     <div className='flex xl:gap-6 items-center  xl:pl-4 hover:bg-[#282828]  xl:py-[10px] rounded-xl '>
    //                         <FontAwesomeIcon className='xl:text-lg ' icon={faGear} />
    //                         <h1 className='xl:text-sm '>Settings</h1>
    //                     </div>
    //                     <div className='flex xl:gap-6 items-center xl:pl-4 hover:bg-[#282828]   xl:py-[10px] rounded-xl   '>
    //                         <FontAwesomeIcon className='xl:text-lg ' icon={faFlag} />
    //                         <h1 className='xl:text-sm '>Report history</h1>
    //                     </div>
    //                     <div className='flex xl:gap-6 items-center xl:pl-4 hover:bg-[#282828]    xl:py-[10px] rounded-xl '>
    //                         <FontAwesomeIcon className='xl:text-lg ' icon={faCircleQuestion} />
    //                         <h1 className='xl:text-sm '>Help</h1>
    //                     </div>
    //                     <div className='flex xl:gap-6 items-center xl:pl-4 hover:bg-[#282828]    xl:py-[10px] rounded-xl '>
    //                         <FontAwesomeIcon className='xl:text-lg ' icon={faExclamationCircle} />
    //                         <h1 className='xl:text-sm '>Send feedback</h1>
    //                     </div>
    //                 </div> 

    //                 <div className={` xl:w-full  xl:px-7 opacity-50 xl:py-4 xl:text-xs flex flex-col xl:gap-3 ${menucon===true? 'block' : 'hidden'}`}>
    //                     <p>About Press Copyright Contact us Creator   Advertise Developers</p>
    //                     <p>Terms Privacy Policy  &  SafetyHow YouTube worksTest new features</p>
    //                     <p>© 2023 Google LLC</p>
    //                 </div>

    //             </div>
                
    //         </div>
    //     </div>
    // )
    return(
                <div className={`flex flex-col xl:gap-1   ${menucon===true? 'xl:pt-3 md:pt-5 ': ' pt-1 '} `}>
            {/* <div className={` w-max flex justify-center items-center py-[8px] px-2 border-1 bg-transparent hover:bg-[#282828]   border-transparent hover:border-white/20 rounded-full ml-4   ${menu? '' : ''}`}>
                <FontAwesomeIcon className={`text-xl `} icon={faBars}  onClick={togglemenu} />
            </div> */}
            <div>
                <div className={`flex flex-col     ${menucon===true? 'pb-4  ml-[10px]  pr-4     border-b-2 border-[#282828]': ' pl-1   '}`}>
                        {/* //////////////////////home////////////////////////////   */}
                    <div className={` flex flex-col gap-2 rounded-xl  py-[10px] backdrop-blur bg-black/8 ${menucon===true? 'bg-[#262525] px-3  w-full flex flex-row gap-6 ' : 'py-[17px] hover:bg-[#282828] items-center px-1'}`} >
                        <FontAwesomeIcon className={`text-lg justify-self-center `} icon={faHouse}  />
                        <h1 className={`${menucon===true? 'text-sm ' : 'text-[.7vw] 2xl:text-[.45vw]'}`}>Home</h1>
                    </div>
                    {/* ///////////////////////////////shorts//////////////////////////////// */}
                    <div onClick={()=> window.open('https://www.youtube.com/shorts/QXcNdn7q0JA','blank')} className={`hover:bg-[#282828] flex gap-2 flex-col rounded-xl  py-[8px] ${menucon===true? ' px-3  w-full   flex flex-row gap-6' : 'py-[17px]  justify-center items-center px-1'}`} >
                        {/* <FontAwesomeIcon className='text-xl justify-self-center' icon={faVideo}  /> */}
                        <img className='w-6' src='/images/shortsbar.svg' />
                        <h1 className={`${menucon===true? 'text-sm' : 'text-[.7vw] 2xl:text-[.45vw]'}`}>Shorts</h1>
                    </div>
                    {/* ////////////////////////subscription///////////////////// */}
                    <div className={`hover:bg-[#282828] flex flex-col gap-2 rounded-xl py-[10px] ${menucon===true? ' px-3  w-full  flex flex-row gap-6 ' : 'py-[17px]  justify-center items-center px-1 '}`} >
                        <FontAwesomeIcon className='text-lg justify-self-center' icon={faTv}  />
                        <h1 className={`${menucon===true? 'text-sm' : 'text-[.7vw] 2xl:text-[.45vw]'}`}>Subscription</h1>
               </div>
                    {/* ////////////////////you///////////////////////////// */}
                    <div  onClick={()=> window.open('https://i.insider.com/5f88b6a49e9fe40019009a23?width=1200&format=jpeg', 'blank')} className={`hover:bg-[#282828] flex flex-col gap-2 rounded-xl py-[17px] justify-center items-center ${menucon===true? "hidden" : 'block px-1  '}`}>
                        <FontAwesomeIcon className='text-lg justify-self-center ' icon={faUser}  />
                        <h1 className='text-[.7vw] 2xl:text-[.45vw] '>you</h1>
                    </div>
                </div> 

                <div className={``}>

                    <div className={` ${menucon===true? 'block   border-b-2 border-[#282828] pb-2  ' : 'hidden'}`}>
                        <div className='pt-3 w-full pb-2 pr-4 border-b-2 border-[#282828] '>
                        {/* /////////////////////////////////////you///////////////////////////////// */}
                            <h1 className='text-md  font-bold ml-2 pl-4   py-[10px] hover:bg-[#282828] rounded-xl  ' >You &#11166;</h1>
                            
                            <div className=' flex flex-col w-full pl-2  '>
                                <div className=' py-[10px] items-center pl-4     hover:bg-[#282828] rounded-xl flex gap-6 '>
                                    <FontAwesomeIcon className='text-lg' icon={faClockRotateLeft} />
                                    <h1 className='text-sm'>History</h1>
                                </div>
                                <div className=' py-[10px] items-center pl-4  rounded-xl hover:bg-[#282828] flex gap-6 '>
                                    <FontAwesomeIcon className='text-lg' icon={faList12} />
                                    <h1 className='text-sm'>Playlist</h1>
                                </div>
                                <div className=' py-[10px] items-center pl-4  hover:bg-[#282828] rounded-xl flex gap-6 '>
                                    <FontAwesomeIcon className='text-lg' icon={faVideoSlash} />
                                    <h1 className='text-sm'>Your Video</h1>
                                </div>
                                <div className=' py-[10px] items-center pl-4  hover:bg-[#282828] rounded-xl flex gap-6 '>
                                    <FontAwesomeIcon className='text-lg' icon={faClock} />
                                    <h1 className='text-sm'>Watch Later</h1>
                                </div>
                                <div className=' py-[10px] items-center pl-4  hover:bg-[#282828] rounded-xl flex gap-6 '>
                                    <FontAwesomeIcon className='text-lg' icon={faThumbsUp} />
                                    <h1 className='text-sm'>Liked Video</h1>
                                </div>                                                                                
                            </div>

                        </div>

                        <div className='w-full pt-2 px-4'>
                            <h1 className='text-md pl-4  mb-2  font-bold py-[10px] hover:bg-[#282828] rounded-xl'>Subscription</h1>

                            <div className=' flex flex-col w-full '>
                            {(showall? subscribe: subscribe.slice(0, defaultcount)).map((item, index) => (
                                    <div key={index} className='pl-4 2xl:pl-0  py-[10px]  rounded-xl hover:bg-[#282828] flex gap-6 items-center '>
                                        <div className= 'w-6 h-6 rounded-full flex justify-center items-center text-center bg-blue-400 '>
                                            <h1 className='text-sm text-black leading-none ' >{item[0]}</h1>
                                        </div>
                                        <h1 className='text-sm'>{item}</h1>
                                    </div>
                                ))}

                            </div>
                            
                            {subscribe.length > defaultcount && (
                                <div className='flex gap-8  pl-5  hover:bg-[#282828] py-[10px] rounded-xl' onClick={toggleShowall}>
                                    <h1 className='opacity-50 text-md '>&#11167;</h1>
                                    <button  className='text-md opacity-50 '  >{`${showall? 'Show less' : 'Show more'}`}</button>
                                </div>
                            )}

                        </div>
                    </div> 

                    <div className={` flex flex-col w-full px-4   py-4 border-b-2 border-[#282828]  ${menucon===true? 'block' : 'hidden'}`}>
                        <h1 className='text-md pl-4  mb-2  font-bold py-[10px] hover:bg-[#282828] rounded-xl'>Explore</h1>
                            <div onClick={()=> setActiveCategory('music')} className={`flex gap-6 items-center  hover:bg-[#282828] py-[10px] pl-4  rounded-xl ${activeCategory==='music'? 'bg-[#282828]':''}`}>
                                <FontAwesomeIcon className='text-lg' icon={faMusic} />
                                <h1 className='text-sm'>Music</h1>
                            </div>
                            <div onClick={()=> setActiveCategory('games')}  className={`flex gap-6 items-center  hover:bg-[#282828] py-[10px] pl-4  rounded-xl ${activeCategory==='games'? 'bg-[#282828]':''}`}>
                                <FontAwesomeIcon className='text-lg' icon={faGamepad} />
                                <h1 className='text-sm'>Games</h1>
                            </div>
                            <div onClick={()=> setActiveCategory('news')}  className={`flex gap-6 items-center  hover:bg-[#282828] py-[10px] pl-4  rounded-xl ${activeCategory==='news'? 'bg-[#282828]':''}`}>
                                <FontAwesomeIcon className='text-lg' icon={faNewspaper} />
                                <h1 className='text-sm'>News</h1>
                            </div>
                            <div onClick={()=> setActiveCategory('sports')}  className={`flex gap-6 items-center  hover:bg-[#282828] py-[10px] pl-4  rounded-xl ${activeCategory==='sports'? 'bg-[#282828]':''}`}>
                                <FontAwesomeIcon className='text-lg' icon={faTrophy} />
                                <h1 className='text-sm'>Sports</h1>
                            </div>

                    </div>

                    <div className={`w-full py-3 py-2 border-b-2 border-[#282828]    ${menucon===true? 'block' : 'hidden'} `}>
                        <div className='px-4'>
                            <h1 className='text-md  py-[10px] rounded-xl pl-4  hover:bg-[#282828] font-bold  '>More from Youtube</h1>
                            <div className={`flex flex-col      ${menucon===true? 'block' : 'hidden'}`}>
                                <div className='flex gap-6 items-center hover:bg-[#282828] py-[10px] pl-4  rounded-xl'>
                                    <FontAwesomeIcon className='text-lg text-red-700' icon={faCoins} />
                                    <h1 className='text-sm'>Youtube Premium</h1>
                                </div>
                                <div className='flex gap-6 items-center hover:bg-[#282828] py-[10px] pl-4  rounded-xl'>
                                    <FontAwesomeIcon className='text-lg text-red-700' icon={faTv} />
                                    <h1 className='text-sm'>Youtube TV</h1>
                                </div>
                                <div className='flex gap-6 items-center hover:bg-[#282828] py-[10px] pl-4  rounded-xl'>
                                    <FontAwesomeIcon className='text-lg text-red-700' icon={faChildReaching} />
                                    <h1 className='text-sm'>Youtube Kids</h1>
                                </div>
                                <div className='flex gap-6 items-center hover:bg-[#282828] py-[10px] pl-4  rounded-xl'>
                                    <FontAwesomeIcon className='text-lg text-red-700' icon={faMusic} />
                                    <h1 className='text-sm'>Youtube Music</h1>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className={`w-full px-4 py-3 ${menucon===true? 'block' : 'hidden'} flex flex-col border-b-2 border-[#282828]   `}>
                        <div className='flex gap-6 items-center  pl-4 hover:bg-[#282828]  py-[10px] rounded-xl '>
                            <FontAwesomeIcon className='text-lg ' icon={faGear} />
                            <h1 className='text-sm '>Settings</h1>
                        </div>
                        <div className='flex gap-6 items-center pl-4 hover:bg-[#282828]   py-[10px] rounded-xl   '>
                            <FontAwesomeIcon className='text-lg ' icon={faFlag} />
                            <h1 className='text-sm '>Report history</h1>
                        </div>
                        <div className='flex gap-6 items-center pl-4 hover:bg-[#282828]    py-[10px] rounded-xl '>
                            <FontAwesomeIcon className='text-lg ' icon={faCircleQuestion} />
                            <h1 className='text-sm '>Help</h1>
                        </div>
                        <div className='flex gap-6 items-center pl-4 hover:bg-[#282828]    py-[10px] rounded-xl '>
                            <FontAwesomeIcon className='text-lg ' icon={faExclamationCircle} />
                            <h1 className='text-sm '>Send feedback</h1>
                        </div>
                    </div> 

                    <div className={` w-full  px-7 opacity-50 py-4 text-xs flex flex-col gap-3 ${menucon===true? 'block' : 'hidden'}`}>
                        <p>About Press Copyright Contact us Creator   Advertise Developers</p>
                        <p>Terms Privacy Policy  &  SafetyHow YouTube worksTest new features</p>
                        <p>© 2023 Google LLC</p>
                    </div>

                </div>
                
            </div>
        </div>
    )
}



{/* <img className='2xl:w-35 2xl:h-8 xl:w-35 xl:h-7 ' src='/images/youlogo.png'></img>
    <div className='flex 2xl:gap-4'>
                <search className='flex justify-center items-center text-center border-1 border-[#282828] hover:border-blue-400  rounded-full'>
                    <input className='2xl:w-175 2xl:px-7 xl:py-[.6vw]  xl:text-xl  opacity-50   rounded-l-full  text-white outline-none border-r-1 border-[#282828] bg-black/100  hover:border-blue-400 ' type='text' placeholder='Search'></input>
                    <button className='2xl:px-7 2xl:py-[.6vw]  rounded-r-full bg-[#282828] backdrop-blur-md shadow  text-white'>
                        <FontAwesomeIcon className='2xl:text-2xl opacity-25' icon={faSearch} />
                    </button>
                </search>
                <div className='bg-white/10 backdrop-blur-md shadow rounded-full 2xl:py-3 2xl:px-3 flex justify-center items-center'>
                    <FontAwesomeIcon className='2xl:text-2xl ' icon={faMicrophone}/>
                </div>
            </div>

            <div className='flex justify-center items-center 2xl:gap-6 '>
                <div className='2xl:py-3 2xl:px-9 rounded-full bg-[#282828]'>
                    <h1 className='2xl:text-xl opacity-70' > + Create</h1> 
                </div>
                <div>
                    <FontAwesomeIcon className='2xl:text-3xl '  icon={faBell} />
                </div>
                <div className='flex justify-center items-center bg-[#8C6F65] rounded-full 2xl:py-2 2xl:px-4'>
                    <h1 className='2xl:text-2xl opacity-75'>a</h1>
                </div>
            </div> */}
