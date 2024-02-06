import React,{ useRef,useEffect }from "react";
import Typed from "typed.js";

export function MyName(){
    const el = useRef(null);
    useEffect (()=>{
        const typed = new Typed(el.current,{
            strings:["許育誠","Vincent"],
            startDelay:150,
            typeSpeed:100,
            backSpeed:100,
            backDelay:150,
            smartBackspace:true,
            showCursor:true,
            loop:true,
        })
        return ()=>{
            typed.destroy();
        };
    },[]);
    return(
        <span className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-t from-amber-500 to-orange-300 ml-2" ref={el}></span>
    )
}