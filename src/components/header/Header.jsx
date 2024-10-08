import {Titulo} from './Titulo.jsx'
import {Nav} from './Nav.jsx'


export function Header() {

	return (
		<header className='col-span-full w-full h-20 flex flex-row items-center justify-around'>
			<Titulo value="PerPo"/>
			<Nav />
		</header>
	);

}
