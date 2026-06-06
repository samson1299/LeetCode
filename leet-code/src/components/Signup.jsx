import { Link } from "react-router-dom";
import { useState } from "react";
import {
    FaGoogle,
    FaGithub,
} from "react-icons/fa";
const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    return (
        <div>
            <div className="login-container">
                <div className="login-card">

                    <img src={"leetcode.svg"} className="logo-sign" alt="leet code logo" />
                    <form action="">

                        <input onChange={() => (e) => setUsername(e.target.value)} autoComplete="username" className="username" type="text" placeholder="Username" />
                        <input onChange={() => (e) => setEmail(e.target.value)} autoComplete="email" className="username" type="text" placeholder="E-mail" />

                        <input onChange={() => (e) => setPassword(e.target.value)} autoComplete="new-password" className="password" type="password" placeholder="Password"></input>

                        <input onChange={() => (e) => setConfirmPassword(e.target.value)} autoComplete="new-password" className="password" type="password" placeholder="Confirm Password"></input>


                    </form>

                    <button onClick={async () => {
                        try {
                            const response = await fetch("http://localhost:3001/signup", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    username,
                                    email,
                                    password,
                                    confirmPassword


                                })
                            })
                            const data = await response.json();
                        } catch (err) {
                            console.log(err)
                        }
                    }} className="signin-btn">Sign In</button>

                    <p className="terms">
                        By continuing, you agree to <span> Terms </span>&
                        <span> Privacy Policy.</span>
                    </p>

                    <div className="links">
                        <a href="/">Forgot Password?</a>
                        <div className="signin">
                            <span>Have an account </span>
                            <Link to="/signin">Sign in</Link>
                        </div>

                    </div>

                    <p className="social-text">or you can sign in with</p>

                    <div className="social-icons">
                        <div> <FaGoogle /></div>
                        <div> <FaGithub /></div>
                        <div>•••</div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Signup;