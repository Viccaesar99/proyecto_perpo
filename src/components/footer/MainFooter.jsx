import { FooterInfo } from "./FooterInfo";
import { FooterNav } from "./FooterNav";

export function MainFooter() {

    return (
        <div className="w-full h-4/5 flex flex-row items-center justify-center bg-slate-800">
            <FooterNav />
            <FooterInfo />
        </div>
    );
}