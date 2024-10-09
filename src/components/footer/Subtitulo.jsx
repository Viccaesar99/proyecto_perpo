export function Subtitulo({value = "Subtitulo", style}) {

    return (
        <h3 className={style}>
            {value}
        </h3>
    );
}