import React from "react";
import styles from "./Header.module.css";
import TopicSelector from "./TopicSelector";

const Header = (props) => {
  const buttonClickHandler = () => {
    props.resetGame();
  }
  return (
    <>
      <h1 className={styles.heading}>
        HANGMAN <i className="fa-solid fa-scarecrow"></i>
      </h1>
      <p className={styles.description}>
        Find the hidden word. Enter a letter.
      </p>
      <TopicSelector onTopicChange={props.topicChangeHandler} />
      <div>
        <button
          type="button"
          onClick={buttonClickHandler}
          className={styles["reset-button"]}
        >
          Reset Game
        </button>
      </div>
    </>
  );
};

export default Header;
