import { url, shopId} from './constants/constants'


export async function getProducts() {
	console.log('getting products...')
	try {
			const response = await fetch(url +'?action=get-products&shopid='+ shopId)
			const summerData = await response.json()
			
	console.log ('Response from API:' , summerData)
	return summerData
} catch (error){
	console.error("error fetching data: ", error )
	return []
}
}
