import Start from "./routes/Start.jsx"
import Products from "./routes/Products.jsx"
import Root from "./Root.jsx"
import { createHashRouter } from "react-router-dom"
import Admin from "./routes/Admin.jsx"
import Cart from "./routes/Cart.jsx"
import DetailPage from './routes/DetailPage.jsx'


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
						element: <Admin />
					},
					{
						path: 'cart',
						element: <Cart />
					},

					{
						path: 'products/:id',
						element: <DetailPage />
					}
					
		]
	}
])

export {router}