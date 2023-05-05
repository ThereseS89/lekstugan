import logo from "/imgs/Lekstugan-Logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import './header.css'
import { useState } from "react";

const Header = () => {
	const [showNav, setShowNav] = useState(false)

	function handleClickNav() {
		if (!showNav) {
			setShowNav(true)
		} else {
			setShowNav(false)
		}
	}

	return (
	<header>
		
		<div className="logo-container">
			<FontAwesomeIcon id="hamburger-icon" icon={faBars} onClick={()=> handleClickNav()}/>
			<img src={logo} />
			<div className="spacer"></div>
			<div className="cart">
			<FontAwesomeIcon
						icon={faCartShopping}
						id="cart-icon" />
						</div>
		</div>
		<div className="searchBar">
		<input
		placeholder="Sök produkt"
		className="search-input" />
			<div className="search-icon"><FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#000000",}} />
			</div>
		</div>
		
		
	</header>
	)
}

export default Header