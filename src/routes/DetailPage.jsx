import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useParams } from "react-router-dom"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import './Stylesheet/detailpage.css'
import { useRecoilState } from "recoil"
import { storeApiData } from "../atoms/storeApiData"




const DetailPage = () => {
	const [summerToys, setSummerToys] = useRecoilState(storeApiData)
	const { id } = useParams()
	const selectedSummerToy = summerToys.find(toy => toy.id.toString() === id)
	console.log(summerToys, 'and', id)

	return(
		
		<section>
		
			<div className="head-container-detail">
				<h2 className="head-detail">
					{selectedSummerToy.name}
				</h2>
			</div>
			<div className="grid-layout-detail">
			<img src={selectedSummerToy.picture}/>
			<div className="information-text-container">
				<p>Finns i webblager <FontAwesomeIcon icon={faCheck} id="check-mark-green"/> </p>
				<p>Uppskattad leveranstid 1-3 dagar</p>
			</div>
			<div className="price-container-detail">
				<p>{selectedSummerToy.price} kr </p>
			</div>
			<button className="detail-btn">
				<FontAwesomeIcon
						icon={faCartShopping}
						id="cart-icon-product" /> Lägg i varukorgen</button>
				<input className="container-sum" placeholder="1" />
			
			<div className="description-container">
				<h3>Beskrivning</h3>
				<p>{selectedSummerToy.description}</p>
			</div>
			<p>
				<Link to="/products">Tillbaka</Link>
			</p></div>
		
		</section>
	)
}

export default DetailPage 