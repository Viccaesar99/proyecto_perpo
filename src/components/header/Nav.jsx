import { Link } from 'react-router-dom';
import { BotonNav } from './BotonNav';

export function Nav({styles = "", stylesLink}){
    return (
        <nav className={styles}>
            <BotonNav value='Home' style={stylesLink}/>
            <BotonNav value='Proyectos' to='/projects' style={stylesLink}/>
            <BotonNav value='Sobre mi' to='/about' style={stylesLink}/>
            <BotonNav value='Contacto' to='/contact' style={stylesLink}/>
        </nav>
    );
}
