import { NavLink } from "react-router-dom"
import './HamburgerNav.css'

const HamburgerNav = () => {
	return (
		<nav>
			<ul>
				<div className="background"><li className="li-start"><NavLink to="/">START</NavLink></li></div>
				<li className="li-products"><NavLink to="products">SOMMARLEKSAKER</NavLink></li>
				<li className="li-about"><NavLink to="about">OM LEKSTUGAN</NavLink></li>
				<li><NavLink>KONTAKT</NavLink></li>
				<div className="background-green">
				<li className="nav-cart"><NavLink to="/cart">VARUKORGEN</NavLink></li>
				</div>
			</ul>
		</nav>
	)

}

export default HamburgerNav