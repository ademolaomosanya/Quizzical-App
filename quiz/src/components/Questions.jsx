import React from "react";
import { useState } from "react";

export default function Questions(props) {
const [color, setcolor]= useState(true)
    const styles = {
        backgroundColor: color  ? "white" : "#59E391"
    }
const myColor = () => {
setcolor(prev => !prev)
}

    return (
        <main className="bg-[#F5F7FB] w-[50%] m-auto  p-2">
            <p className="font-['karla'] font-bold text-base text-[#293264]">{props.TriviaQuestion}</p>
            <span className="grid grid-cols-2 mt-4 text-[#293264] text-base font-['inter'] item w-full gap-2 md:flex items-center">
                <button style={styles}
                    onClick={""}
                    className="border-[0.7px]  whitespace-nowrap px-3 border-[#4D5B9E] rounded-[8px]">
                    {props.TriviaInCorrAnswer[0]} </button>
                <button
                    style={styles}
                    onClick={props.ClickedBtn}
                    className="border-[0.7px]   whitespace-nowrap px-3 border-[#4D5B9E] rounded-[8px] whitespace-nowrap">
                    {props.TriviaInCorrAnswer[1]}</button>
                <button
                    style={styles}
                    onClick={props.ClickedBtn}
                    className="border-[0.7px] whitespace-nowrap px-3 border-[#4D5B9E] rounded-[8px] whitespace-nowrap">
                    {props.TriviaInCorrAnswer[2]}</button>
                <button
                    style={styles}
                    onClick={myColor}
                    className="border-[0.7px] whitespace-nowrap px-3 border-[#4D5B9E] rounded-[8px] whitespace-nowrap">
                    {props.TriviaCorrAnswer}</button>
            </span>
        </main>
    )
}
