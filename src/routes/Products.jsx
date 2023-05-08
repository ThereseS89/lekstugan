import { getProducts } from "../getProducts"
import { useState, useEffect } from "react"


const Products = () => {
	const [summerToys, setSummerToys] = useState([])
	useEffect(() => {
		async function fetchData() {
			const summerData = await getProducts();
			setSummerToys(summerData)
		}
		fetchData()
	}, [])
	


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