// // import React from 'react';
// // import Dice from './Dice';
// // import './Player.css';

// // const Player = ({ player, diceValues, rolling, rollDice }) => {
// //     return (
// //         <div className="player">
// //             <h2>Player {player}</h2>
// //             <div className="dice-container">
// //                 {diceValues.map((value, index) => (
// //                     <Dice key={index} value={value} rolling={rolling} />
// //                 ))}
// //             </div>
// //             <button onClick={rollDice} disabled={rolling}>
// //                 Roll Dice
// //             </button>
// //         </div>
// //     );
// // };

// // export default Player;



// import React from 'react';
// import Dice from './Dice';
// import './Player.css';

// const Player = ({ player, diceValues, rolling, rollDice, rollsLeft }) => {
//     return (
//         <div className="player">
//             <h2>Player {player}</h2>
//             <div className="dice-container">
//                 {diceValues.map((value, index) => (
//                     <Dice key={index} value={value} rolling={rolling} />
//                 ))}
//             </div>
//             <button onClick={rollDice} disabled={rolling || rollsLeft === 0}>
//                 Roll Dice ({rollsLeft} rolls left)
//             </button>
//         </div>
//     );
// };

// export default Player;



import React from 'react';
import Dice from './Dice';
import './Player.css';

const Player = ({ player, diceValues, rolling, rollDice, rollsLeft }) => {
    return (
        <div className="player">
            <h2>Player {player}</h2>
            <div className="dice-container">
                {diceValues.map((value, index) => (
                    <Dice key={index} value={index < (5 - rollsLeft) ? value : '?'} rolling={rolling} />
                ))}
            </div>
            <button onClick={rollDice} 

            style={{cursor:rollsLeft === 0 ? "not-allowed":"pointer"}}
            disabled={rolling || rollsLeft === 0}
            // disabled={rollsLeft === 0}
            >
                Roll Dice ({rollsLeft} rolls left)
            </button>
        </div>
    );
};

export default Player;

