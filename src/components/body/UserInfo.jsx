import { UserPic } from "./UserPic";
import { UserName } from "./UserName";

export function UserInfo({style = ""}) {

    return (
        <div className={style}>
            <UserPic />
            <UserName />
            
        </div>
    );
}