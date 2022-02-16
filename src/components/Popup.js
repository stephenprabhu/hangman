import React from 'react';
import { checkIfWon } from '../helpers/helpers';
import { useEffect } from 'react';

const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
    let finalMessage = '';
    let finalMessageRevealWord = '';
    let description = '';
    let playable = true;

    const isWon = checkIfWon(correctLetters, wrongLetters, selectedWord.word);
    let classes = 'popup ';
    if(isWon ==='win'){
        finalMessage = 'Congratulations! You won! 😃';
        finalMessageRevealWord = `${selectedWord.word}`;
        description=selectedWord.description;
        playable = false;
        classes+= 'success';
    } else if (isWon === 'lose'){
        finalMessage = 'Unfortunately you lost. 😕';
        finalMessageRevealWord = `${selectedWord.word}`
        playable = false;
        description=selectedWord.description;
    }

    useEffect(()=>setPlayable(playable));
    return     (
    <div className="popup-container" style={finalMessage !== '' ? {display:'flex'}:{}}>
        <div className={classes}>
            <h2>{finalMessage}</h2>
            The word was: 
            <h3 className="finalRevealWord"><span>{finalMessageRevealWord}</span></h3>
            <p>{description}</p>
            <button onClick={playAgain}>Play Again</button>
        </div>
    </div>
);
};

export default Popup;
