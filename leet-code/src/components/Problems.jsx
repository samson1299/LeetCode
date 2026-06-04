import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BrowserRouter, Link } from 'react-router-dom';

const Problems = () => {


    const [problems, setProblems] = useState(null);
    const [submission, setSubmission] = useState("");
    const { id } = useParams();
    useEffect(() => {
        const fetchProblems = async () => {
            try {
                const response = await fetch("http://localhost:3001/questions");
                const json = await response.json();
                setProblems(json.questions[id]);
            } catch (err) {
                console.log(err)
            }
        };
        fetchProblems();
    }, [id]);

    const handleSubmit = async () => {
        try {
            const response = await fetch("http://localhost:3001/submissions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": localStorage.getItem("token")
                },
                body: JSON.stringify({
                    gmail: "test@gmail",
                    questionId: 1,
                    answer: submission
                })
            })
            const json = await response.json();
            console.log(json);
            console.log(json.message);
        } catch (err) {
            console.log(err);
        }
    }
    const handleRun = async () => {
        try {
            const response = fetch("http://localhost:3001/run", {
                method: "POST",
                headers: {
                    "Content-Type": "apllication/json"
                },
                body: JSON.stringify({
                    code: submission,
                    questionId: id
                })
            });

            const data = await response.json();
            alert(JSON.stringify(data.results, null, 2));

        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className='code-in'>

            <div className='problems'>
                {problems && (<ProblemStatment Title={problems.Title} Description={problems.Description} Examples={problems.Examples} Constraints={problems.Constraints} />)}
            </div>
            <div className='editor-section'>
                <h1 className='code'>Code here</h1>
                <textarea value={submission} onChange={(e) => setSubmission(e.target.value)} placeholder='Write the code here...' className='text-area' name="problems" id="problems"></textarea>
                <div className='btn-container'>
                    <button onClick={handleRun} className='runbtn'>Run</button>
                    <button onClick={handleSubmit} className='submitbtn'>Submit</button>
                    <Link to="/allproblems" className='runbtn'>Problem List</Link>
                </div>
            </div>

        </div>

    )
}

export default Problems

function ProblemStatment(props) {
    return (
        <div>
            <h1>{props.Title}</h1>
            <h2>Description :{props.Description}</h2>
            {props.Examples?.map((Example, index) => (
                <div key={index} style={{ marginBottom: "20px" }}>
                    <h3>Example: {Example.Example}</h3>
                    <p>
                        <strong>Input:{Example.Input}</strong>
                    </p>
                    <p>
                        <strong>Output:{Example.Output}</strong>
                    </p>
                </div>
            ))}
            <h2>Constraints:</h2>
            <h5>{props.Constraints}</h5>
        </div>
    );

}

