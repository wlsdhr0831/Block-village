import React from 'react';
import styles from './search_type.module.css';

const SearchType = ({ onChangeSearchType }) => {
    return (<div className={styles.typeForm}>
        <button 
            className={styles.button}
            onClick={onChangeSearchType}
            value="updatedAt">NEW</button>
        <button
            className={styles.button}
            onClick={onChangeSearchType}
            value="missionLike">좋아요 순</button>
        <button 
            className={styles.button}
            onClick={onChangeSearchType}
            value="people">참여 많은 순</button>
        <button 
            className={styles.button}
            onClick={onChangeSearchType}
            value="difficulty">난이도 순</button>
    </div>);
}

export default SearchType;