import React, {useRef, useState} from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const App = () => {

	const [captchaValido, cambiarCaptchaValido] = useState(null);
	const [usuarioValido, cambiarUsuarioValido] = useState(false);

	const sitekey = "6Le2ZvsbAAAAAOmT8HLKZHJBHstIPXK_nLTCmj9a";
	// const secretkey = "6Le2ZvsbAAAAAI-SM99jZ3oqj1ojcuLmzL3l-J_O";
	const captcha = useRef(null);

	const onChange = () => {
		if(captcha.current.getValue()){
			console.log('El usuario no es un robot');
			cambiarCaptchaValido(true);
		}
	}

	const submit = (e) => {
		e.preventDefault();

		// Validamos los inputs del formulario
		// Si son correctos ya podemos enviar el fomulario, actualizar la Interfaz, etc.

		if(captcha.current.getValue()){
			console.log('El usuario no es un robot');
			cambiarUsuarioValido(true);
			cambiarCaptchaValido(true);
		} else {
			console.log('Por favor acepta el captcha');
			cambiarUsuarioValido(false);
			cambiarCaptchaValido(false);
		}
	}

	return (
		<div className="contenedor">
			{!usuarioValido &&
				<div className="registrate">
					
					<h1>Registrate</h1>

					<form className="formulario" action="" onSubmit={submit}>
						<input type="text" name="usuario" id="usuario" placeholder="Usuario" />
						<input type="password" name="password" id="password" placeholder="Contraseña" />
						<input type="password" name="password2" id="password2" placeholder="Repetir Contraseña" />
						<div className="recaptcha">
							<ReCAPTCHA
								ref={captcha}
								sitekey={sitekey}
								onChange={onChange}
							/>
						</div>
						{captchaValido === false && <div className="error-captcha">Por favor acepta el captcha</div>}
						<button type="submit">Iniciar Sesion</button>
					</form>

				</div>
			}
			{usuarioValido && 
				<div>
					<h1>Bienvenido</h1>
				</div>
			}
		</div>
	);
}
 
export default App;