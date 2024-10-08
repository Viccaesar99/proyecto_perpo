import {BotonNav} from './Boton.jsx'
import { Link } from 'react-router-dom';

export function Nav(){
    return (
        <nav className='w-1/3 flex items-center justify-evenly'>
            <Link className="text-md font-bold font-mono" to="/" >
                Home
            </Link>
            <Link className="text-md font-bold font-mono" to="/projects" >
                Proyectos
            </Link>
            <Link className="text-md font-bold font-mono" to="/about" >
                Sobre mi
            </Link>
            <Link className="text-md font-bold font-mono" to="/contact" >
                Contacto
            </Link>
        </nav>
    );
}
