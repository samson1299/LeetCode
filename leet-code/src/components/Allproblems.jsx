import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter, Link } from 'react-router-dom';
const Allproblems = () => {
    const [problems, setProblems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/questions").then((res) => res.json()).then((data) => {
            setProblems(data.questions);
        })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <div className="table-prb ">
                <div>Problem</div>
                <div>Acceptance</div>
                <div>Difficulty</div>
            </div>
            <div>
                {problems.map((problems, index) => <Link to={`/problems/${index}`} key={index} style={{ textDecoration: "none", color: "inherit" }} ><ProblemStatement title={problems.Title} Description={problems.Description} Input={problems.Input} Output={problems.Output} Acceptance={problems.Acceptance} Difficulty ={problems.Difficulty} /></Link>)}
            </div>
        </div>
    )
}

export default Allproblems
function ProblemStatement(props) {
    return (
        <div className='table-prb' >

            <h3>{props.title}</h3>

            <p>{props.Acceptance}</p>

            <p style={{ color: props.Difficulty === "Easy" ? "green" : props.Difficulty === "Medium" ? "orange" : "red" }}>
                {props.Difficulty}
            </p>
        </div>
    );
}
