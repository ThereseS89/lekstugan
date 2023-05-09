import { getProducts } from "../Apifunctions/getProducts.js"
import { useState, useEffect } from "react"
import './Stylesheet/Products.css'


const Products = () => {
	const [summerToys, setSummerToys] = useState([])
	
	useEffect(() => {
		async function fetchData() {
			const summerData = await getProducts();
			console.log("summerData: ", summerData)
			setSummerToys(summerData)
		}
		console.log()
		fetchData()
	},[])
	


	return (
		<section className="products-container">

			
				<div className="head-container">
					<h1 className="head-products">SOMMARLEKSAKER</h1>
				</div>

				
					<ul className="summertoy-list">
						{summerToys.map((summerToy) => (
						<div
							className="summertoy-container"
							key={summerToy.id}>

								<h2>{summerToy.name}</h2>
								<img src={summerToy.picture}/>
								<p>{summerToy.price}</p>
								<button>KÖP</button>

						</div>
						))}
							
					</ul>
			
			
		</section>
	)

}

export default Products