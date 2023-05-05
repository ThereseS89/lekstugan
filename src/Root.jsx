
import { Outlet } from "react-router-dom"
import HamburgerNav from "./Components/HamburgerNav"
import Header from "./Components/header.jsx"
import Footer from "./Components/footer"
const Root = () => {
	return (
		<>
			<Header />
			<HamburgerNav />
		<main>
			<Outlet />
		</main>
			<Footer />
		</>
	)
}

export default Root