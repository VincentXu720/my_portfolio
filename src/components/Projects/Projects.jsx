import React from "react";
import { getAssetsUrl } from "../../utils";

export const Projects = ()=>{
    return(
        <>
            <section className="bg-slate-700 py-5 flex justify-center" id="Projects">
                <div className="container m-auto flex flex-col items-center">
                    <div className="flex flex-row justify-center">
                        <p className="text-white text-3xl">My</p>
                        <p className="text-orange-500 text-3xl">Project</p>
                    </div>
                    <div className="w-[95%] md:w-[700px] flex flex-col items-center mt-5 py-5 px-5 border-2 border-orange-500 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 shadow-lg shadow-black">
                        <p className="text-2xl text-orange-500 text-center my-2">克隆Tesla官網</p>
                        <div className="flex flex-col md:flex-row items-center">
                            <img className="w-[300px] h-[150px]" src={getAssetsUrl("Projects/Clone_Tesla.png")} alt="Clone Tesla Website" />
                            <div className="w-[300px] mt-3 md:mt-0 md:ml-3 flex flex-col items-start justify-around md:justify-around">
                                <p className="text-white leading-8">使用HTML/CSS進行網頁的架構</p>
                                <p className="text-white leading-8">使用Javascript，讓網頁與使用者互動</p>
                                <p className="text-white leading-8">使用CSS手刻RWD響應式網頁</p>
                            </div>
                        </div>
                        <div className="w-[300px] flex flex-row justify-between mt-5">
                            <a href="https://github.com/VincentXu720/clone_Tesla" target="_blank" className="w-[120px] bg-orange-300 hover:bg-orange-500 transition ease-in border-black rounded-full">
                                <p className="text-center text-white">Github</p>
                            </a>
                            <a href="https://vincentxu720.github.io/my_portfolio/" target="_blank" className="w-[120px] bg-orange-300 hover:bg-orange-500 transition ease-in border-black rounded-full">
                                <p className="text-center text-white" >Demo</p>
                            </a>
                        </div>
                    </div>
                    <div className="w-[95%] md:w-[700px] flex flex-col items-center mt-5 py-5 px-5 border-2 border-orange-500 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 shadow-lg shadow-black">
                        <p className="text-2xl text-orange-500 text-center my-2">電影網站</p>
                        <div className="flex flex-col md:flex-row md:items-center">
                            <img className="w-[300px] h-[150px] md:h-[160px]" src={getAssetsUrl("Projects/Movie.png")} alt="Movie" />
                            <div className="w-[300px] mt-3 md:m-0 md:ml-3 flex flex-col justify-around">
                                <p className="text-white leading-8">使用HTML/SCSS 網頁架構</p>
                                <p className="text-white leading-8">使用HTML/SCSS 網頁架構</p>
                                <p className="text-white leading-8">使用Swiper進行電影輪播圖功能</p>
                                <p className="text-white leading-8">使用Bootstrap 5 RWD響應式設計</p>
                                <p className="text-white leading-8">使用jQuery的ajax串接TMDB電影庫的API</p>
                                <p className="text-white leading-8">使用jQuery，讓網頁可以與使用者互動</p>
                            </div>
                        </div>
                        <div className="w-[300px] flex flex-row justify-between mt-5">
                            <a href="https://github.com/VincentXu720/Movie_Web" target="_blank" className="w-[120px] bg-orange-300 hover:bg-orange-500 transition ease-in border-2 border-black rounded-full">
                                <p className="text-center text-white" >Github</p>
                            </a>
                            <a href="https://vincentxu720.github.io/Movie_Web/" target="_blank" className="w-[120px] bg-orange-300 hover:bg-orange-500 transition ease-in border-2 border-black rounded-full">
                                <p className="text-center text-white" >Demo</p>
                            </a>
                        </div>
                    </div>
                    <div className="w-[95%] md:w-[700px] flex flex-col items-center mt-5 py-5 px-5 border-2 border-orange-500 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 shadow-lg shadow-black">
                        <p className="text-2xl text-orange-500 text-center my-2">個人介紹網站</p>
                        <div className="flex flex-col md:flex-row items-center">
                            <img className="w-[300px] h-[150px]" src={getAssetsUrl("Projects/portfolio.png")} alt="Clone Tesla Website" />
                            <div className="w-[300px] mt-3 md:mt-0 md:ml-3 flex flex-col items-start justify-around md:justify-around">
                                <p className="text-white leading-8">使用React進行網頁的架構與畫面渲染</p>
                                <p className="text-white leading-8">使用useState，讓網頁與使用者互動</p>
                                <p className="text-white leading-8">使用tailwind，增加網頁的樣式與動畫</p>
                                <p className="text-white leading-8">使用EmailJS套件和sweetalert2套件，讓使用者方便與我聯絡</p>
                            </div>
                        </div>
                        <div className="w-[300px] flex flex-row justify-between mt-5">
                            <a href="https://github.com/VincentXu720/my_portfolio" target="_blank" className="w-[120px] bg-orange-300 hover:bg-orange-500 transition ease-in border-black rounded-full">
                                <p className="text-center text-white">Github</p>
                            </a>
                            <a href="https://vincentxu720.github.io/clone_Tesla/" target="_blank" className="w-[120px] bg-orange-300 hover:bg-orange-500 transition ease-in border-black rounded-full">
                                <p className="text-center text-white" >Demo</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}