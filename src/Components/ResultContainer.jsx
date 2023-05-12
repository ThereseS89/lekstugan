
import { resultState } from "../atoms/resultState"
import { useRecoilState } from "recoil"

const ResultContainer = () => {
const [resultSummerToy, setResultSummerToy] = useRecoilState(resultState)
setResultSummerToy;

	return (
	<section>
	<p>Resultat :</p>
		{resultSummerToy.map((matchingToy) => (
		<div
		key={matchingToy.id}>
	
			<p>{matchingToy.name}</p>
		</div>

		
	))}
	</section>
	)
}

export default ResultContainer

