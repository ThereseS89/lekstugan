import Start from "./routes/Start.jsx"
import Products from "./routes/Products.jsx"
import Root from "./Root.jsx"
import { createHashRouter } from "react-router-dom"
import Admin from "./routes/Admin.jsx"
import Cart from "./routes/Cart.jsx"
import DetailPage from './routes/DetailPage.jsx'
import ErrorPage from "./routes/ErrorPage.jsx"
import AdminProducts from "./routes/AdminProducts.jsx"
import AdminUsers from "./routes/AdminUsers.jsx"


const router = createHashRouter([
	
	{
		path: '/',
		element: <Root />,

		children: [
					{
						path: '',
						element: <Start />,
					},
					{
						path: 'products',
						element: <Products />
					}, 
					{
						path: 'admin',
						element: <Admin />,
						children: [

							{
								path: 'adminproducts',
								element: <AdminProducts />
							},

							{
								path: 'adminusers',
								element: <AdminUsers />
							},
						],
					},	
					
					{
						path: 'cart',
						element:  <Cart /> 
					},
					{
						path: 'products/:id',
						element: <DetailPage />
					},
					{
						path: 'errorpage',
						element: <ErrorPage />
					},
					
		],
	}
])

export default router

