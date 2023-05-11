import './Stylesheet/cart.css'
import { useRecoilState} from 'recoil'
import { buyState } from '../atoms/buyState'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'



const Cart = () => {
	const [buySummerToy] = useRecoilState(buyState)

	console.log('Vad finns i :', buySummerToy)

	const totalSum = buySummerToy.reduce((sum, summerToy) => sum + (summerToy.summerToy.price * summerToy.quantity), 0)

	return (
		<>
	<div className="cart-head-container" >
		<p>Din varukorg</p>
	</div>

	<div className="cart-info-container">
		{buySummerToy.map((buyItem, id) =>{
			const summerToy = buyItem.summerToy
			return (
				<div className="cart-item-container" key={id}>
		<h2>{summerToy?.name}</h2>
		<img src={summerToy?.picture}></img>
		<p className='count'>Antal: {buyItem?.quantity}</p>
		<div className='btn-container'>
		<button>-</button>
		<button>+</button></div>
		<FontAwesomeIcon id="trash-icon" icon={faTrash} />
		<p className='cart-item-sum'>Summa: {summerToy?.price * buyItem.quantity} kr</p>
		</div>
		)
		})}

	</div>

		<p>Totalsumma: {totalSum} kr</p>
	</>
		)
}

export default Cart