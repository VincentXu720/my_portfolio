import React,{ useState }from "react";
import { getAssetsUrl } from "../../utils";
export const Skills = ()=>{
    return(
        <>
            <section className="w-[100%] flex flex-col items-center py-5 origin-top" id="Skills">
                <div className="flex flex-row">
                    <p className="text-white text-3xl">My</p>
                    <p className="text-orange-500 text-3xl ml-2">Skill</p>
                </div>
                <div className="h-auto md:h-[700px] container m-auto flex flex-col md:flex-row items-center md:items-start md:justify-center md:flex-wrap">
                    <div className="w-[400px] md:w-[350px] h-[200px]  md:h-[200px] md:mx-5 border-4 border-orange-500 rounded-2xl flex flex-col items-center justify-center bg-gradient-to-br from-slate-700 to-slate-500 my-5 shadow-lg shadow-black">
                        <div className="w-[400px] md:w-[350px] h-[100%] flex flex-col items-center justify-center  hover:scale-125">
                            <p className="text-white pb-3 text-2xl">HTML 5</p>
                            <img src={getAssetsUrl("Skills/HTML5.png")} alt="HTML5" className="w-16 h-16"/>
                        </div>
                    </div>
                    <div className="w-[400px] md:w-[350px] h-[200px] md:h-[200px] md:mx-5 border-4 border-orange-500 rounded-2xl flex flex-col items-center justify-center bg-gradient-to-br from-slate-700 to-slate-500 my-5 shadow-lg shadow-black">
                        <div className="w-[400px] md:w-[350px] h-[100%] flex flex-col items-center justify-center hover:scale-125">
                            <p className="text-white pb-3 text-2xl">CSS 3</p>
                            <img src={getAssetsUrl("Skills/CSS3.png")} alt="CSS3" className="w-16 h-16"/>
                        </div>                   
                    </div>
                    <div className="w-[400px] md:w-[350px] h-[200px] md:h-[200px] md:mx-5 border-4 border-orange-500 rounded-2xl flex flex-col items-center justify-center bg-gradient-to-br from-slate-700 to-slate-500 my-5 shadow-lg shadow-black">
                        <div className="w-[400px] md:w-[350px] h-[100%] flex flex-col items-center justify-center hover:scale-125">
                            <p className="text-white pb-3 text-2xl">Javascript</p>
                            <img src={getAssetsUrl("Skills/JS.png")} alt="JavaScript" className="w-16 h-16"/>
                        </div>
                    </div>
                    <div className="w-[400px] md:w-[350px] h-[200px]  md:h-[200px] md:mx-5 border-4 border-orange-500 rounded-2xl flex flex-col items-center justify-center bg-gradient-to-br from-slate-700 to-slate-500 my-5 shadow-lg shadow-black">
                        <div className="w-[400px] md:w-[350px] h-[100%] flex flex-col items-center justify-center  hover:scale-125">
                            <p className="text-white pb-3 text-2xl">jQuery</p>
                            <img src={getAssetsUrl("Skills/jQuery.png")} alt="jQuery" className="w-14 h-14"/>
                        </div>
                    </div>
                    <div className="w-[400px] md:w-[350px] h-[200px] md:h-[200px] md:mx-5 border-4 border-orange-500 rounded-2xl flex flex-col items-center justify-center bg-gradient-to-br from-slate-700 to-slate-500 my-5 shadow-lg shadow-black">
                        <div className="w-[400px] md:w-[350px] h-[100%] flex flex-col items-center justify-center hover:scale-125">
                            <p className="text-white pb-3 text-2xl">React</p>
                            <img src={getAssetsUrl("Skills/React.png")} alt="React" className="w-16 h-16"/>
                        </div>
                    </div>
                    <div className="w-[400px] md:w-[350px] h-[200px]  md:h-[200px] md:mx-5 border-4 border-orange-500 rounded-2xl flex flex-col items-center justify-center bg-gradient-to-br from-slate-700 to-slate-500 my-5 shadow-lg shadow-black">
                        <div className="w-[400px] md:w-[350px] h-[100%] flex flex-col items-center justify-center  hover:scale-125">
                            <p className="text-white pb-3 text-2xl">Bootstrap 5</p>
                            <img src={getAssetsUrl("Skills/Bootstrap5.png")} alt="Bootstrap5" className="w-22 h-14"/>
                        </div>
                    </div>
                    <div className="w-[400px] md:w-[350px] h-[200px] md:h-[200px] md:mx-5 border-4 border-orange-500 rounded-2xl flex flex-col items-center justify-center bg-gradient-to-br from-slate-700 to-slate-500 my-5 shadow-lg shadow-black">
                        <div className="w-[400px] md:w-[350px] h-[100%] flex flex-col items-center justify-center hover:scale-125">
                            <p className="text-white pb-3 text-2xl">Tailwind</p>
                            <img src={getAssetsUrl("Skills/Tailwind.png")} alt="Tailwind" className="w-16 h-16"/>
                        </div>                      
                    </div>
                    
                    <div className="w-[400px] md:w-[350px] h-[200px] md:h-[200px] md:mx-5 border-4 border-orange-500 rounded-2xl flex flex-col items-center justify-center bg-gradient-to-br from-slate-700 to-slate-500 my-5 shadow-lg shadow-black">
                        <div className="w-[400px] md:w-[350px] h-[100%] flex flex-col items-center justify-center hover:scale-125">
                            <p className="text-white pb-3 text-2xl">Git</p>
                            <img src={getAssetsUrl("Skills/Git.png")} alt="Git" className="w-16 h-16"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}