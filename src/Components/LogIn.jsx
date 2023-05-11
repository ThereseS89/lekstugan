import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import './login.css'
import { useRecoilState } from "recoil";
import { openLoginState } from "../atoms/openLoginState";

const Login = () => {
	const [open, setOpen] = useRecoilState(openLoginState);
	const [password, setPassword] = useState("");
	const [userName, setUserName] = useState("");
	const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
	const [isUserNameCorrect, setIsUserNameCorrect] = useState(false);
	const [hasSubmitted, setHasSubmitted] = useState(false);
	const [userNameErrorMessage, setUserNameErrorMessage] = useState("");
	const correctPassword = ["password"];
	const correctUserName = ["admin"];
	const allowedChars = "abcdefghijklmnopqrstuvwxyzåäö";
	const [userNameError, setUserNameError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);


	const LoginEvents = (event) => {
		event.preventDefault();
		setHasSubmitted(true);
		

		if ((password === correctPassword) && (userName === correctUserName)) {
			setIsPasswordCorrect(true);
			setIsUserNameCorrect(true);
			props.setShowAdminPage(true);
			
			closeLogin();
			
		} else {
			if (password !== correctPassword) {
				setIsPasswordCorrect(false)
				setPasswordError(true)
				
			} else {
				setPasswordError(false)
			}
			if (userName !== correctUserName) {
				setIsUserNameCorrect(false)
				setUserNameError(true)
			} else {
				setUserNameError(false)
			}
		}
		
	}


	const handleInputChange = (event) => {
		setPassword(event.target.value);
		if (hasSubmitted) {
			setIsPasswordCorrect(event.target.value === correctPassword);
		}
	};

	const inputChange = (event) => {
		const input = event.target.value;
		setUserName(input);
		if (hasSubmitted) {
			setIsUserNameCorrect(input === correctUserName);
			for (let i = 0; i < input.length; i++) {
				let c = input.charAt(i).toLowerCase();
				if (!allowedChars.includes(c)) {
					setUserNameErrorMessage("Vänligen använd bara bokstäver.");
				} 
			}
		} else {
					setUserNameErrorMessage("")
				}
			
		return [true, '', setHasSubmitted(false)]
		
	}

	const closeLogin = () => {

		

	};


	return (

		<div className="overlay">
			
			<form className="form-container">

				
				<div className="head-container-login">
					<h2 className="login">LOGGA IN - ADMIN</h2>
					<FontAwesomeIcon onClick={() => setOpen(false)}
					className="close-icon-admin"
					icon={faXmark}
					/>
				</div>

				<label className="label-style">Användarnamn: </label>
				<input
					className="input"
					type="text"
					placeholder="Admin"
					value={userName}
					onChange={inputChange}
					onBlur={inputChange}
				/>

				{userNameErrorMessage && <p className='error-message'>{userNameErrorMessage}</p>}
                {hasSubmitted && userNameError && <p className='error-message'>Felaktigt användarnamn, Vänligen prova igen!</p> } 
  
			<label className="label-style">Lösenord:</label>
			<input
				className="input"
				type="password"
				placeholder="Lösenord"
				value={password}
				onChange={handleInputChange}
				onBlur={handleInputChange}
				/>

			{hasSubmitted && passwordError && <p className='error-message'>Felaktigt lösenord, vänligen prova igen!</p> }

			<button
				className="logIn-button"
				type="submit"
				onClick={LoginEvents}>Logga in
			</button>
			
		</form>
		</div> 
	)
}


export default Login


	
