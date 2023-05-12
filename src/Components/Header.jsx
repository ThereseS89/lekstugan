import logo from "/imgs/Lekstugan-Logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import './header.css'
import { useRecoilState } from "recoil";
import { showNavState } from "../atoms/showNavState";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { storeApiData } from "../atoms/storeApiData"
import { resultState } from "../atoms/resultState";
import { getProducts } from "../Apifunctions/getProducts";
import { showResultState } from "../atoms/showResultState";

function stringIncludes(longString, shortString) {
	let ls = longString.toLowerCase()
	let ss = shortString.toLowerCase()
	return ls.includes(ss)
}


const Header = () => {
const [showResult, setShowResult] = useRecoilState(showResultState)
const [showNav, setShowNav] = useRecoilState(showNavState)
const [summerToys, setSummerToys] = useRecoilState(storeApiData)
const [resultSummerToy, setResultSummerToy] = useRecoilState(resultState)
const [showSearch, setShowSearch ] = useState(false)
showResult;
// Göra en funktion som söker i storeAPIdata och visar
// pushar i den nya datan i en recoilstate alltså sökresultatet och sedan kan jag mappa ut sökresultatet i min andra komponent.
console.log('Match: ', resultSummerToy)

function summerToyMatch(summerToy, SearchString) {
	
	if (stringIncludes(summerToy.name, SearchString)){ setShowResult(true)
		return true
	} 
}

	useEffect(() => {
		async function fetchData() {
			const summerData = await getProducts();
			setSummerToys(summerData)
		}
		fetchData()
	}, []);

	const handleChange = event => {
		let SearchString = event.target.value
		setResultSummerToy(summerToys.filter(summerToy => summerToyMatch(summerToy, SearchString)))
		console.log(resultSummerToy)
	}

	console.log(showNav)
	function handleClickNav() {
		console.log('clicked on hamburgermenu')
		if (!showNav) {
			setShowNav(true)
		} else {
			setShowNav(false)
		}
		console.log(showNav)
	}

	
	function showSearchBar() {
		console.log('search: Du klickade')
		if (!showSearch) {
			setShowSearch(true)
		} else {
			setShowSearch(false)
		}
		console.log('Du klickade på sök ', showSearch)
		
	}

	return (
	<header>
		
		<div className="logo-container">
		{showNav ? <FontAwesomeIcon
		id="close-Icon" 
		onClick={() => setShowNav(false)} icon={faXmark} /> :
			<FontAwesomeIcon id="hamburger-icon" icon={faBars} onClick={()=> handleClickNav()}/> }
			<img src={logo} />
			<div className="spacer"></div>
			<Link to="cart">
				<div className="cart">
				<FontAwesomeIcon
						icon={faCartShopping}
						id="cart-icon" />
						</div>
			</Link>
		</div>
		
			<ul className="wideNav">
				<NavLink id="links" to="products"><li>SOMMARLEKSAKER</li></NavLink>
				<NavLink to="errorpage" id="links"><li>OM LEKSTUGAN</li></NavLink>
				<NavLink id="links"><li>KONTAKT</li></NavLink ><li><FontAwesomeIcon 
				onClick={()=> showSearchBar()}
				id="search-icon-wide" icon={faMagnifyingGlass} /></li>{showSearch ?<input 
				onChange={handleChange}
				type="text"
				placeholder="Sök produkt"
				className="search-input-wide" /> : null}
			</ul>
		
		<div className="searchBar">
			<input
			onChange={handleChange}
			type="text"
			placeholder="Sök produkt"
			className="search-input" />
				<div className="search-icon"><FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#000000",}} />
			</div>
		</div>
		
		
	</header>
	)
}

export default Header