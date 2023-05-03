import Start from "./routes/Start.jsx"
import Products from "./routes/Products.jsx"
import Root from "./Root.jsx"
import { createHashRouter } from "react-router-dom"


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
					}
					
		]
	}
])

export {router}