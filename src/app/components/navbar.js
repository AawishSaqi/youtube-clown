'use client'
import { use, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMicrophone, faSearch,faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar({senddata, menucon}) {
      const [menu , setMenu] = useState(false)
    //   const [mblview, setMblView] = useState(false)

        const togglemenu= ()=>{
            setMenu(!menu)
            senddata(!menu)
      }

    //   const setsearch = () => {
    //     setMblView(true)
    //   }
    //   const removesearch = () => {
    //     setMblView(false)
    //   }


    
  return (
        <div className=' flex w-full justify-between  sm:justify-center md:justify-between  items-center  xl:pr-11 md:pr-8 pr-6 pl-3 md:pl-0 pt-1 sm:pt-0'>

            <div className={`flex items-center xl:gap-4 md:gap-5 sm:gap-5 gap-5
                 xl:mr-20  sm:w-[59%]  md:w-[32.3%] xl:w-auto   md:pl-4  pt-2 pb-2   
                    ${menucon===true? 'md:bg-[#121111] xl:bg-transparent':''}`}
            >
                <div onClick={togglemenu}  className={` w-max flex justify-center items-center py-[7px] px-[5px]  
                border-1  hover:bg-[#282828]   border-transparent hover:border-white/20 rounded-full ${menucon===true? 'border-white/20 bg-[#282828]':'bg-transparent'} `}>
                    <FontAwesomeIcon className={`text-xl`} icon={faBars} />
                </div>
            {/* <div className='block sm:hidden  rounded-full w-7 h-9 flex items-center justify-center'>
                <h1 className='text-2xl:'> {`<`} </h1>
            </div> */}
                <img className={` md:w-25 sm:w-20 w-25 h-5`} src='/images/youlogo.png'></img>
            </div>

            <div>
                <div className='hidden sm:flex  items-center md:gap-4 sm:gap-3 gap-4 mx-3 md:mx-0 h-10  '>
                    <search className='flex h-full  md:justify-center sm:justify-between  items-center text-center 
                        sm:border-1 border-[#282828] hover:border-blue-400  rounded-full'
                    >
                        <input className=' xl:w-130 md:w-35  sm:w-9 xl:pl-5 sm:pl-3 xl:text-md 
                            opacity-50   rounded-l-full  text-white outline-none border-r-1 border-[#282828] 
                            hover:border-blue-400 ' 
                            type='text' placeholder='Search'>
                        </input>
                            
                        <button className=' xl:px-7 md:px-5 sm:px-5 h-full rounded-r-full sm:bg-white/10 sm:backdrop-blur-md shadow  text-white'>
                            <FontAwesomeIcon className='sm:text-xl  text-white ' icon={faSearch} />
                        </button>
                    </search>
                    <div className='sm:bg-white/10  h-10 sm:px-2 backdrop-blur-md shadow rounded-full flex justify-center items-center'>
                        <FontAwesomeIcon className='md:text-lg sm:text-xl  ' icon={faMicrophone}/>
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center md:gap-3 sm:gap-4  gap-3  '>
                <div className='flex sm:hidden items-center justify-center '>
                    <button className='flex items-center justify-center h-10 w-10 rounded-full hover:bg-white/10 hover:backdrop-blur-md hover:border-1 border-1-white shadow text-white'>
                        <FontAwesomeIcon className='text-lg ' icon={faSearch} />
                    </button>
                    <div className=' flex items-center justify-center h-10 w-10 hover:bg-white/10 hover:backdrop-blur-md shadow hover:border-1 border-1-white rounded-full '>
                        <FontAwesomeIcon className='text-xl ' icon={faMicrophone}/>
                    </div>
                </div>

                <div className='flex gap-2 items-center md:px-4 sm:px-3 px-3 md:gap-5 md:h-10 sm:h-9 h-9  
                    rounded-full bg-[#282828]'>
                    <h1 className='text-3xl  '>+</h1>
                    <h1 className='text-sm  sm:font-semibold ' >Create</h1> 
                </div>
                <div>
                    <FontAwesomeIcon className='md:text-xl text-lg'  icon={faBell} />
                </div>
                <div className='ml-4 flex items-center justify-center w-8 h-8  flex justify-center items-center bg-[#8C6F65] rounded-full cursor-pointer'>
                    <h1 className='xl:text-md text-white opacity-75'>a</h1>
                </div>

            </div>
    {/* ///////////////////////////////////////MOBILE SERCH//////////////////////////////////////// */}
            {/* <div className='block sm:hidden'>
                <FontAwesomeIcon icon={faSearch}/>
            </div> */}
        </div>

  );
}