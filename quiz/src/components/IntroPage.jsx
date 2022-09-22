import React from "react"
import getData from "../services/triva"

export default function IntroPage(props) {
    return (
<> <div className="bg-[#F5F7FB] md:w-[30%] w-full mt-20  md:m-auto">
            <div className="text-center grid gap-4 py-40">
                <span>
                    <h1 className="font-['karla'] font-bold text-2xl text-[#293264]">Quizzical</h1>
                    <p className="font-['inter'] font-normal text-base text-[#293264]">Some description if needed</p>
                </span>
              <div className="flex items-center justify-center">
              <button onClick={getData()} className="bg-[#4D5B9E] rounded-[15px] w-[193px]  h-[52px] text-white">Start quiz</button>
              </div>
            </div>
        </div></>
    )
}