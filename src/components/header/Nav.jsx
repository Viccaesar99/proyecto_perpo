import { Link } from 'react-router-dom';

export function Nav({styles = "", stylesLink}){
    return (
        <nav className={styles}>
            <Link className={stylesLink} to="/" >
                Home
            </Link>
            <Link className={stylesLink} to="/projects" >
                Proyectos
            </Link>
            <Link className={stylesLink} to="/about" >
                Sobre mi
            </Link>
            <Link className={stylesLink} to="/contact" >
                Contacto
            </Link>
        </nav>
    );
}
