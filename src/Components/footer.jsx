import "./footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faFacebook} from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom"
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons"
import { useRecoilState } from "recoil"
import { openLoginState } from "../atoms/openLoginState"



const Footer = () => {
const [open, setOpen] = useRecoilState(openLoginState);
	
	
	const openLogin = () => {
		console.log("Funktionen körs");
		if (!open) {
			setOpen(true)
		} else {
			setOpen(false)
		}
		window.scrollTo(0, 0);
	};

	console.log("open:", open);

	return (
		<div className="wrapper">
		

		<footer>
			<h3>Kundservice</h3>
			<div className="call-container">
				<h4>Ring oss</h4> <FontAwesomeIcon icon={faPhone} />
			</div>	
				<p className="number">049-47 48 76</p>
			
			<div className="mail-container">
				<h4>Mejla oss</h4> <FontAwesomeIcon icon={faEnvelope} />
			</div>
				<p>info@lekstugan.se</p>
			<h4 className="social">Sociala Medier</h4>
			<div className="social-media-icons-container">
				<FontAwesomeIcon icon={faLinkedinIn} />
				<FontAwesomeIcon icon={faInstagram} />
				<FontAwesomeIcon icon={faFacebook} />
				<FontAwesomeIcon icon={faYoutube} />
			</div>
			<Link className="start-link" to="/"><p>Startsidan</p></Link>
			<span className="staff-container">
			<p onClick={()=> openLogin()}>LOGGA IN</p><FontAwesomeIcon onClick={()=> openLogin()} icon={faArrowRightToBracket} />
			</span>
		</footer>
		</div>
	)
} 

export default Footer