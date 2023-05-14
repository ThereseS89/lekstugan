import { getProducts } from "../Apifunctions/getProducts.js"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Stylesheet/products.css"
import { useRecoilState } from "recoil";
import { storeApiData } from "../atoms/storeApiData.js";
import { buyState } from "../atoms/buyState.js";

const Products = () => {
	const [ clickCountCart, setClickCountCart] = useState({});
	const [summerToys, setSummerToys] = useRecoilState(storeApiData)
	const [ buysummerToy, setBuySummerToy ] = useRecoilState(buyState)
	buysummerToy;
	clickCountCart;
	// Hämtar alla produkter från API:et
	useEffect(() => {
		// uploadProducts()
		async function fetchData() {
			const summerData = await getProducts();
			setSummerToys(summerData)
		}
		fetchData()
	}, []);

	

	const handleBuyBtn = (summerToy ) => {
		const id = summerToy.id

			console.log('Du klickade på köp-knappen', summerToy)
			setBuySummerToy((clickedSummerToy) => {
				const cartSummerToy = clickedSummerToy.find((product) => product.summerToy.id === id);

				if(cartSummerToy) {
					return clickedSummerToy.map((product) => product.summerToy.id === id ? { ...product, quantity: product.quantity + 1} : product)
				} else {
					return [...clickedSummerToy, {summerToy, quantity: 1 }]
				}
			})
			// setBuySummerToy((clickedSummerToy) => [...clickedSummerToy, summerToy])

			setClickCountCart((prevClickCounts) => {
				const newClickCounts = { ...prevClickCounts }
				
				newClickCounts[id] = (newClickCounts[id] || 0) + 1;
				return newClickCounts;
				
			})
	}


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
