import React, {useState} from 'react';
import bb from './bb.jpg';
import mk from './mk.webp';
import ltm from './ltm.jpeg'
import sg from './sg.jpeg';
import pc from './pc.jpg';
import rtl from './rtl.webp';

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
                <div className="card">
                    <img src={bb} className="animal" alt="bush baby" />
                    <p>Bush Baby</p>
                </div>
                <div className="card">
                    <img src={mk} className="animal" alt="meerkat" />
                    <p>Meerkat</p>
                </div>
                <div className="card">
                    <img src={ltm} className="animal" alt="long tailed macaque" />
                    <p>Long-tailed Macaque</p>
                </div>
                <div className="card">
                    <img src={sg} className="animal" alt="sugar glider" />
                    <p>Sugar Glider</p>
                </div>
                <div className="card">
                    <img src={pc} className="animal" alt="persian cat" />
                    <p>Persian Cat</p>
                </div>
                <div className="card">
                    <img src={rtl} className="animal" alt="ring tailed lemur" />
                    <p>Ring Tailed Lemur</p>
                </div>
            </div>
        </div>
    );
};

export default Game;