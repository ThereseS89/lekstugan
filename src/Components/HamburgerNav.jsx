import { NavLink } from "react-router-dom"
import { useRecoilState } from "recoil"
import './HamburgerNav.css'
import { showNavState } from "../atoms/showNavState"



const HamburgerNav = () => {
const [showNav, setShowNav] = useRecoilState(showNavState)
showNav;

	return (
		<nav>
			<ul>
				<div className="background">
					<li 
					className="li-start">
						<NavLink onClick={() => (setShowNav(false))} to="/">START</NavLink>
						</li>
				</div>
					<li className="li-products">
						<NavLink onClick={() => (setShowNav(false))}to="products">SOMMARLEKSAKER</NavLink>
					</li>
					<li className="li-about">
						<NavLink onClick={() => (setShowNav(false))}to="errorpage">OM LEKSTUGAN</NavLink>
					</li>
					<li>
						<NavLink onClick={() => (setShowNav(false))}>KONTAKT</NavLink>
					</li>

				<div className="background-green">
					<li className="nav-cart">
						<NavLink onClick={() => (setShowNav(false))} to="/cart">VARUKORGEN</NavLink>
					</li>
				</div>
			</ul>
		</nav>
	)

}

export default HamburgerNav