import './App.css';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import { useState, useEffect } from 'react';
import {showNotification as show} from './helpers/helpers';
import Notification from './components/Notification';
import Popup from './components/Popup';
import WordsList from './Words';

// const words =WordsList[0];
// const selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable, setPlayable]= useState(true);
  const [correctLetters, setCorrectLetters]= useState([]);
  const [wrongLetters, setWrongLetters]= useState([]);
  const [showNotification, setShowNotification]=useState(false);
  const [words, setWords]= useState(WordsList[0]);
  const [selectedWord, setSelectedWord]= useState(words[Math.floor(Math.random() * words.length)]);
  const [topic, setTopic]= useState(0);

  useEffect(()=>{
    const handleKeyDown = event =>{
      const  {key, keyCode} = event;
        if ( playable && keyCode >= 65 && keyCode <= 90) {
          const letter = key.toLowerCase();
    
          if (selectedWord.word.includes(letter)) {
            if (!correctLetters.includes(letter)) {
              setCorrectLetters(currentLetters =>[...currentLetters, letter])    
            } else {
              show(setShowNotification);
            }
          } else {
            if (!wrongLetters.includes(letter)) {
              setWrongLetters(currentLetters =>[...currentLetters, letter])    
                } else {
                  show(setShowNotification);
                }
          }
        }
      }
      window.addEventListener('keydown', handleKeyDown);

      return ()=> window.removeEventListener('keydown', handleKeyDown);

  },[correctLetters, wrongLetters, playable, selectedWord]);


  useEffect(()=>{
    console.log('Topic: ', topic);
    setWords(WordsList[topic]);
    playAgain();
  },[topic,words]);


  function playAgain(){
    console.log('words just before select', words);
    setPlayable(true);
    setCorrectLetters([]);
    setWrongLetters([]);
    setSelectedWord(words[Math.floor(Math.random() * words.length)]);
    console.log('selected word:' , selectedWord.word);
  }

  return (
    <div className='main'>
      <div className='menu'>
      <Header resetGame={playAgain} topicChangeHandler={setTopic} />
      </div>
      <div>
        <div className='game-container'>
          <Figure wrongLetters={wrongLetters} />
          <WrongLetters wrongLetters={wrongLetters} />
          <Word selectedWord={selectedWord} correctLetters={correctLetters} />
          <div className="mobile-message">
            This game currently cannot be played on a mobile device.
          </div>
        </div>
        <Popup 
          correctLetters={correctLetters} 
          wrongLetters={wrongLetters}
          selectedWord={selectedWord}
          setPlayable={setPlayable}
          playAgain={playAgain} />
        <Notification showNotification={showNotification} />
      </div>

    </div>
  );
}

export default App;
