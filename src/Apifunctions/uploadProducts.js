import { url, shopId } from '../constants/constants.js'

const data = [

	{
		action: 'add-product',
		name: "Badmintonset",
		price: 349,
		description: 'Utforska spännande matcher och njut av utomhusaktiviteter med vårt högkvalitativa badmintonset. Vårt set är perfekt för familjära lekar i trädgården, parken eller stranden under soliga sommardagar.',
		picture: "https://cdn1.leksakscity.se/99017-thickbox_default/badmintonset-for-barn.jpg",
		shopid: shopId
	},
	{
		action: 'add-product',
		name: "Flygande drake",
		price: 49,
		description: 'Ge dig ut på äventyr med vår flygande drake! Med färgglada vingar och en lätt ram flyger den elegant genom luften och sprider glädje för både barn och vuxna. Perfekt för sommardagar i parken eller på stranden.',
		picture: "https://static.partyking.org/fit-in/1300x0/products/original/flygdrake-1.jpg",
		shopid: shopId
	},
	{
		action: 'add-product',
		name: "Sandleksaker",
		price: 59,
		description: 'Bygg fantastiska sandslott och skapa roliga mönster i sanden med våra sandleksaker. Setet innehåller spadar, skyfflar och formar i olika storlekar, vilket gör det till en komplett uppsättning för kreativ lek på stranden eller i sandlådan.',
		picture: "https://www.kopbarnvagn.se/bilder/artiklar/141230.jpg?m=1647692959",
		shopid: shopId
	},
	{
		action: 'add-product',
		name: "Volleyboll",
		price: 99,
		description: 'Ta med spänningen av strandvolleyboll till din trädgård eller strandutflykt med vår kvalitetsvolleyboll. Den mjuka ytan ger en bra känsla och bollen är designad för optimal studs och grepp. Ha kul och utmana dina vänner till en intensiv match i solen!',
		picture: "https://www.xxl.se/filespin/0eae016ca0c141059b0b4a12e6b5e1c5?resize=722,722&quality=90",
		shopid: shopId
	},
	{
		action: 'add-product',
		name: "Vattenspridare bläckfisk",
		price: 299,
		description: 'Skapa en vattenlekpark i din trädgård med vår vattenspridare. Denna färgglada spridare håller barnen underhållna och svala under varma sommardagar. Anslut den till en trädgårdsslang och se vattenstrålarna dansa runt, vilket skapar en rolig och uppfriskande lekplats.',
		picture: "https://www.xxl.se/filespin/19dfb0ef5945480fbf6c062105028ad6?resize=722,722&quality=90&bgcolor=efefef",
		shopid: shopId
	},
	{
		action: 'add-product',
		name: "Uppblåsbar vattenleksak Flamingo",
		price: 149,
		description: 'Låt fantasin flöda och ge din pool eller sjö ännu mer glans med vår uppblåsbara vattenleksak i form av en Flamingo. Den är tillverkad av hållbart material och ger en bekväm plats att koppla av eller leka på vattnet. Perfekt för avkoppling eller roliga stunder i solen.',
		picture: "https://images.clasohlson.com/medias/sys_master/h8c/h2e/68105151873054.jpg",
		shopid: shopId
	},
	{
		action: 'add-product',
		name: "Kubb",
		price: 99,
		description: 'Njut av utomhusunderhållning med vår klassiska Kubb-speluppsättning. Bygg strategi, precision och skicklighet när du kastar träkubbarna för att välta motståndarens käglor. Perfekt för familjesamlingar och grillfester, detta spel kommer att skapa minnesvärda stunder och spänning.',
		picture: "https://www.jula.se/globalassets/catalog/productimages/961001.jpg",
		shopid: shopId
	},
	{
		action: 'add-product',
		name: "Bubbelmaskin",
		price: 99,
		description: 'Skapa en förtrollande atmosfär med vår bubbelmaskin. Den skapar otaliga bubblande bubblor och fyller luften med glädje. Perfekt för trädgårdsfester, barnkalas eller bara för att skapa en lekfull stämning. Enkel att använda och ger timmar av bubbelglädje!',
		picture: "https://m.media-amazon.com/images/I/61wM-gZGriL._AC_SX679_.jpg",
		shopid: shopId
	},
	{
		action: 'add-product',
		name: "Skateboard",
		price: 399,
		description: 'Utforska stadens gator eller cruisa i parken med vår skateboard. Med sin slitstarka konstruktion och greppvänliga yta ger den en smidig åktur och kontroll. Oavsett om du är nybörjare eller erfaren, är vår skateboard ett perfekt val för att testa dina skatefärdigheter.',
		picture: "https://junkyard.imgix.net/globalassets/productimages/7325654_020_f_f_junkyard_rainbow_q3_junkyard.jpg?auto=format&ar=4:5&fit=crop&w=700",
		shopid: shopId
	},
	{
		action: 'add-product',
		name: "Vattenbana",
		price: 89,
		description: 'Slå på sommarvärmen med vår spännande vattenbana. Med sina snabba kurvor, vattenstrålar och sprutande fontäner ger den en otrolig vattenlekupplevelse. Anslut den till en trädgårdsslang och se barnen skratta och plaska sig genom banan. Perfekt för att hålla sig sval och ha kul på varma dagar.',
		picture: "https://media.lekia.se/lekia/images/g-leki-70107292-2021-02-16-114419456/0/0/0/bestway-vattenbana-dubbel.jpg",
		shopid: shopId
	},
	{
		action: 'add-product',
		name: "Frisbee",
		price: 99,
		description: 'Kasta och fånga vår klassiska frisbee för en underhållande utomhuslek. Den aerodynamiska designen och det slitstarka materialet gör att frisbeen flyger långt och stabilt. Ha roligt med familj och vänner på stranden, i parken eller i trädgården med detta tidlösa leksaksfavorit.',
		picture: "https://w3.giffitsstatic.com/pics/c504/109919_1.jpg",
		shopid: shopId
	},
	{
		action: 'add-product',
		name: "Badringsleksak",
		price: 249,
		description: 'Ge barnen en säker och rolig simupplevelse med vår badringsleksak. Den färgglada och bekväma designen gör det enkelt för barn att flyta och leka i vattnet. Perfekt för poolen eller stranden, denna badringsleksak kommer att hålla barnen glada och säkra i vattnet.',
		picture: "https://www.xxl.se/filespin/25a26641c5624efea743e6f87a7e3651?resize=722,722&quality=90&bgcolor=efefef",
		shopid: shopId
	},

	{
		action: 'add-product',
		name: 'Vatten pistol',
		price: 49,
		description: 'Upplev spänningen och kyla ner dig med vår högpresterande vattenpistol. Med sin ergonomiska design och enkel användning är den perfekt för vattenstrider och utomhuslekar. Fyll enkelt på den med vatten, tryck på avtryckaren och spruta iväg strålen med precision och kraft. Gör dig redo att skapa oförglömliga sommarminnen och ha timmar av skoj i solen med denna roliga vattenpistol.',
		picture: 'https://www.xxl.se/filespin/ec223e09ec7548418dbc19ba14df8b7f?resize=722,722&quality=90&bgcolor=efefef',
		shopid: shopId
	},
	{
		action: 'add-product',
		name: "Barnpool",
		price: 299,
		description: 'Skapa en oas för barnen i trädgården med vår barnpool. Med sin färgglada design och stadiga konstruktion erbjuder den en perfekt plats för att svalka sig och leka under soliga dagar. Fyll den med vatten och se barnen skratta och plaska i denna lilla pool som är gjord just för dem.',
		picture: "https://www.rusta.com/globalassets/inriver/resources/704012780101_637859689133538429.jpg?preset=ib",
		shopid: shopId
	},

	{
		action: 'add-product',
		name: "Vattenballongkatapult",
		price: 199,
		description: 'Utforska spänningen med vår vattenballongkatapult. Fyll ballongerna med vatten, ladda katapulten och släpp loss för att skicka ballongerna genom luften. Med denna leksak kan du ha roligt med vattenkrig och utmana dina vänner på avstånd.',
		picture: "https://static.partyking.org/fit-in/1300x0/products/original/mega-sling-shotz-1.jpg",
		shopid: shopId
	},
	{
		action: 'add-product',
		name: "Hopprep",
		price: 59,
		description: 'Ta på dig sneakers och hoppa in i sommarens lekfulla atmosfär med vårt hopprep. Träna din koordination och kondition samtidigt som du har roligt ensam eller tillsammans med vänner. Perfekt för utomhusaktiviteter och enkel att ta med sig överallt.',
		picture: "https://www.tress.com/products/billeder_fra_tress/900pixel/652134.jpg?preset=productdetail",
		shopid: shopId
	},
	{
		action: 'add-product',
		name: "Flygande boomerang",
		price: 89,
		description: 'Upplev spänningen med vårt flygande boomerang-set. Kasta boomerangen och se den sväva genom luften innan den återvänder till dig. Perfekt för att utmana din kastteknik och ha roligt medan du njuter av sommardagar utomhus.',
		picture: "https://img.fruugo.com/product/9/40/614868409_max.jpg",
		shopid: shopId
	},
	{
		action: 'add-product',
		name: "Krit- och målarset",
		price: 99,
		description: 'Utforska din kreativitet med vårt krit- och målarset. Måla färgglada teckningar på trottoaren eller använd kritorna för att skapa roliga spelmarkeringar på gräsmattan. Perfekt för utomhuskonstprojekt och för att låta fantasin flöda.',
		picture: "https://m.media-amazon.com/images/I/81KLOJyapgL._AC_UF1000,1000_QL80_.jpg",
		shopid: shopId
	},
	{
		action: 'add-product',
		name: "Frisbee Golf-set",
		price: 299,
		description:'Ge dig ut på en rolig och utmanande runda med vårt frisbee golf-set. Kasta frisbees mot målkorgar och försök slutföra banan med så få kast som möjligt. En underhållande aktivitet för att njuta av sommarens soliga dagar.',
		picture: "https://partytajm.se/34695-large_default/frisbee-golf-set.jpg",
		shopid: shopId
	},
	{
		action: 'add-product',
		name: "Slackline-hängmatta",
		price: 299,
		description: 'Koppla av och njut av sommaren med vår slackline-hängmatta. Spänn upp linan mellan två träd och koppla av i den bekväma hängmattan. Perfekt för att slappna av, läsa en bok eller bara njuta av naturen.',
		picture: "https://images.internetstores.de/products/936444/02/090f14/sea-to-summit-pro-hammock-set-double-high-blue-1.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=300x300",
		shopid: shopId
	},
	{
		action: 'add-product',
		name: "Strandtennisset",
		price: 159,
		description: 'Ta med dig strandtennissetet och njut av en intensiv match i sanden. Slå bollen fram och tillbaka över nätet och ha kul med familj och vänner vid stranden eller på gräsmattan.',
		picture: "https://productimages.biltema.com/v1/image/imagebyfilename/45-6662_xl_1.jpg",
		shopid: shopId
	}

]


export async function addProduct(product) {
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

uploadProducts()




