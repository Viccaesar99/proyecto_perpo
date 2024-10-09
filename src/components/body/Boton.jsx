export function Boton({value = "Boton", style = ""}) {

    return (
        <button className={style}>
            {value}
        </button>
    );
}