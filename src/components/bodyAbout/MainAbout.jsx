import {UserInfo} from "../body/UserInfo.jsx"
import { UserDescriptionFull } from "./UserDescriptionFull.jsx";




export function MainAbout() {

    return (
        <div className="min-h-96 w-full py-32 flex flex-col justify-center items-center gap-10">
            <UserInfo style="flex items-center justify-center gap-20 flex-col"/>
            <UserDescriptionFull />


        </div>
    );

}