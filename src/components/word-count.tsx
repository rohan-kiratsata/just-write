import React from 'react';
import styles from '@/app/page.module.css';

interface WordCountProps{
    text:string;
}

const WordCount = ({text}:WordCountProps) => {
    const wordCount = text.split(' ').filter(word => word.trim() !== '').length;
    return <div className={styles.wordCount}>{wordCount} words</div>;
}

export default WordCount;