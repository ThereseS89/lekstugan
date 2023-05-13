import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useParams } from "react-router-dom"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import './Stylesheet/detailpage.css'
import { useRecoilState } from "recoil"
import { storeApiData } from "../atoms/storeApiData"
import { buyState } from "../atoms/buyState.js";
import { useState } from "react"


const DetailPage = () => {
	const [ clickCountCart, setClickCountCart] = useState({});
	const [ buysummerToy, setBuySummerToy ] = useRecoilState(buyState)
	const [summerToys, setSummerToys] = useRecoilState(storeApiData)
	const { id } = useParams()
	const selectedSummerToy = summerToys.find(toy => toy.id.toString() === id)
	console.log(summerToys, 'and', id)
	clickCountCart;
	buysummerToy;
	setSummerToys;

	const handleBuyBtn = (selectedSummerToy ) => {
		const id = selectedSummerToy.id

			console.log('Du klickade på köp-knappen', selectedSummerToy)
			setBuySummerToy((clickedSummerToy) => {
				const cartSummerToy = clickedSummerToy.find((product) => product.summerToy.id === id);

				if(cartSummerToy) {
					return clickedSummerToy.map((product) => product.summerToy.id === id ? { ...product, quantity: product.quantity + 1} : product)
				} else {
					return [...clickedSummerToy, {summerToy: selectedSummerToy, quantity: 1 }]
				}
			})
			// setBuySummerToy((clickedSummerToy) => [...clickedSummerToy, summerToy])

			setClickCountCart((prevClickCounts) => {
				const newClickCounts = { ...prevClickCounts }
				
				newClickCounts[id] = (newClickCounts[id] || 0) + 1;
				return newClickCounts;
				
			})
	}


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
			<button
			onClick={() => handleBuyBtn(selectedSummerToy)} className="detail-btn">
				<FontAwesomeIcon
						icon={faCartShopping}
						id="cart-icon-product" 
						/> Lägg i varukorgen</button>
			
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