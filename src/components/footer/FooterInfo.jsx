import { Titulo } from "../header/Titulo";
import { ContactInfo } from "./ContactInfo";
import { Social } from "./Social";


export function FooterInfo() {

    return(
        <div className="w-1/2 h-full flex flex-col justify-center items-start gap-5 pl-72">
            <Titulo value="Contacto" style='text-gray-100 text-2xl font-semibold'/>
            <ContactInfo />
            <Social />

            
            
        </div>
    );
}