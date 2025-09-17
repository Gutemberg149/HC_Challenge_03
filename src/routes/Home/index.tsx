import { useState } from "react";
import banner from "../../assets/img/banner01.jpg"
import {Info1} from "../../Data/listaInfo"


import type {TipoInfo1} from "../../types/tipoInfo"



export default function Home(){
    const [data1,setData1] = useState<TipoInfo1[]>([])

    
    document.title = "Home";

    return(
        <main>
            <h1 className="font-bold text-3xl mb-5 text-blue-950">Hospital Das Clinicas - Tutorial de Consulta Online</h1>

            <div className="w-[100vw] flex align-center justify-center h-[400px] overflow-hidden relative">
                <img src={banner} alt="" className="w-[80%]"/>
                <div className="absolute w-[350px] text-center font-bold  text-blue-950 top-[35%] text-2xl bg-[white] p-2 rounded-2xl">
                    Aqui você encontra
                tudo que precisa saber
                para sua consulta
                </div>
            </div>
            <section>

            </section>
        </main>
    );
}