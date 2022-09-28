import React from "react";
import { useState } from "react";

export default function Questions(props) {
    const [color, setColor] = useState('')
    const styles = (select) =>
        select ? " bg-[#D6DBF5] "
            : "border-[#4D5B9E] border-2"
    const defaultClass = "border-[0.7px] whitespace-nowrap px-3 border-[#4D5B9E] rounded-[8px] whitespace-nowrap bg-[#F5F7FB]"

    return (
        <main className="bg-[#F5F7FB] w-[50%] m-auto  p-2">
            <div>
                <p className="font-['karla'] font-bold text-base text-[#293264]">{props.TriviaQuestion}</p>
                <span className="grid grid-cols-2 mt-4 text-[#293264] text-base font-['inter'] item w-full gap-2 md:flex items-center">
                    <button
                        className={defaultClass + styles(color === 'btn1')}
                        onClick={() => {
                            setColor('btn1')

                        }}
                    >
                        {props.TriviaInCorrAnswer[0]} </button>
                    <button

                        onClick={() => {setColor('btn2')

                    }}
                        className={defaultClass + styles(color === 'btn2')}>
                        {props.TriviaInCorrAnswer[1]}</button>
                    <button

                        onClick={() =>{
                            setColor('btn3')

                        }}
                        className={defaultClass + styles(color === 'btn3')}>
                        {props.TriviaInCorrAnswer[2]}</button>
                    <button

                        onClick={() => {
                            setColor('corrBtn')

                        }}
                        className={defaultClass + styles(color === 'corrBtn')}>
                        {props.TriviaCorrAnswer}</button>
                </span>
            </div>


        </main>
    )
}
