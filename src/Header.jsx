import logo from "../imgs/Lekstugan-Logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import './header.css'

const Header = () => {
	return (
	<header>
		<FontAwesomeIcon icon={faBars} />
		<div className="logo-container">
			<img src={logo} />
		</div>
		<FontAwesomeIcon
						className="cart" 
						icon={faCartShopping} />
	</header>
	)
}

export default Header