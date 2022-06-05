import './App.css';
import {useState} from "react";
import SolutionGenerator from "./SolutionGenerator";

function App() {

    const STATE_EMPTY = 0;
    const STATE_CALCULATING = 1;
    const STATE_SHOW_ANSWERS = 2;

    const [inputs, setInputs] = useState([null, null, null, null, null, null]);
    const [target, setTarget] = useState(null);
    const [status, setStatus] = useState(STATE_EMPTY);
    const [solution, setSolution] = useState('');

    const updateInput = function (event) {
        setInputs(oldInputs => {
            const newInputs = oldInputs.slice(0);
            newInputs[event.target.name] = event.target.value;
            return newInputs;
        });
    }

    const updateTarget = function (event) {
        setTarget(event.target.value);
    }

    const go = function () {
        setStatus(STATE_CALCULATING);
        const solutionGenerator = new SolutionGenerator();
        const solution = solutionGenerator.generate(inputs, target);
        if (solution) {
            setSolution(solution.toString() + " = " + solution.getValue());
            setStatus(STATE_SHOW_ANSWERS);
        } else {
            setSolution('');
            setStatus(STATE_EMPTY);
        }
    }

    return (
        <div className="App">
            <h1>Countdown Numbers Round Solver</h1>
            <p>
                This tool solves numbers rounds from the UK TV game show <a href={
                    "https://www.channel4.com/programmes/countdown"
                }>Countdown</a>. It takes the numbers from the upper inputs, and produces a mathematical equation to
                reach the number in the lower input.
            </p>
            <hr />
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
                justifyContent: "center"
            }}>
                {inputs.map((val, n) => {
                    return <input
                        key={n}
                        type="number"
                        name={"" + n}
                        value={val || ""}
                        onChange={updateInput}
                        style={{
                            height: "2em"
                        }}
                    />;
                })}
            </div>
            <hr />
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
                justifyContent: "center"
            }}>
                <input
                    value={target || ""}
                    onChange={updateTarget}
                    type="number"
                    style={{
                        height: "2em"
                    }}
                />
                <button
                    disabled={inputs.filter((val) => !val).length !== 0 || !target}
                    onClick={go}
                >
                    Go!
                </button>
            </div>
            <hr />
            <div>{solution}</div>
        </div>
    );
}

export default App;
