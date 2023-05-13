
import {  Outlet } from "react-router-dom"
import HamburgerNav from "./Components/HamburgerNav"
import Header from "./Components/header.jsx"
import Footer from "./Components/Footer"
import Login from "./Components/LogIn"
//import Admin from "./routes/Admin.jsx"
import { showNavState } from "./atoms/showNavState"
import { useRecoilState } from "recoil"
import { openLoginState } from "./atoms/openLoginState"
import { showResultState } from "./atoms/showResultState"
import ResultContainer from "./Components/ResultContainer"

const Root = () => {
	const [open, setOpen] = useRecoilState(openLoginState);
	const [showNav, setShowNav] = useRecoilState(showNavState)
	const [showResult, setShowResult] = useRecoilState(showResultState)
	setOpen;
	setShowNav;
	setShowResult;

	return (
		
		<>
			<Header />
			{showNav ? <HamburgerNav /> : null}
			{showResult ? <ResultContainer /> : null}
		<main>
			{open ? <Login /> : null}
			<Outlet />
		</main>
			<Footer />
		</>
	)
}

export default Root