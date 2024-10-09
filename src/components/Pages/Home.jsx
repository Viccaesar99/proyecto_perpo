import { MainInfo } from '../body/MainInfo.jsx';
import { MainProject } from '../body/MainProject.jsx';


export function Home() {

    return (
        <main className='min-h-96'>
            <MainInfo />
            <MainProject />
        </main>
    );
}