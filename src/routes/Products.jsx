import { getProducts } from "../Apifunctions/getProducts.js"
// import { uploadProducts } from "../Apifunctions/uploadProducts.js";
import { useEffect } from "react"
import { Link } from 'react-router-dom' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Stylesheet/products.css"
import { useRecoilState } from "recoil";
import { storeApiData } from "../atoms/storeApiData.js";
import { buyState } from "../atoms/buyState.js";



const Products = () => {

	const [summerToys, setSummerToys] = useRecoilState(storeApiData)
	const [buySummerToy, setBuySummerToy] = useRecoilState(buyState)
	

	// Hämtar alla produkter från API:et
	useEffect(() => {
		// uploadProducts()
		async function fetchData() {
			const summerData = await getProducts();
			setSummerToys(summerData)
		}
		fetchData()
	}, [])

	
	const handleBuyBtn = (summerToy ) => {
			console.log('Du klickade på köp-knappen', summerToy)
			setBuySummerToy((clickedSummerToy) => [...clickedSummerToy, summerToy])
	}

	useEffect(() => {console.log('buySummerToy uppdaterad: ', buySummerToy)}, [buySummerToy])

	return (
		<section className="products-container">
			<div className="head-products">
				<p>SOMMARLEKSAKER</p>
			</div>
				<ul className="summertoy-list">
					{summerToys.map((summerToy) => (
					
					<div
						className="summertoy-container"
						key={summerToy.id}>
							<Link className="link-product"
							to={{ pathname: `/products/${summerToy.id}`, state: { product: summerToy },
					}}>
								<h2 className="head-summertoy-text">{summerToy.name}</h2>
								<div className="image-container">
								<img className="summertoy-image"
								src={summerToy.picture}/></div></Link>
							<div className="price-container-summertoy">
							<p>{summerToy.price} Kr</p></div>
							<button
							onClick={() => handleBuyBtn(summerToy)}>KÖP <FontAwesomeIcon
						icon={faCartShopping}
						id="cart-icon-product" /></button>
						</div>
					))}
						
				</ul>
			
		</section>
	)

}

export default Products