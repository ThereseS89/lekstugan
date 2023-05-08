import { getProducts } from "../getProducts"
import { useState, useEffect } from "react"
import { uploadProducts } from "../uploadProducts"


const Products = () => {
	const [summerToys, setSummerToys] = useState([])
	uploadProducts()
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
		<section>
			<div>
				<p>SOMMARLEKSAKER</p>
				<ul>
					{summerToys.map((summerToy) => (
						<div
						className="summertoy-container"
						key={summerToy.id}>
							<h2>{summerToy.name}</h2>
							
							<p>{summerToy.price}</p>
							<button>KÖP</button>
						</div>
					))}
						
				</ul>
			</div>
		</section>
	)

}

export default Products