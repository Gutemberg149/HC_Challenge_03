import { useEffect, useState } from "react";
import banner from "../../assets/img/banner01.jpg"

import {Info1,Info2,Info3,Info4,Info5,Info6,Info7,Info8} from "../../Data/listaInfo"
import type {TipoInfo1,TipoInfo2,TipoInfo3,TipoInfo4} from "../../types/tipoInfo"



export default function Home(){
    const [data1,setData1] = useState<TipoInfo1[]>([])
    const [data2,setData2] = useState<TipoInfo2[]>([])
    const [data3,setData3] = useState<TipoInfo3[]>([])
    const [data4,setData4] = useState<TipoInfo1[]>([])
    const [data5,setData5] = useState<TipoInfo1[]>([])
    const [data6,setData6] = useState<TipoInfo1[]>([])
    const [data7,setData7] = useState<TipoInfo1[]>([])
    const [data8,setData8] = useState<TipoInfo4[]>([])

    useEffect(()=>{
        setData1(Info1)
        setData2(Info2)
        setData3(Info3)
        setData4(Info4)
        setData5(Info5)
        setData6(Info6)
        setData7(Info7)
        setData8(Info8)
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


            <section className="flex-col mb-5  bg-blue-50  rounded-4xl px-5 py-5 mt-5">
                {data1.length > 0 && (
            <h2 className="text-center font-bold text-red-700 text-sm md:text-1xl lg:text-2xl py-3">{data2[0].title}</h2>
            )}
             <div className="flex flex-col lg:flex-row lg:flex-wrap w-[80vw] bg-white rounded-4xl items-center justify-between p-2">

                {data1.length > 0 && (
                 <div className="flex items-center justify-center w-full md:w-[500px] flex-col md:flex-row py-6">
                  <p className="text-sm md:text-1xl font-bold text-blue-800 text-center w-[80%] py-1.5">{data1[0].text1}</p>
                 <img src={data1[0].img1} alt={data1[0].alt1} className="w-[300px] mx-1.5"/>
                 </div>
                    )}
                
                {data1.length > 0 && (
                 <div className="flex items-center justify-center w-full md:w-[500px] flex-col md:flex-row py-6">
                  <p className="text-sm md:text-1xl font-bold text-blue-800 text-center w-[80%] py-1.5">{data1[0].text2}</p>
                 <img src={data1[0].img2} alt={data1[0].alt2} className="w-[300px] mx-1.5"/>
                 </div>
                    )}
                 
            </div>
            </section>


            <section className="flex-col mb-5  bg-blue-50  rounded-4xl px-5 py-5">
                 {data1.length > 0 && (
            <h2 className="text-center font-bold text-red-700 text-sm md:text-1xl lg:text-2xl py-3">{data3[0].title}</h2>
                 )}
             <div className="flex flex-col lg:flex-row lg:flex-wrap w-[80vw] bg-white rounded-4xl items-center justify-between p-2">
               
                {data2.length > 0 && (
                 <div className="flex items-center justify-center w-full md:w-[500px] flex-col md:flex-row py-6">
                  <p className="text-sm md:text-1xl font-bold text-blue-800 text-center w-[80%] py-1.5">{data2[0].text1}</p>
                 <img src={data2[0].img1} alt={data2[0].alt1} className="w-[300px] mx-1.5"/>
                 </div>
                    )}
              
                {data2.length > 0 && (
                 <div className="flex items-center justify-center w-full md:w-[500px] flex-col md:flex-row py-6">
                  <p className="text-sm md:text-1xl font-bold text-blue-800 text-center w-[80%] py-1.5">{data2[0].text2}</p>
                 <img src={data2[0].img2} alt={data2[0].alt2} className="w-[300px] mx-1.5"/>
                 </div>
                    )}

                 {data2.length > 0 && (
                 <div className="flex items-center justify-center w-full md:w-[500px] flex-col md:flex-row py-6">
                  <p className="text-sm md:text-1xl font-bold text-blue-800 text-center w-[80%] py-1.5">{data2[0].text3}</p>
                 <img src={data2[0].img3} alt={data2[0].alt3} className="w-[300px] mx-1.5"/>
                 </div>
                    )}

                {data2.length > 0 && (
                 <div className="flex items-center justify-center w-full md:w-[500px] flex-col md:flex-row py-6">
                  <p className="text-sm md:text-1xl font-bold text-blue-800 text-center w-[80%] py-1.5">{data2[0].text4}</p>
                 <img src={data2[0].img4} alt={data2[0].alt4} className="w-[300px] mx-1.5"/>
                 </div>
                    )}

                     {data2.length > 0 && (
                 <div className="flex items-center justify-center w-full md:w-[500px] flex-col md:flex-row py-6">
                  <p className="text-sm md:text-1xl font-bold text-blue-800 text-center w-[80%] py-1.5">{data2[0].text5}</p>
                 <img src={data2[0].img5} alt={data2[0].alt5} className="w-[300px] mx-1.5"/>
                 </div>
                    )}

                     {data2.length > 0 && (
                 <div className="flex items-center justify-center w-full md:w-[500px] flex-col md:flex-row py-6">
                  <p className="text-sm md:text-1xl font-bold text-blue-800 text-center w-[80%] py-1.5">{data2[0].text6}</p>
                 <img src={data2[0].img2} alt={data2[0].alt6} className="w-[300px] mx-1.5"/>
                 </div>
                    )}
                  
            </div>


            </section>


            <section className="flex-col mb-5  bg-blue-50  rounded-4xl px-5 py-5 mt-5">
                 {data3.length > 0 && (
            <h2 className="text-center font-bold text-red-700 text-sm md:text-1xl lg:text-2xl py-3">{data3[0].title}</h2>
                 )}
             <div className="flex flex-col lg:flex-row lg:flex-wrap w-[80vw] bg-white rounded-4xl items-center justify-between p-2 justify-center">

                
                {data3.length > 0 && (
                 <div className="flex items-center justify-center w-full md:w-[500px] flex-col md:flex-row py-6">
                  <p className="text-sm md:text-1xl font-bold text-blue-800 text-center w-[80%] py-1.5">{data3[0].text1}</p>
                 <img src={data3[0].img1} alt={data1[0].alt1} className="w-[300px] mx-1.5"/>
                 </div>
                    )}
            </div>
            </section>


            <section className="flex-col mb-5  bg-blue-50  rounded-4xl px-5 py-5 mt-5">
                 {data4.length > 0 && (
            <h2 className="text-center font-bold text-red-700 text-sm md:text-1xl lg:text-2xl py-3">{data4[0].title}</h2>
                 )}
             <div className="flex flex-col lg:flex-row lg:flex-wrap w-[80vw] bg-white rounded-4xl items-center justify-between p-2">

                {data4.length > 0 && (
                 <div className="flex items-center justify-center w-full md:w-[500px] flex-col md:flex-row py-6">
                  <p className="text-sm md:text-1xl font-bold text-blue-800 text-center w-[80%] py-1.5">{data4[0].text1}</p>
                 <img src={data4[0].img1} alt={data1[0].alt1} className="w-[300px] mx-1.5"/>
                 </div>
                    )}
                
                {data4.length > 0 && (
                 <div className="flex items-center justify-center w-full md:w-[500px] flex-col md:flex-row py-6">
                  <p className="text-sm md:text-1xl font-bold text-blue-800 text-center w-[80%] py-1.5">{data4[0].text2}</p>
                 <img src={data4[0].img2} alt={data4[0].alt2} className="w-[300px] mx-1.5"/>
                 </div>
                    )}
                 
            </div>
            </section>
 

        <section className="flex-col mb-5  bg-blue-50  rounded-4xl px-5 py-5 mt-5">
             {data5.length > 0 && (
            <h2 className="text-center font-bold text-red-700 text-sm md:text-1xl lg:text-2xl py-3">{data5[0].title}</h2>
             )}
               <div className="flex flex-col lg:flex-row lg:flex-wrap w-[80vw] bg-white rounded-4xl items-center justify-between p-2">

                {data5.length > 0 && (
                 <div className="flex items-center justify-center w-full md:w-[500px] flex-col md:flex-row py-6">
                  <p className="text-sm md:text-1xl font-bold text-blue-800 text-center w-[80%] py-1.5">{data5[0].text1}</p>
                 <img src={data1[0].img1} alt={data1[0].alt1} className="w-[300px] mx-1.5"/>
                 </div>
                    )}
                
                {data5.length > 0 && (
                 <div className="flex items-center justify-center w-full md:w-[500px] flex-col md:flex-row py-6">
                  <p className="text-sm md:text-1xl font-bold text-blue-800 text-center w-[80%] py-1.5">{data5[0].text2}</p>
                 <img src={data5[0].img2} alt={data5[0].alt2} className="w-[300px] mx-1.5"/>
                 </div>
                    )}
                 
              </div>
            </section>

             <section className="flex-col mb-5  bg-blue-50  rounded-4xl px-5 py-5 mt-5">
                 {data6.length > 0 && (
              <h2 className="text-center font-bold text-red-700 text-sm md:text-1xl lg:text-2xl py-3">{data6[0].title}</h2>
                 )}
               <div className="flex flex-col lg:flex-row lg:flex-wrap w-[80vw] bg-white rounded-4xl items-center justify-between p-2">

                {data6.length > 0 && (
                 <div className="flex items-center justify-center w-full md:w-[500px] flex-col md:flex-row py-6">
                  <p className="text-sm md:text-1xl font-bold text-blue-800 text-center w-[80%] py-1.5">{data6[0].text1}</p>
                 <img src={data6[0].img1} alt={data6[0].alt1} className="w-[300px] mx-1.5"/>
                 </div>
                    )}
                
                {data6.length > 0 && (
                 <div className="flex items-center justify-center w-full md:w-[500px] flex-col md:flex-row py-6">
                  <p className="text-sm md:text-1xl font-bold text-blue-800 text-center w-[80%] py-1.5">{data6[0].text2}</p>
                 <img src={data6[0].img2} alt={data6[0].alt2} className="w-[300px] mx-1.5"/>
                 </div>
                    )}
                 
              </div>
            </section>

              <section className="flex-col mb-5  bg-blue-50  rounded-4xl px-5 py-5 mt-5">
                 {data7.length > 0 && (
              <h2 className="text-center font-bold text-red-700 text-sm md:text-1xl lg:text-2xl py-3">{data7[0].title}</h2>
                 )}
               <div className="flex flex-col lg:flex-row lg:flex-wrap w-[80vw] bg-white rounded-4xl items-center justify-between p-2">

                {data7.length > 0 && (
                 <div className="flex items-center justify-center w-full md:w-[500px] flex-col md:flex-row py-6">
                  <p className="text-sm md:text-1xl font-bold text-blue-800 text-center w-[80%] py-1.5">{data7[0].text1}</p>
                 <img src={data7[0].img1} alt={data7[0].alt1} className="w-[300px] mx-1.5"/>
                 </div>
                    )}
                
                {data7.length > 0 && (
                 <div className="flex items-center justify-center w-full md:w-[500px] flex-col md:flex-row py-6">
                  <p className="text-sm md:text-1xl font-bold text-blue-800 text-center w-[80%] py-1.5">{data7[0].text2}</p>
                 <img src={data7[0].img2} alt={data7[0].alt2} className="w-[300px] mx-1.5"/>
                 </div>
                    )}
                 
              </div>
            </section>

              <section className="flex-col mb-5  bg-blue-50  rounded-4xl px-5 py-5 mt-5">
                 {data8.length > 0 && (
              <h2 className="text-center font-bold text-red-700 text-sm md:text-1xl lg:text-2xl py-3">{data8[0].title}</h2>
                 )}
               <div className="flex flex-col lg:flex-row lg:flex-wrap w-[80vw] bg-white rounded-4xl items-center justify-between p-2">

                {data8.length > 0 && (
                 <div className="flex items-center justify-center w-full md:w-[500px] flex-col md:flex-row py-6">
                  <p className="text-sm md:text-1xl font-bold text-blue-800 text-center w-[80%] py-1.5">{data8[0].text1}</p>
                 <img src={data8[0].img1} alt={data6[0].alt1} className="w-[300px] mx-1.5"/>
                 </div>
                    )}
                
                {data6.length > 0 && (
                 <div className="flex items-center justify-center w-full md:w-[500px] flex-col md:flex-row py-6">
                  <p className="text-sm md:text-1xl font-bold text-blue-800 text-center w-[80%] py-1.5">{data8[0].text2}</p>
                 <img src={data8[0].img2} alt={data8[0].alt2} className="w-[300px] mx-1.5"/>
                 </div>
                    )}

                     {data8.length > 0 && (
                 <div className="flex items-center justify-center w-full md:w-[500px] flex-col md:flex-row py-6">
                  <p className="text-sm md:text-1xl font-bold text-blue-800 text-center w-[80%] py-1.5">{data8[0].text3}</p>
                 <img src={data8[0].img3} alt={data8[0].alt3} className="w-[300px] mx-1.5"/>
                 </div>
                    )}
                
                {data6.length > 0 && (
                 <div className="flex items-center justify-center w-full md:w-[500px] flex-col md:flex-row py-6">
                  <p className="text-sm md:text-1xl font-bold text-blue-800 text-center w-[80%] py-1.5">{data8[0].text4}</p>
                 <img src={data8[0].img4} alt={data8[0].alt4} className="w-[300px] mx-1.5"/>
                 </div>
                    )}
                 
              </div>
            </section>
 
        </main>
    );
}