import styles from './TopicSelector.module.css';
import { useRef } from 'react';

const TopicSelector = (props) => {

    const selectRef = useRef();
    const topicChangeHandler = (e)=>{
        console.log('inside topic change selecte clicked')
        const selectedValue= parseInt(e.target.value);
        if(selectedValue!=null){
            console.log('inside topic change: ', selectedValue);
            props.onTopicChange(selectedValue);
        }
        selectRef.current.blur();
    }
  return (
    <div className={styles.menu}>
        <div className={styles['section-heading']}>Topic:</div>
        <span className={styles['custom-dropdown']}>
        <select ref={selectRef} onChange={topicChangeHandler}>
            <optgroup label="Easy">
                <option value="0">Months Of Year</option>
                <option value="1">Planets</option>
            </optgroup>
            <optgroup label="Medium">
                <option value="2">Colors</option>
                <option value="3">Movies</option>
            </optgroup>
            <optgroup label="Hard">
                <option value="4">Phobias</option>
                <option value="5">Dinosaurs</option>
            </optgroup>
        </select>
        </span>
       
    </div>
  )
}

export default TopicSelector;