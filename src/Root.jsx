
import { Outlet } from "react-router-dom"
import HamburgerNav from "./Components/HamburgerNav"
import Header from "./Components/header.jsx"
import Footer from "./Components/Footer"
import Login from "./Components/LogIn"
//import Admin from "./routes/Admin.jsx"
import { showNavState } from "./atoms/showNavState"
import { useRecoilState } from "recoil"
import { openLoginState } from "./atoms/openLoginState"

const Root = () => {
	const [open, setOpen] = useRecoilState(openLoginState);
	const [showNav, setShowNav] = useRecoilState(showNavState)
	return (
		<>
			<Header />
			{showNav ? <HamburgerNav /> : null}
		<main>
			{open ? <Login /> : null}
			{/* <Admin /> */}
			<Outlet />
		</main>
			<Footer />
		</>
	)
}

export default Root