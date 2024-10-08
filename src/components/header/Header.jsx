import {Titulo} from './Titulo.jsx'
import {Nav} from './Nav.jsx'


export function Header() {

	return (
		<header className='col-span-3'>
			<Titulo value="PerPo"/>
			<Nav />
		</header>
	);

}
