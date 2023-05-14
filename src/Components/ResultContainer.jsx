
import { resultState } from "../atoms/resultState"
import { useRecoilState } from "recoil"
import { Link } from "react-router-dom"
import { showResultState } from "../atoms/showResultState"
import './resultcontainer.css'


const ResultContainer = () => {
const [resultSummerToy, setResultSummerToy] = useRecoilState(resultState)
setResultSummerToy;
const [showResult, setShowResult] = useRecoilState(showResultState)
showResult;

	return (
	<section className="result-container">
	<p>Resultat :</p>
		{resultSummerToy.map((matchingToy) => (
		<div
		key={matchingToy.id}>
	
			<Link to={{pathname: `/products/${matchingToy.id}`, state: { product: matchingToy }, }}>
				<p>{matchingToy.name}</p>
				</Link>
		</div>
		
		
	))}
	<p className="close-result"
	onClick={()=>setShowResult(false)}>Stäng sökresultatet</p>
	</section>
	)
}

export default ResultContainer

