
import { Outlet } from "react-router-dom"
import HamburgerNav from "./Components/HamburgerNav"
import Header from "./Components/header.jsx"
import Footer from "./Components/footer"
import { showNavState } from "./atoms/showNavState"
import { useRecoilState } from "recoil"


const Root = () => {
	const [showNav, setShowNav] = useRecoilState(showNavState)
	return (
		<>
			<Header />
			{showNav ? <HamburgerNav /> : null}
		<main>
			<Outlet />
		</main>
			<Footer />
		</>
	)
}

export default Root