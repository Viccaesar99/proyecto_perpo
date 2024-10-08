import { Header } from '../header/Header.jsx'
import { Body } from '../body/Body.jsx';
import { Footer } from '../footer/Footer.jsx';

export function Home() {

    return (
        <main className='container m-auto grid grid-cols-3'>
            <Header />
            <Body />
            <Footer />
        </main>
    );
}