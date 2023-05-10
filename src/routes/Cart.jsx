import './Stylesheet/cart.css'
import { useRecoilState} from 'recoil'
import { buyState } from '../atoms/buyState'



const Cart = () => {
	const [buySummerToy] = useRecoilState(buyState)

	console.log('Vad finns i :', buySummerToy)

	return (
		<>
	<div className="cart-head-container" >
		<p>Din varukorg</p>
	</div>

	<div className="cart-info-container">
		{buySummerToy.map((summerToy, index)=> (
		<div className="cart-item-container" key={index}>
		<h2>{summerToy?.name}</h2>
		<img src={summerToy?.picture}></img>
		<p className='count'>Antal: </p>
		<div className='btn-container'>
		<button>-</button>
		<button>+</button></div>
		<p className='cart-item-sum'>Summa: {summerToy?.price} kr</p>
		</div>
		))}

	</div>

		<p>Totalsumma:</p>
	</>
		)
}

export default Cart