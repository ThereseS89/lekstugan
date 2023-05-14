
import "./Stylesheet/start.css"

const Start = () => {

	return (
		<section className="start">
			<div className="comercial">
				<h1 className="comercial-text">20 - 50% på utvalda produkter </h1>
			</div>

			<div className="first-page-info">
				<h2 className="first-page-text">Kolla in sommarens leksaksfavoriter! <br/><br/> Vi har produkter för både stora och små!</h2>
			</div>

			<div className="popular-text-container">
				<p className="popular-text">Populärt just nu</p>
			</div>

			<div className="popular-container">

				<h3>Barnpool</h3>

				<img src="https://www.rusta.com/globalassets/inriver/resources/704012780101_637859689133538429.jpg?preset=ib" />

				<div className="price-container">
					<p className="price">399 kr</p>
				</div>

			</div>
		</section>	
	)
}

export default Start