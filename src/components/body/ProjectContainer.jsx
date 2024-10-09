import { Titulo } from "../header/Titulo.jsx";
import { Subtitulo } from "../footer/Subtitulo.jsx";
import ProjectImage from "../../assets/img/Project_Capture_JFrases.png"


export function ProjectContainer() {

    return (
        <div className="h-80 w-96 flex flex-col justify-center items-start gap-2 shadow-md hover:shadow-lg hover:cursor-pointer">
            <img src={ProjectImage} alt="Project Capture" className="object-cover w-full h-3/5 rounded-b-2xl"/>
            <Titulo value="JFrases" style="text-xl text-gray-900 font-bold mx-5"/>
            <Subtitulo value="Una pagina web de frases" style="text-gray-500 mx-5"/>
        </div>
    );


}