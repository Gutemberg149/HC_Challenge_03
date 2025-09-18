import Gutem from "../../assets/img/integrantes/Gutemberg.jpg"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export default  function Integrante () {

    document.title = "Integrantes";
    return(
    <div className="h-[100vh] flex flex-col justify-center items-center">
         <h1 className="text-2xl2xl md:text-4xl text-blue-950 font-bold mb-8">integrantes</h1>
         <div className="w-[1000px] bg-blue-50 flex flex-col justify-center items-center p-9 rounded-4xl" >

            <div  className="w-[300px] bg-white flex flex-col justify-center\ items-center px-2 py-5 rounded-2xl shadow-lg">
              <img src={Gutem} alt="foto do integrate Gutemberg" className="w-[200px] rounded-2xl"/>
              <div className="flex flex-col items-start w-[200px]">
              <p className="text-sm mt-3"><span className="font-bold text-[16px]">Nome:</span> Gutemberg</p>
              <p className="text-sm"><span className="font-bold text-[16px]">RM:</span> 562267</p>
              <p className="text-sm"><span className="font-bold text-[16px]">Turma:</span> 1TDSSP</p>
              <a  href={"https://www.linkedin.com/in/gutemberg-rocha-28757361/"} 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors duration-300">
               <FaLinkedin className="mr-2 text-[22px]" />
               <span>LinkDin</span>
              </a>
              <a  href={"https://github.com/Gutemberg149"} 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors duration-300">
               <FaGithub className="mr-2  text-[22px]" />
               <span>GitHub</span>
              </a>
              </div>
            </div>
         </div>
    </div>)
}