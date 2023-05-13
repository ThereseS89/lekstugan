import './Stylesheet/cart.css'
import { useRecoilState} from 'recoil'
import { buyState } from '../atoms/buyState'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Cart = () => {
	const [buySummerToy, setBuySummerToy] = useRecoilState(buyState)
	
	setBuySummerToy;

	console.log('Vad finns i :', buySummerToy)

	const totalSum = buySummerToy.reduce((sum, summerToy) => sum + (summerToy.summerToy.price * summerToy.quantity), 0)

	function decreaseQuantity(id) {
		setBuySummerToy((prevBuysummerToy) =>
		prevBuysummerToy.map((buyItem) => {
			if(buyItem.summerToy.id === id) {
				return { ...buyItem, quantity: buyItem.quantity -1 }
			} else {
				return buyItem;
			}				
			})
			.filter((buyItem) => buyItem.quantity > 0)
			)
		}
	

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
		<FontAwesomeIcon onClick={() => decreaseQuantity(summerToy.id)}
		id="trash-icon" 
		icon={faTrash} />
		<p className='cart-item-sum'>Summa: {summerToy?.price * buyItem.quantity} kr</p>
		</div>
		)
		})}

	</div>

		<p>Totalsumma: {totalSum} kr</p>
		<p>Till Betalning</p>
	</>
		)
}

export default Cart