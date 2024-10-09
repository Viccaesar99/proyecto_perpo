import { UserPic } from "./UserPic";
import { UserName } from "./UserName";

export function UserInfo() {

    return (
        <div className="flex items-center justify-center gap-32">
            <UserPic />
            <UserName />
            
        </div>
    );
}