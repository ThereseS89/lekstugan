import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Start = () => {

	return (
		<section className="start">
		<div 
		className="comercial">
			<h1 
			className="comercial-text">20 - 50% på utvalda produkter </h1>
		</div>
		<div
		className="first-page-info">
			<h2 className="first-page-text">Kolla in sommarens leksaksfavoriter! <br /> Vi har produkter för både stora och små!</h2>
		</div>
		<div className="popular-text">
					<p className="popular">Populärt just nu</p>
				</div>
		<div className="popular-container">
				
			<h3>AquaPlay</h3>
			<img src="./imgs/aquaplay.png" />
			<div className="price-container">
				<p className="price">399 kr</p></div>
			<div className="cart-container">
				<FontAwesomeIcon
						icon={faCartShopping} />
			</div>
		</div>
		</section>	
	)
}

export default Start