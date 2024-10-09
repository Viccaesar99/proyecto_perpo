import { Icon } from "./Icon";


export function Social () {

    return (
        <div className="w-48 h-10 text-2xl flex justify-start items-center gap-5 text-gray-50">
            <Icon icon="fa-brands fa-facebook"/>
            <Icon icon="fa-brands fa-instagram"/>
            <Icon icon="fa-brands fa-youtube"/>
        </div>
    );

}