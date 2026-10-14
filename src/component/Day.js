
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Word from './Word';
import { useEffect, useState } from "react";
import useFetch from "../hooks/UseFetch";

export default function Day() {
    const { day } =  useParams();

    const allWords = useFetch("http://localhost:3001/words")
    
    const words = allWords.filter(
        word => Number(word.day) === Number(day)
    );

    return (
    <>

         <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map(word => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
    )

}