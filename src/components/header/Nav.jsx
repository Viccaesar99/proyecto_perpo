import {Boton} from './Boton.jsx'

export function Nav(){
    return (
        <nav className='w-1/3 flex items-center justify-evenly'>
            <Boton value="Home"/>
            <Boton value="Proyectos"/>
            <Boton value="Sobre mi"/>
            <Boton value="Contacto"/>
        </nav>
    );
}
