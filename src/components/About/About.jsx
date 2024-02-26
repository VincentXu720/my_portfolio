import React from "react";
import { getAssetsUrl } from "../../utils";
import { MyName } from "./typed"
export const About = ()=>{
    return(
        <>
            <section className="bg-slate-700 h-[5%] items-center flex" id="#About">
                <div className="container m-auto px-8 py-8 flex flex-col md:flex-row items-center md:items-start md:justify-center" >
                    <div className="flex justify-center w-60 h-60">
                        <img className="w-[100%] h-[100%] bg-gradient-to-b from-orange-500 to-orange-600 border-8 border-white rounded-full shadow-lg shadow-black" src={ getAssetsUrl("About/About_Me.png")}/>
                    </div>
                    <div className="flex flex-col md:pl-6 mt-4 md:mt-5 w-[65%] md:w-[50%]">
                        <div className="flex flex-row justify-center pb-2 md:max-w-fit">
                            <a className="w-8 h-8 flex justify-center items-center mr-2 border border-orange-500 rounded-full hover:bg-orange-400 transition ease-in" href="https://www.linkedin.com/in/vincent-4a3046270/">
                                <img className="w-4 h-4" src={getAssetsUrl("Contact/Linkedin.png")}/>
                            </a>
                            <a className="w-8 h-8 flex justify-center items-center border border-orange-500 rounded-full hover:bg-orange-400 transition ease-in" href="https://github.com/VincentXu720">
                                <img className="w-4 h-4" src={getAssetsUrl("Contact/Github.png")}/>
                            </a>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex justify-center items-center md:justify-start">
                                <p className="text-white text-2xl">Hi,我叫</p>
                                <MyName />
                            </div>
                            <p className="w-[95%] text-white my-2 text-xl animate-appear md:text-left text-justify">畢業於台北城市科技大學 資訊工程系，喜歡學習與探索未知事務，勇於接受各式各樣的挑戰，以前端工程師為目標努力中，如果想要聯絡我的話，可以透過下面的表單哦!!</p>
                        </div>                    
                    </div>
                </div>
            </section>
        </>
    )
}