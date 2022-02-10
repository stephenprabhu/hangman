import React from 'react';
import { checkIfWon } from '../helpers/helpers';
import { useEffect } from 'react';

const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
    let finalMessage = '';
    let finalMessageRevealWord = '';
    let description = '';
    let playable = true;

    const isWon = checkIfWon(correctLetters, wrongLetters, selectedWord.word);
    if(isWon ==='win'){
        finalMessage = 'Congratulations! You won! 😃';
        finalMessageRevealWord = `The word was: ${selectedWord.word}`;
        description=selectedWord.description;
        playable = false;
    } else if (isWon === 'lose'){
        finalMessage = 'Unfortunately you lost. 😕';
        finalMessageRevealWord = `The word was: ${selectedWord.word}`
        playable = false;
        description=selectedWord.description;
    }

    useEffect(()=>setPlayable(playable));
    return     (
    <div className="popup-container" style={finalMessage !== '' ? {display:'flex'}:{}}>
        <div className="popup">
            <h2>{finalMessage}</h2>
            <h3>{finalMessageRevealWord}</h3>
            <p>{description}</p>
            <button onClick={playAgain}>Play Again</button>
        </div>
    </div>
);
};

export default Popup;
