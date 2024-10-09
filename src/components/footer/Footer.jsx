import { MainFooter } from "./MainFooter";
import { Copy } from "./Copy";

export function Footer (){

    return(
        <footer className="col-span-full h-72 flex flex-col items-center justify-center">
            <MainFooter />
            <Copy />

        </footer>
    );
}