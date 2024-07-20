
import React, { useState } from 'react';
import axios from 'axios';
import Player from './Player';
import './App.css';
import './Rules.css';
const App = () => {
    const [players, setPlayers] = useState([
        { id: 1, diceValues: [], rolling: false, rollsLeft: 5 }
    ]);
    const [result, setResult] = useState('');
    const [numPlayers, setNumPlayers] = useState(1);

    const addPlayer = () => {
        setPlayers([
            ...players,
            { id: players.length + 1, diceValues: [], rolling: false, rollsLeft: 5 }
        ]);
        setNumPlayers(numPlayers + 1);
    };

    const rollDice = (playerIndex) => {
        setPlayers(players.map((player, index) => {
            if (index === playerIndex && player.rollsLeft > 0) {
                player.rolling = true;
                setTimeout(() => {
                    const newRoll = Math.floor(Math.random() * 6) + 1;
                    player.diceValues.push(newRoll);
                    player.rolling = false;
                    player.rollsLeft -= 1;
                    setPlayers([...players]);
                }, 1000);
            }
            return player;
        }));
    };

    const calculateWinner = async () => {
        const playerRolls = players.map(player => player.diceValues);
        const input = playerRolls.map(rolls => `[${rolls.join(', ')}]`).join(' | ');

        try {
            const response = await axios.post('https://pocker-server.onrender.com/api/calculate-winner', { players: input });
            setResult(response.data.winner);
        } catch (error) {
            console.error("There was an error calculating the winner!", error);
        }
    };

    const resetPlayer = ()=>{
        window.location.reload();
    }

    return (
        <div className="app">
            <header className="app-header">
                <h1>Dice Poker Game</h1>
            </header>
            
            <div className="players">
                {players.map((player, index) => (
                    <Player
                        key={player.id}
                        player={player.id}
                        diceValues={player.diceValues}
                        rolling={player.rolling}
                        rollsLeft={player.rollsLeft}
                        rollDice={() => rollDice(index)}
                    />
                ))}
            </div>
            <button onClick={addPlayer} className="add-player-button">Add Player</button>
            <button onClick={calculateWinner} className="calculate-winner-button" style={{cursor:players.some(player => player.rollsLeft > 0)?"not-allowed":"pointer"}} disabled={players.some(player => player.rollsLeft > 0)}>Calculate Winner</button>
            <button onClick={resetPlayer} className="add-player-button">Reset</button>
            {result && <div className="result">{result}</div>}
            <div className="rules">
                <h2>Game Rules</h2>
                <p>Any numbers of player can Play.</p>
                <p>Each player gets 5 chances to roll the dice.</p>
                <p>Dice Ranking Sequence:</p>
                <ul>
                    <li>5 of a kind: e.g., [3, 3, 3, 3, 3]</li>
                    <li>4 of a kind: e.g., [1, 1, 1, 1, 4]</li>
                    <li>Full House: e.g., [2, 2, 3, 3, 2]</li>
                    <li>Straight: e.g., [1, 2, 3, 4, 5]</li>
                    <li>3 of a kind: e.g., [1, 1, 1, 3, 4]</li>
                    <li>Two Pairs: e.g., [1, 1, 3, 4, 4]</li>
                    <li>One Pair: e.g., [1, 1, 3, 5, 4]</li>
                </ul>
                <p>Players must roll exactly 5 times.</p>
                <p>The winner is determined based on the best roll result.</p>
            </div>
        </div>
    );
};

export default App;


