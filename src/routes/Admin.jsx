import '../routes/Stylesheet/admin.css'
import { useRecoilState } from 'recoil'
import { useEffect } from 'react'
import { storeApiData } from '../atoms/storeApiData'
import { getProducts } from '../Apifunctions/getProducts'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { NavLink, Outlet, Link } from 'react-router-dom'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {deleteProduct} from '../Apifunctions/deleteProduct.js'


const Admin = () => {
	const [summerToys, setSummerToys] = useRecoilState(storeApiData)

	const removeSummerToy = (id) => {
			setSummerToys((prevSummerToys) => { return prevSummerToys.filter((summerToy) => summerToy.id !== id) 		
			})
			deleteProduct(id)
		}
		
	

	useEffect(() => {
		//uploadProducts()
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
				<Link to="/"><div className="container-log-out">
				<p>LOGGA UT</p><FontAwesomeIcon icon={faArrowRightFromBracket} />
				</div></Link>
			</div>

			<div className="admin-edit-choses">
				
				
					<NavLink to="adminproducts"><div className='flex-position'>
				
							<p>Lägg till ny produkt</p><FontAwesomeIcon icon={faPlus} />
						
					</div></NavLink>
					<Outlet/>
				


				<div className='flex-position'>
					<p>Lägg till ny användare</p><FontAwesomeIcon icon={faUserPlus} />
				</div>
			</div>


			<ul className="summertoy-list">
					{summerToys.map((summerToy) => (
				
				<div
					className="summertoy-container"
					key={summerToy.id}>
						<FontAwesomeIcon
							onClick={()=> removeSummerToy(summerToy.id)}
							id="trash-icon" 
							icon={faTrash} />

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