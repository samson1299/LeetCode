import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "./index.css";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Problems from "./components/Problems";
import Allproblems from "./components/Allproblems";
function Home() {
    return (
        <div className="page">
            <nav className="navbar">
                <div className="logo">
                    <img src={"leetcode.svg"} alt="leetcode img" />
                    <span className="logo-text">LeetCode</span>
                </div>

                <div className="nav-links">
                    <a href="/">Premium</a>
                    <a href="/">Explore</a>
                    <a href="/">Product</a>
                    <a href="/">Developer</a>
                    <Link to='/Signup'>Sign Up</Link>
                </div>
            </nav>
            <section className="hero">
                <div className="dashboard-wrapper">
                    <div className="dashboard-card">
                        <div className="dashboard">

                            <div className="top-section">

                                <div className="cards-row">
                                    <div className="color-card blue"></div>
                                    <div className="color-card green"></div>
                                    <div className="color-card yellow"></div>
                                    <div className="color-card red"></div>
                                </div>

                                <div className="chart-card">
                                    <div className="chart-header"></div>

                                    <div className="pie-chart">
                                        <div className="pie-slice"></div>
                                    </div>

                                    <div className="chart-footer"></div>
                                </div>

                            </div>
                            <div className="content-section">

                                <div className="table-card">
                                    {[...Array(6)].map((_, i) => (
                                        <div className="table-row" key={i}>
                                            <div className="row-line"></div>

                                            <div
                                                className={`status-dot ${i % 3 === 0
                                                    ? "green-dot"
                                                    : i % 3 === 1
                                                        ? "red-dot"
                                                        : "yellow-dot"
                                                    }`}
                                            ></div>
                                        </div>
                                    ))}
                                </div>

                                <div className="side-panel">
                                    <div className="side-line long"></div>
                                    <div className="side-line medium"></div>
                                    <div className="side-line short"></div>

                                    <div className="space"></div>

                                    <div className="side-line medium"></div>
                                    <div className="side-line short"></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="hero-content">
                    <h1>A New Way to Learn</h1>

                    <p>
                        LeetCode is the best platform to help you enhance your skills,
                        expand your knowledge and prepare for technical interviews.
                    </p>

                    <Link to="/signup" >Create Account   </Link>

                </div>
            </section>

            <section className="explore-section">
                <div className="icon-container">
                    <div className="explore-icon ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="80"
                            height="80"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M22 10L12 5 2 10l10 5 10-5z" />
                            <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
                            <path d="M22 10v6" />
                        </svg>
                    </div>
                </div>
                <h2>Start Exploring</h2>
                <p>
                    <span>
                        Explore is a well-organized tool that helps you get the most out of
                        LeetCode by providing structure to guide your progress towards the next step in career.
                    </span>
                </p>
                <div className="floating-cards">
                    <div className="mini-card yellow-card"></div>
                    <div className="mini-card green-card"></div>
                    <div className="mini-card blue-card"></div>
                </div>
            </section>
            <section className="companies">
                <h3>
                    Made with <span>❤</span> in SF
                </h3>

                <p>
                    At LeetCode, our mission is to help you improve yourself and land your
                    dream job.
                </p>

                <div className="company-grid">
                    <span>facebook</span>
                    <span>APPLE</span>
                    <span>UBER</span>
                    <span>amazon</span>
                    <span>Pinterest</span>
                    <span>stripe</span>
                    <span>intel</span>
                    <span>cisco</span>
                </div>
            </section>
            <footer className="footer">
                <p>Copyright © 2026 LeetCode</p>

                <div className="footer-links">
                    <a href="/">Download App</a>
                    <a href="/">Help Center</a>
                    <a href="/">Terms</a>
                    <a href="/">Privacy Policy</a>
                </div>
            </footer>
        </div >
    );
}

function App() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/problems/:id" element={<Problems />} />
                <Route path="/questions" element={<Allproblems/>} />
                <Route path="/allproblems" element={<Allproblems/>}/>
                <Route path="/theme" element={<theme/>}/>
            </Routes>

        </BrowserRouter>
    );
}

export default App;