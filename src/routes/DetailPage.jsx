import { Link, useParams } from "react-router-dom"

const DetailPage = () => {
	const { id } = useParams()
	return(
		<section>
			<div>
				<h2>
					{}
				</h2>
			</div>
			<img></img>
			<p>Finns i webblager (ikon) </p>
			<p>Uppskattad leveranstid 1-3 dagar</p>
			<div>
				<p>Pris</p>
			</div>
			<button></button>
			<div><p></p></div>
			<p><Link to="/products">Tillbaka</Link></p>
		</section>
	)
}

export default DetailPage 