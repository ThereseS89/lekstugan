import { url, shopId } from './constants/constants'

const data = [

	{
		action: 'add-product',
		name: "Badmintonset",
		price: 349 + ' kr',
		picture: "https://cdn1.leksakscity.se/99017-thickbox_default/badmintonset-for-barn.jpg",
		shopid: shopId
	},
	{
		action: 'add-product',
		name: "Flygande drake",
		price: 49 + ' kr ',
		picture: "https://static.partyking.org/fit-in/1300x0/products/original/flygdrake-1.jpg",
		shopid: shopId
	},
	{
		action: 'add-product',
		name: "Sandleksaker",
		price: 59 + ' kr',
		picture: "https://www.kopbarnvagn.se/bilder/artiklar/141230.jpg?m=1647692959",
		shopid: shopId
	},
	{
		action: 'add-product',
		name: "Volleyboll",
		price: 99 + ' kr',
		picture: "https://www.xxl.se/filespin/0eae016ca0c141059b0b4a12e6b5e1c5?resize=722,722&quality=90",
		shopid: shopId
	},
	{
		action: 'add-product',
		name: "Vattenspridare",
		price: 299 + ' kr',
		picture: "https://exempel.com/vattenspridare.jpg",
		shopid: shopId
	},
	{
		action: 'add-product',
		name: "Uppblåsbar vattenleksak Flamingo",
		price: 149 + ' kr',
		picture: "https://exempel.com/strandleksaker.jpg",
		shopid: shopId
	},
	{
		action: 'add-product',
		name: "Kubb",
		price: 99 + ' kr',
		picture: "https://exempel.com/kubb.jpg",
		shopid: shopId
	},
	{
		action: 'add-product',
		name: "Bubbelmaskin",
		price: 99 + ' kr',
		picture: "https://exempel.com/bubbelmaskin.jpg",
		shopid: shopId
	},
	{
		action: 'add-product',
		namn: "Skateboard",
		price: 399 + ' kr',
		picture: "https://exempel.com/skateboard.jpg",
		shopid: shopId
	},
	{
		action: 'add-product',
		name: "Vattenbana",
		price: 89 + ' kr',
		picture: "https://exempel.com/vattenbana.jpg",
		shopid: shopId
	},
	{
		action: 'add-product',
		name: "Frisbee",
		price: 99 +' kr',
		picture: "https://exempel.com/frisbee.jpg",
		shopid: shopId
	},
	{
		action: 'add-product',
		name: "Badringsleksak",
		price: 249 + ' kr',
		picture: "https://exempel.com/badringsleksak.jpg",
		shopid: shopId
	},

	{
		action: 'add-product',
		name: 'Water pistol',
		price: 12.5,
		description: 'Fires cooling streams of water at unsuspecting foes.',
		picture: 'insert web URL here',
		shopid: shopId
	},
	{
		action: 'add-product',
		name: "Barnpool",
		price: 69.99,
		picture: "https://exempel.com/barnpool.jpg",
		shopid: shopId
	}]


async function addProduct(product) {
	console.log('Adding product...')

	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(product)
	}
	const response = await fetch(url, options)
	const statusObject = await response.json()
	console.log('Response from API:', statusObject)
}

export async function uploadProducts() {
 console.log(data)

 data.forEach(product => {
	addProduct(product)
 })
}

