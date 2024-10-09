import { Titulo } from "../header/Titulo";
import { ProjectContainer } from "./ProjectContainer";
import { Boton } from "./Boton";


export function MainProject() {

    return (
        <div className="min-h-96 flex flex-col justify-center items-center gap-5 py-56">
            <Titulo value="Proyecto de ejemplo" style="text-2xl font-bold"/>
            <ProjectContainer />
            <Boton value="Ver Proyectos" style="w-48 h-10 rounded-md text-gray-100 font-bold font-mono bg-slate-900"/>
            
        </div>
    );
}