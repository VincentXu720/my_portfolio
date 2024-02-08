import React,{ useState } from "react";
import { getAssetsUrl } from "../../utils";
export const Navbar = ()=>{
    const [openMenu,setOpenMenu] = useState(false)
    function LinkClick(){
        setOpenMenu(!openMenu)
    }
    return(
        <>
            <header>
                    <div className="container m-auto px-5 py-5 flex justify-end relative">
                        <ul className="hidden md:flex flex-row gap-5">
                            <li><a href="#About" className="mr-5 text-white text-lg hover:text-orange-400">About</a></li>
                            <li><a href="#Skills" className="mr-5 text-white text-lg hover:text-orange-400">Skills</a></li>
                            <li><a href="#Projects" className="mr-5 text-white text-lg hover:text-orange-400">Projects</a></li>
                            <li><a href="#Contact" className="mr-5 text-white text-lg hover:text-orange-400">Contact</a></li>
                        </ul>
                        <img src={
                            openMenu
                            ?getAssetsUrl("Nav/close.png")
                            :getAssetsUrl("Nav/menu_origin.png")
                        } className="cursor-pointer w-8 h-8 md:hidden"
                        onClick={()=>setOpenMenu(!openMenu)}
                        />
                        {/* openMenu = true 才會打開選單 */}
                        { openMenu &&(
                            <ul className="flex flex-col absolute my-10 p-8 gap-8 bg-gradient-to-b from-slate-600 to-slate-800 border border-blue-900 rounded-md shadow-md shadow-black">
                                <li onClick = {LinkClick}><a href="#About" className="mr-5 text-white text-base hover:text-orange-400">About</a></li>
                                <li onClick = {LinkClick}><a href="#Skills" className="mr-5 text-white text-base hover:text-orange-400">Skills</a></li>
                                <li onClick = {LinkClick}><a href="#Projects" className="mr-5 text-white text-base hover:text-orange-400">Projects</a></li>
                                <li onClick = {LinkClick}><a href="#Contact" className="mr-5 text-white text-base hover:text-orange-400">Contact</a></li>
                            </ul> 
                        )}
                    </div>
            </header>
        </>
    )
}