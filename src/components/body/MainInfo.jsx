import { UserInfo } from "./UserInfo.jsx";
import { UserDescription } from "./UserDescription.jsx";
import { BotonNav } from "../header/BotonNav.jsx";

export function MainInfo() {
    return (
        <main className="flex flex-col items-center justify-center min-h-80 gap-10 py-56">
            <UserInfo />
            <UserDescription />
            <BotonNav to="/about" value="Ver mas" style="w-48 h-10 rounded-md text-gray-100 font-bold font-mono bg-slate-900 flex items-center justify-center" />
            
            

        </main>
    );
}