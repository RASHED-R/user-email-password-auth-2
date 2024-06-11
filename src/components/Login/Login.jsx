import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../firebase/firebase';
import Swal from 'sweetalert2'
const Login = () => {
    const [submitLoginSuccess, setSubmitLoginSuccess] = useState('');
    const [submitLoginError, setSubmitLoginError] = useState('');
    const emailRef = useRef(null)


    const [hasTyped, setHasTyped] = useState();
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        setSubmitLoginSuccess('');
        setSubmitLoginError('');

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                if (user.emailVerified) {
                    setSubmitLoginSuccess('Login Successfully')
                } else {
                    alert('verify your email')
                }
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                setSubmitLoginError(errorMessage)
            });
    }
    const handleResetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            alert('Please Provide an email')
            return;
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            alert('please write an valid Email')
            return
        }
    }
    const handleOnChangeLoginBtn = (e) => {
        setHasTyped(e.target.value);
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleLoginSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" value={hasTyped} name='email' placeholder="email" ref={emailRef} onChange={handleOnChangeLoginBtn} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" onClick={handleResetPassword} className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" disabled={!hasTyped} type="submit">
                                    Login
                                </button>
                            </div>
                            {
                                submitLoginSuccess && <p className=" bg-green-500 p-2 text-white">User Login Successfully</p>
                            }
                            {
                                submitLoginError && <p className=" bg-red-500 p-2 text-white">Email or Password are wrong</p>
                            }

                            <p className="block mt-4 font-sans text-base antialiased font-normal leading-relaxed text-center text-gray-700">
                                Don't have an account? Please
                                <Link to={'/register'} className="font-medium text-gray-900">
                                    Register
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Login;