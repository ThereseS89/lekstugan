import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useLocation } from "react-router-dom"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import './Stylesheet/detailpage.css'



const DetailPage = () => {
	const location = useLocation()
	const product = location.state?.product;
	console.log("location: ", location)
	return(
		
		<section>
		
			<div className="head-container-detail">
				<h2 className="head-detail">
					{}
				</h2>
			</div>
			<div className="grid-layout-detail">
			<img src="./imgs/aquaplay.png" />
			<div className="information-text-container">
				<p>Finns i webblager <FontAwesomeIcon icon={faCheck} /> </p>
				<p>Uppskattad leveranstid 1-3 dagar</p>
			</div>
			<div className="price-container-detail">
				<p></p>
			</div>
			<button className="detail-btn">
				<FontAwesomeIcon
						icon={faCartShopping}
						id="cart-icon-product" /> Lägg i varukorgen</button>
			<div className="container-sum">
				<p>1</p>
			</div>
			<p>
				<Link to="/products">Tillbaka</Link>
			</p></div>
		
		</section>
	)
}

export default DetailPage 