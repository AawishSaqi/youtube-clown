'use client'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMicrophone, faSearch,faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar({senddata, menucon}) {
      const [menu , setMenu] = useState(false)

        const togglemenu= ()=>{
            setMenu(!menu)
            senddata(!menu)
      }

    
  return (
        <div className='flex justify-between items-center  xl:pr-11 md:pr-8'>
            <div className={`flex items-center xl:gap-4 md:gap-5 xl:mr-12 md:w-[32.3%]  pl-4  pt-2 pb-2   ${menucon===true? 'md:bg-[#121111] xl:bg-transparent':''}`}>
                <div onClick={togglemenu}  className={` w-max flex  justify-center items-center py-[7px] px-[5px]  
                border-1  hover:bg-[#282828]   border-transparent hover:border-white/20 rounded-full ${menucon===true? 'border-white/20 bg-[#282828]':'bg-transparent'} `}>
                    <FontAwesomeIcon className={`md:text-xl xl:text-xl`} icon={faBars} />
                </div>
                <img className=' xl:w-25 xl:h-5 md:w-23 h-5' src='/images/youlogo.png'></img>
            </div>

            <div className=' pt-2'>
                <div className='flex md:gap-4 xl:h-10 md:h-10  '>
                    <search className='flex justify-center  items-center text-center border-1 border-[#282828] hover:border-blue-400  rounded-full'>
                        <input className='xl:w-130 md:w-35 xl:pl-5 md:pl-3 xl:text-md opacity-50   rounded-l-full  text-white outline-none border-r-1 border-[#282828] hover:border-blue-400 ' type='text' placeholder='Search'></input>
                        <button className=' xl:px-7 md:px-5 h-full rounded-r-full bg-white/10 backdrop-blur-md shadow  text-white'>
                            <FontAwesomeIcon className='xl:text-xl md:text-xl text-white ' icon={faSearch} />
                        </button>
                    </search>
                <div className='bg-white/10  md:px-2 backdrop-blur-md shadow rounded-full flex justify-center items-center'>
                    <FontAwesomeIcon className='md:text-lg ' icon={faMicrophone}/>
                </div>
                </div>
            </div>

            <div className='flex justify-center items-center xl:gap-7 md:gap-5 md:h-10  pt-2 '>
                <div className='flex gap-2 items-center md:px-4  rounded-full bg-[#282828]'>
                    <h1 className='xl:text-3xl md:text-3xl '>+</h1>
                    <h1 className='md:text-sm xl:text-sm ' >Create</h1> 
                </div>
                <div>
                    <FontAwesomeIcon className='md:text-xl'  icon={faBell} />
                </div>
                <div className=' flex items-center justify-center xl:w-8 xl:h-8 md:w-8 md:h-8  flex justify-center items-center bg-[#8C6F65] rounded-full cursor-pointer'>
                    <h1 className='xl:text-md text-white opacity-75'>a</h1>
                </div>

            </div>
        </div>

  );
}