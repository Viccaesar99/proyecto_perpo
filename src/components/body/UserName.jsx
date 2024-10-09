import {Titulo} from '../header/Titulo.jsx';
import {Subtitulo} from '../footer/Subtitulo.jsx';


export function UserName() {

    return (

        <div className='flex flex-col items-center justify-center gap-2'>
            <Titulo value="Victory Cuevas" style="text-3xl font-semibold font-sans"/>
            <Subtitulo value='Desarrollador Front End' style="text-lg font-semibold text-gray-300"/>
        </div>
    );
}