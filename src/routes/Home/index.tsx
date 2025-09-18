import { useEffect, useState } from "react";
import banner from "../../assets/img/banner01.jpg"

import {InfotTutorial} from "../../Data/listaInfo"
import type {TipoInfoAll} from "../../types/tipoInfo"




export default function Home(){
    const [datas,setDatas] = useState<TipoInfoAll[]>([])
   useEffect(()=>{
      setDatas(InfotTutorial)
   },[])

    document.title = "Home";

    return(
        <main >
            <h1 className="font-bold text-[15px] md:text-2xl lg:text-3xl mb-5 text-blue-950 py-2 text-center">Hospital Das Clinicas - Tutorial de Consulta Online</h1>

            <div className="w-[100vw] flex align-center justify-center h-[400px] overflow-hidden relative">
                <img src={banner} alt="" className="w-[80%]"/>
                <div className="absolute w-[150px] md:w-[350px] text-center font-bold  text-blue-950 top-[35%] text-l md:text-2xl bg-[white] p-3 rounded-2xl">
                    Aqui você encontra
                    tudo que precisa saber
                    para sua consulta
                </div>
            </div>
       
            {datas.map((data)=>{
               return <section key={data.id} className="flex-col mb-5  bg-blue-50  rounded-4xl px-5 py-5 mt-5">

                  <h2 className="text-center font-bold text-red-700 text-sm md:text-1xl lg:text-2xl py-3">{data.title}</h2>

                <div className="flex flex-col lg:flex-row lg:flex-wrap w-[80vw] bg-white rounded-4xl items-center justify-between p-2">

           
                   <div className="flex items-center justify-center w-full md:w-[500px] flex-col md:flex-row py-6">
                     <p className="text-sm md:text-1xl font-bold text-blue-800 text-center w-[80%] py-1.5">{data.text1}</p>
                     <img src={data.img1} alt={data.alt1} className="w-[300px] mx-1.5"/>
                   </div>
                 
                
          
                  <div className="flex items-center justify-center w-full md:w-[500px] flex-col md:flex-row py-6">
                    <p className="text-sm md:text-1xl font-bold text-blue-800 text-center w-[80%] py-1.5">{data.text2}</p>
                    <img src={data.img2} alt={data.alt2} className="w-[300px] mx-1.5"/>
                  </div>
                  
                 
               </div>
               </section>
            })}
        </main>
    );
}