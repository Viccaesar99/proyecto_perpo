
import { Skills } from "./Skills";
import { Titulo } from "../header/Titulo";

export function MainSkills() {

    return (
        <div className="w-full h-56 flex flex-col justify-center items-center gap-10">
            <Titulo value="Skills" style="text-2xl font-bold"/>
            <Skills />
        </div>
    );
}