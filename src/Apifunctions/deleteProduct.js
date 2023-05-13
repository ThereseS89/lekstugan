import { url, shopId} from '../constants/constants.js'

export async function deleteProduct(id) {
	console.log('Preparing to delete...')
		
		const data = { shopid: shopId, productid: id, action: 'delete-product' }
		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		}
		const response = await fetch(url, options)
		const statusObject = await response.json()
		console.log('Delete status: ', statusObject)

	}
