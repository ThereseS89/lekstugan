import { Link } from "react-router-dom";

const ErrorPage = () => (
	<section>
		<p>Hoppsan! Detta var pinsamt!</p>
		<p>Sidan är under uppbyggnad</p>
		<p>Spana in våra andra sidor istället</p>
		<p>
			<Link to="/">Startsidan</Link>
			</p>
		<img src="https://media.istockphoto.com/id/914530568/sv/foto/klumpig-arbetare-med-%C3%A5tg%C3%A4rd-tejp.jpg?s=612x612&w=0&k=20&c=wVOupAwrg3gQP14FKykptqh5fhgWxePxTvmu_oUV3Ko=" />
	</section>
)

export default ErrorPage