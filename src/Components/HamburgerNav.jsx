import { NavLink } from "react-router-dom"
import './HamburgerNav.css'

const HamburgerNav = () => {
	return (
		<nav>
			<ul>
				<li><NavLink to="/">START</NavLink></li>
				<li><NavLink to="products">SOMMARLEKSAKER</NavLink></li>
				<li><NavLink to="about">OM LEKSTUGAN</NavLink></li>
				<li><NavLink>KONTAKT</NavLink></li>
				<li><NavLink>MINA SIDOR</NavLink></li>
				<li><NavLink to="admin">PERSONAL</NavLink></li>
			</ul>
		</nav>
	)

}

export default HamburgerNav