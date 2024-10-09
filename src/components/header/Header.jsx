import {Titulo} from './Titulo.jsx'
import {Nav} from './Nav.jsx'


export function Header() {

	return (
		<header className='col-span-full w-full h-20 flex flex-row items-center justify-around'>
			<Titulo value="PerPo" style='text-2xl font-semibold'/>
			<Nav styles='w-1/3 flex items-center justify-evenly' stylesLink ="text-md font-bold font-mono"/>
		</header>
	);

}
