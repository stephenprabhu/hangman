import React from 'react';
import styles from './Word.module.css';

const Word = ({selectedWord, correctLetters}) => {
return (
    <div className={styles.word}>
        {selectedWord.word.split('').map((letter, i) => {
            return (
                <span key={i} className={styles.letter}>
                {correctLetters.includes(letter) ? letter : ''}
              </span>
            )
        })}
    </div>
) 
  ;
};

export default Word;
