import { url} from '../constants/constants.js'


export async function addProduct(newSummerToy) {
	console.log('Adding product...')

	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(newSummerToy)
	}
	const response = await fetch(url, options)
	const statusObject = await response.json()
	console.log('Response from API:', statusObject)
}