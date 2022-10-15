import React, {useState} from "react";

const Game = () => {
    const [score, setScore] = useState(0);

    const incrementCount = () => {
        setScore(score + 1);
    };

    return (
        <div>
            <div className="scoreBoard">
                <div>{score}</div>
                <button onClick={incrementCount}>Increment</button>
            </div>
            <div className="cards">
                <div className="card">Bush Baby</div>
                <div className="card">Meerkat</div>
                <div className="card">Long-tailed Macaque</div>
                <div className="card">Sugar Glider</div>
                <div className="card">Persian Cat</div>
                <div className="card">Card6</div>
            </div>
        </div>
    );
};

export default Game;