import { UserInfo } from "./UserInfo.jsx";
import { UserDescription } from "./UserDescription.jsx";

export function MainInfo() {
    return (
        <main className="flex flex-col items-center justify-center min-h-80 gap-10 py-56">
            <UserInfo />
            <UserDescription />
            
            

        </main>
    );
}