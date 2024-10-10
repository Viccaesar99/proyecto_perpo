import {Titulo} from "../header/Titulo.jsx"
import {Subtitulo} from "../footer/Subtitulo.jsx"


export function MainContent() {

    return(
        <div className="w-full min-h-96 flex items-center justify-center py-72 flex-col">
            <Titulo value="404" style="text-6xl font-bold"/>
            <Subtitulo value="Pagina no encontrada" style="text-3xl font-bold text-gray-500"/>
        </div>
    );
}