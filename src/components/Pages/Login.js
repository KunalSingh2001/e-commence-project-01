import React, {useRef, useContext} from 'react';
import Header from '../elements/Header';
import Heading from '../Heading';
import Footer from '../elements/Footer';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
function Login() {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const history = useHistory();
    const {setLoginHander} = useContext(AuthContext);
    function submitLoginForm(event) {
		event.preventDefault();
		const enteredEmail = emailInputRef.current.value;
		const enteredPassword = passwordInputRef.current.value;
		
		fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC-EjncbSDwCk-isi9RtO3COCiSSO2mVVA", {
			method:"POST",
			body:JSON.stringify({
				email: enteredEmail,
				password: enteredPassword,
				returnSecureToken:true
			})
		}).then((res) => {
			if (res.ok) {
				return res.json()
			}else {
				throw new Error("Authentication failed!")
			}
		}).then((data) => {
            console.log(data);
            setLoginHander(data)
            history.replace('/store');
		}).catch((error) => {
			alert(error)
		})
		
	}
    return (
        <>
        <Header />
        <Heading />
            <div className="container d-flex align-items-center justify-content-center vh-100">
                <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
                    <h3 className="text-center mb-4">Login</h3>
                    <form onSubmit={submitLoginForm}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                ref={emailInputRef}
                                placeholder="Enter email"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                ref={passwordInputRef}
                                placeholder="Enter password"
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-100">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        <Footer/>
        </>
    );
}

export default Login;