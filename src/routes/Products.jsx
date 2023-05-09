import { getProducts } from "../Apifunctions/getProducts.js"
import { uploadProducts } from "../Apifunctions/uploadProducts.js";
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";



const Products = () => {

	const [summerToys, setSummerToys] = useState([])

	// Hämtar alla produkter från API:et
	useEffect(() => {
		uploadProducts()
		async function fetchData() {
			const summerData = await getProducts();
			setSummerToys(summerData)
		}
		fetchData()
	}, [])


	return (
		<section className="products-container">
			<div className="head-products">
				<p>SOMMARLEKSAKER</p>
				<ul>
					{summerToys.map((summerToy) => (
					
					<div
						className="summertoy-container"
						key={summerToy.id}>
							<Link to={`/product/${summerToy.id}`}>
								<h2>{summerToy.name}</h2>
								<img src={summerToy.picture}/></Link>
							<p>{summerToy.price}</p>
							<button>KÖP <FontAwesomeIcon
						icon={faCartShopping}
						id="cart-icon" /></button>
						</div>
					))}
						
				</ul>
			</div>
		</section>
	)

}

export default Products