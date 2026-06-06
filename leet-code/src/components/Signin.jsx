import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub, } from "react-icons/fa";
import { use, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Signin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    return (
        <div>
            <div className="login-container">
                <div className="login-card">

                    <img src={"leetcode.svg"} className="logo-sign" alt="leet code logo" />
                    <form action="">

                        <input autoComplete='username' onChange={(e) => setEmail(e.target.value)} className="username" type="text" placeholder="Username or E-mail" />

                        <input autoComplete='current-password' onChange={(e) => setPassword(e.target.value)} className="password" type="password" placeholder="Password"></input>
                    </form>


                    <button onClick={async () => {



                        const response = await fetch("http://localhost:3001/signin", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                email: "test@gmail.com",
                                password: "123"
                            })
                        });

                        const json = await response.json();
                        console.log(json);

                        if (response.ok) {
                            localStorage.setItem('token', json.token)
                            navigate("/qestions")
                        }

                    }} className="signin-btn">Sign In</button>

                    <p className="terms">
                        By continuing, you agree to <span> Terms </span>&
                        <span> Privacy Policy.</span>
                    </p>

                    <div className="links">
                        <a href="/">Forgot Password?</a>
                        <Link to="/signup">Sign Up</Link>
                    </div>

                    <p className="social-text">or you can sign in with</p>

                    <div className="social-icons">
                        <div><FaGoogle /></div>
                        <div><FaGithub /></div>
                        <div>•••</div>
                    </div>

                </div>
            </div>

        </div>
    )
}


export default Signin;