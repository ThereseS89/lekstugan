import { useState } from "react"
import { useRecoilState } from "recoil"
import { storeApiData } from "../atoms/storeApiData"
import { useNavigate } from "react-router-dom"
import { addProduct } from "../Apifunctions/uploadNewProduct.js"
import { shopId } from "../constants/constants"
import './Stylesheet/adminproducts.css'

const AdminProducts = () => {
	const [summerToys, setSummerToys] = useRecoilState(storeApiData)
	const [newSummerToyName, setNewSummerToyName] = useState("")
	const [newSummerToyPicture, setNewSummerToyPicture] = useState("")
	const [newSummerToyPrice, setNewSummerToyPrice] = useState("")
	const [newSummerToyDescription, setNewSummerToyDescription] = useState("")
	const navigate = useNavigate()
	const [nameIsDirty, setNameIsDirty] = useState(false)


	const goBack = () => {
		navigate(-1)
	}

	// Skapa en funktion som pushar in den nya produkten i arrayen.
	const[addSummerToyId, setAddSummerToyId]  = useState(0) 

	function addSummerToy(event) {
		const newSummerToy = {
		action: 'add-product',
		id: addSummerToyId,
		name: newSummerToyName,
		picture: newSummerToyPicture,
		price: newSummerToyPrice,
		description: newSummerToyDescription,
		shopid: shopId
	};
		setSummerToys([...summerToys, newSummerToy])
		setAddSummerToyId(prevId => prevId + 1)
		console.log('Lägger till produkt...', summerToys)
		addProduct(newSummerToy)
		event.preventDefault()
	}

	function isValidProductName(NewSummerToyName) {
		const AllowedChars = 'abcdefghijklmnopqrstuvxyzåäö'
		if(newSummerToyName.length <2) {
			return false
		}
	
		for(let i = 0; i<NewSummerToyName.length; i++){
			let c = NewSummerToyName.charAt(i).toLowerCase()
			if (!AllowedChars.includes(c)) {
			return false
		} 
	} return true 

	} 

	const nameIsValid = isValidProductName(newSummerToyName)
		
	

	return (
		<section>
			
			<p className="close-form" onClick={goBack}> Stäng formulär</p>
			<form className="add-product-form">
				<input 
				type="text" placeholder="produktnamn" value={newSummerToyName}
				onChange={(e) => {setNewSummerToyName(e.target.value);setNameIsDirty(true)}}
				onBlur={() => setNameIsDirty(true)}/>
			{ nameIsDirty && !nameIsValid ? <p>Vänligen! Använd bara bokstäver, tack </p> : '' }


				<input
				type="text"
				placeholder="URL"
				onChange= {(e) => setNewSummerToyPicture(e.target.value)}/>

				<input 
				type="text"
				placeholder="Pris"
				onChange={(e) => setNewSummerToyPrice(e.target.value)}/>

				<textarea 
				type="text"
				placeholder="Beskrivning"
				onChange={(e) => setNewSummerToyDescription(e.target.value)}/>

				<button type="submit" onClick={addSummerToy}>Lägg till produkt</button>
			</form>
		</section>

	)
}

export default AdminProducts