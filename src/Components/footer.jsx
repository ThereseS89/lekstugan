import "./footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faFacebook} from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom"



const Footer = () => {
	return (
		<footer>
			<h3>Kundservice</h3>
			<div className="call-container">
				<h4>Ring oss</h4> <FontAwesomeIcon icon={faPhone} />
			</div>	
				<p>049-47 48 76</p>
			
			<div className="mail-container">
				<h4>Mejla oss</h4> <FontAwesomeIcon icon={faEnvelope} />
			</div>
				<p>info@lekstugan.se</p>
			<h4>Sociala Medier</h4>
			<div className="social-media-icons-container">
				<FontAwesomeIcon icon={faLinkedinIn} />
				<FontAwesomeIcon icon={faInstagram} />
				<FontAwesomeIcon icon={faFacebook} />
				<FontAwesomeIcon icon={faYoutube} />
			</div>
			<Link to="/"><p>Startsidan</p></Link>
		</footer>
	)
} 

export default Footer