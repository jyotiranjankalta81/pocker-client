// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const Game = () => {
// //     const [input, setInput] = useState('');
// //     const [result, setResult] = useState('');

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const response = await axios.post('http://localhost:5000/api/calculate-winner', { players: input });
// //             setResult(response.data.winner);
// //         } catch (error) {
// //             console.error("There was an error calculating the winner!", error);
// //         }
// //     };

// //     return (
// //         <div>
// //             <form onSubmit={handleSubmit}>
// //                 <input
// //                     type="text"
// //                     value={input}
// //                     onChange={(e) => setInput(e.target.value)}
// //                     placeholder='Enter players rolls'
// //                 />
// //                 <button type="submit">Calculate Winner</button>
// //             </form>
// //             {result && <h2>{result}</h2>}
// //         </div>
// //     );
// // };

// // export default Game;




// import React, { useState } from 'react';
// import axios from 'axios';
// import Dice from './Dice';
// import './Game.css';

// const Game = () => {
//     const [input, setInput] = useState('');
//     const [result, setResult] = useState('');
//     const [rolling, setRolling] = useState(false);
//     const [diceValues, setDiceValues] = useState([1, 1, 1, 1, 1]);

//     const handleRollDice = () => {
//         setRolling(true);
//         setTimeout(() => {
//             setDiceValues(diceValues.map(() => Math.floor(Math.random() * 6) + 1));
//             setRolling(false);
//         }, 1000);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5000/api/calculate-winner', { players: input });
//             setResult(response.data.winner);
//         } catch (error) {
//             console.error("There was an error calculating the winner!", error);
//         }
//     };

//     return (
//         <div className="game">
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                     placeholder='Enter players rolls'
//                 />
//                 <button type="submit">Calculate Winner</button>
//             </form>
//             <div className="dice-container">
//                 {diceValues.map((value, index) => (
//                     <Dice key={index} value={value} onClick={handleRollDice} rolling={rolling} />
//                 ))}
//             </div>
//             {result && <h2>{result}</h2>}
//         </div>
//     );
// };

// export default Game;
