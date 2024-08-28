'use client';

import { useState, useEffect, useRef } from "react";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import WordCount from "../components/word-count";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [text, setText] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);


  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  }

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]);

  return (
    <main className={styles.main}>
      <WordCount text={text} />
      <textarea 
        ref={textareaRef}
        value={text} 
        onChange={handleChange} 
        placeholder="Start writing..."
        className={`${styles.textarea} ${inter.className}`}
      ></textarea>  
    </main>
  );
}
