import '../routes/Stylesheet/admin.css'
import { useRecoilState } from 'recoil'
import { useEffect, Link } from 'react'
import { storeApiData } from '../atoms/storeApiData'
import { getProducts } from '../Apifunctions/getProducts'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Admin = () => {
	const [summerToys, setSummerToys] = useRecoilState(storeApiData)

	useEffect(() => {
		// uploadProducts()
		async function fetchData() {
			const summerData = await getProducts();
			setSummerToys(summerData)
		}
		fetchData()
	}, []);

	return (
		<>
			<div className="head-container-admin">
				<p>ADMIN</p>
			</div>

			<div className="admin-edit-choses">
				<div className='flex-position'>
					<p>Lägg till ny produkt</p><FontAwesomeIcon icon={faPlus} />
				</div>
				<div className='flex-position'>
					<p>Lägg till ny användare</p><FontAwesomeIcon icon={faUserPlus} />
				</div>
			</div>


			<ul className="summertoy-list">
					{summerToys.map((summerToy) => (
				
				<div
					className="summertoy-container"
					key={summerToy.id}>
					<h2 className="head-summertoy-text">{summerToy.name}</h2>
					<div className="image-container">
						<img className="summertoy-image"
							src={summerToy.picture}/>
					</div>
					<div className="price-container-summertoy">
							<p>{summerToy.price} Kr</p></div>
							<button> Redigera <FontAwesomeIcon
							icon={faPen}
							id="edit-pen-icon" /></button>
							
					</div>
				))}
						
			</ul>
		</>
	)
}

export default Admin