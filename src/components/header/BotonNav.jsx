
import { Link } from "react-router-dom";

export function BotonNav({value = "Button", to="/", style}) {

    return (
        <Link className={style} to={to}>
            {value}
        </Link>
    );
}
