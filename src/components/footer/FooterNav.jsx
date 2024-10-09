import { Nav } from '../header/Nav.jsx';
import { Titulo } from '../header/Titulo.jsx'

export function FooterNav() {

    return (
        <div className="w-1/2 h-full flex flex-col justify-center items-start gap-5 pl-72">
            <Titulo value='PerPo' style='text-2xl text-gray-100 font-bold'/>
            <Nav styles='flex flex-col font-sans font-normal' stylesLink ="text-gray-500 font-bold"/>
        </div>
    );
}