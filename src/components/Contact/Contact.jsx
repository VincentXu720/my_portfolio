import React,{ useState }from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'
import { email , service_id , template_id , public_key } from "./config";

export const Contact = () => { 
    const [Name,setName] = useState('')
    const [Email,setEmail] = useState('')
    const [Message,setMessage] = useState('')
    const [showError,setShowError] = useState(false)
    const [Loading,setLoading] = useState(false)

    const CheckMessage = ()=>{
        if(Name === '' || Message === '' || Email === ''){
            setShowError(true)
        }else{
            setShowError(false)
            setLoading(true)
        }
    }
    const [form,setForm] = useState({
        name:"",
        email:"",
        message:"",
    })
    const handleChange = (e)=>{
        // e.target會是物件，所以透過解構賦值去讀取物件中的value屬性
        // name 也是 e.target物件中的name
        const {name,value} = e.target
        setForm({
            ...form,
            [name] : value
        })
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(Name != '' && Email != '' && Message != ''){
            emailjs.send(service_id,template_id,{
                from_name:form.name,
                to_name:"vincent",
                from_email:form.email,
                to_email:email,
                message:form.message,
            },public_key)
            .then((result)=>console.log("result",result))
            .catch((error)=>console.log("error",error))
        }
    }
    
    const SendingMessage = (e)=>{
        // sweetAlert 2
        const sendloading = withReactContent(Swal)
        sendloading.fire({
            title:"Send Success",
            icon:"success",
            timer:"1000",
            showConfirmButton:true,
        })
        setTimeout(()=>{
            setLoading(false)
            setName('')
            setEmail('')
            setMessage('')
        },1000)
    }


    return (
        <>
            <section id="Contact">
                <div className="container m-auto flex flex-col items-center pt-5">
                    <div className="flex flex-row justify-center">
                        <p className="text-white text-3xl">Contact</p>
                        <p className="text-orange-500 text-3xl">Me</p>
                    </div>
                    <div className="w-[80%] flex flex-col items-center my-5 py-4 border-4 border-orange-500 rounded-lg shadow-lg shadow-black bg-gradient-to-b from-slate-700 to-slate-500">
                        <form className="w-[70%] flex flex-col items-center"
                            onSubmit={(e)=>{
                                e.preventDefault()
                                handleSubmit(e)
                                {Loading && SendingMessage(e)}
                            }}
                        >
                            <div className="w-[100%]">
                                <input className="w-[100%] border-2 border-slate-300 rounded-sm bg-transparent text-white" placeholder="請輸入名字" name="name" type="text" autoComplete="off" value={Name}
                                    onChange={e=>{
                                        setName(e.target.value)
                                        handleChange(e)
                                    }} 
                                />
                                {showError && Name === '' && <p className="text-red-600 text-sm mt-1 text-left">名字不能是空白</p>}
                            </div>
                            <div className="w-[100%]">
                                <input className="w-[100%] border-2 border-slate-300 rounded-sm bg-transparent text-white mt-2" placeholder="請輸入Email" name="email" type="email" autoComplete="off" value={Email}
                                    onChange={(e)=>{
                                        setEmail(e.target.value)
                                        handleChange(e)
                                    }}  
                                />
                                {showError && Email === '' && <p className="text-red-600 text-sm mt-2">信箱不能空白</p>}
                            </div>
                            <div className="w-[100%] mt-4">
                                <textarea className="w-[100%] h-[300px] border-2 border-slate-300 bg-transparent text-white resize-none" placeholder="請輸入想要對我說的話" name="message" type="text" value={Message} 
                                    onChange={(e)=>{
                                        setMessage(e.target.value)
                                        handleChange(e)
                                    }}
                                ></textarea>
                                {showError && Message === '' && <p className="text-red-500 text-sm">訊息不能空白</p>}
                            </div>
                            <button className="w-[150px] h-[40px] mt-3 bg-orange-400 border-2 border-slate-700 rounded-sm hover:bg-orange-600 transition ease-in shadow-black"
                                onClick={CheckMessage}
                            >
                                {Loading?"Sending...":"Send"}
                            </button>
                        </form>
                    </div>
              </div>
            </section>
        </>
    )
}  