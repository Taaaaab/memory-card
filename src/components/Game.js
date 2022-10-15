import React, {useState, useEffect} from 'react';
import bb from './bb.jpg';
import mk from './mk.webp';
import ltm from './ltm.jpeg'
import sg from './sg.jpeg';
import pc from './pc.jpg';
import rtl from './rtl.webp';

const Game = () => {
    let [score, setScore] = useState(0);
    let [card1, setCard1] = useState(false);
    let [card2, setCard2] = useState(false);
    let [card3, setCard3] = useState(false);
    let [card4, setCard4] = useState(false);
    let [card5, setCard5] = useState(false);
    let [card6, setCard6] = useState(false);
    let [bestScore, setBestScore] = useState(0);

    const incrementCount = () => {
        setScore(score + 1);
    };

    const incrementReset = () => {
        if (score > bestScore) {
            setBestScore(bestScore = score);
            setScore(score = 0);
        }
        setCard1(card1 = false);
        setCard2(card2 = false);
        setCard3(card3 = false);
        setCard4(card4 = false);
        setCard5(card5 = false);
        setCard6(card6 = false);
        setScore(score = 0);
    };

    const card1Ticked = () => {
        if(card1 === false) {
            setCard1(card1 = true);
            incrementCount();
        } else {
            incrementReset();
        }
        console.log(card1);
    };

    const card2Ticked = () => {
        if(card2 === false) {
            setCard2(card2 = true);
            incrementCount();
        } else {
            incrementReset();
        }
        console.log(card2);
    };

    const card3Ticked = () => {
        if(card3 === false) {
            setCard3(card3 = true);
            incrementCount();
        } else {
            incrementReset();
        }
        console.log(card3);
    };

    const card4Ticked = () => {
        if(card4 === false) {
            setCard4(card4 = true);
            incrementCount();
        } else {
            incrementReset();
        }
        console.log(card4);
    };

    const card5Ticked = () => {
        if(card5 === false) {
            setCard5(card5 = true);
            incrementCount();
        } else {
            incrementReset();
        }
        console.log(card5);
    };

    const card6Ticked = () => {
        if(card6 === false) {
            setCard6(card6 = true);
            incrementCount();
        } else {
            incrementReset();
        }
        console.log(card6);
    };

    useEffect(() => {
        const gridRandomize = () => {
            const grid = document.querySelector(".grid");
    
            for (let i = grid.children.length; i >= 0; i--) {
                grid.appendChild(grid.children[Math.random() * i | 0]);
            };
        };

        document.addEventListener("click", gridRandomize);

      }, []);


    return (
        <div>
            <div className="scoreBoard">
                <div>Score: {score}</div>
                <div>Best Score: {bestScore}</div>
            </div>
            <div className="grid">
                <div className="card" onClick={card1Ticked}>
                    <img src={bb} className="animal" alt="bush baby" />
                    <p>Bush Baby</p>
                </div>
                <div className="card" onClick={card2Ticked}>
                    <img src={mk} className="animal" alt="meerkat" />
                    <p>Meerkat</p>
                </div>
                <div className="card" onClick={card3Ticked}>
                    <img src={ltm} className="animal" alt="long tailed macaque" />
                    <p>Long-tailed Macaque</p>
                </div>
                <div className="card" onClick={card4Ticked}>
                    <img src={sg} className="animal" alt="sugar glider" />
                    <p>Sugar Glider</p>
                </div>
                <div className="card" onClick={card5Ticked}>
                    <img src={pc} className="animal" alt="persian cat" />
                    <p>Persian Cat</p>
                </div>
                <div className="card" onClick={card6Ticked}>
                    <img src={rtl} className="animal" alt="ring tailed lemur" />
                    <p>Ring Tailed Lemur</p>
                </div>
            </div>
        </div>
    );
};

export default Game;