import { useState } from "react"
import { chatData } from "../Utils/chatData";
import {v4 as uuidv4} from 'uuid';

export default function GameScreen(){

    const [chats, setChats] = useState(chatData);

    const [inputValue, setInputValue] = useState('');

    const handleChange = (evt) =>{
        setInputValue(evt.target.value)
    }

    const addToChats = () => {
            setChats((prev) => {
                const newValue  = {id : uuidv4(), textData : inputValue, img : false};
                return [...prev, newValue];
            })
            setInputValue('');
    }

    const checkEnterKey = (evt) => {
        if(evt.key === "Enter"){
            addToChats();
        }
    }

    return (
        <section className="game-screen">
            <div className="bg-img bg-[url(/game-screen.png)] w-full h-[100vh] fixed p-4">
                <div className="chat-area bg-white border-2 h-[100%] w-[50%] rounded-xl p-4 flex flex-col-reverse justify-start">
                    <textarea value={inputValue} onKeyDown={checkEnterKey} onChange={handleChange} placeholder="Enter your text here.." className="story-input h-[30%] w-full border-2 border-gray-300 outline-none rounded-md mt-2 overflow-y-scroll overflow-x-hidden"></textarea>

                    <div className="chats w-full h-[70%] border-2 rounded-md border-black p-3 flex flex-col gap-3 overflow-y-scroll">
                        {chats.map((chat) => {
                            return (
                            <div className="chat flex gap-3 w-[70%]">
                                <div className="profile w-[30px] h-[30px] rounded-[50%] bg-blue-200"></div>
                                <div className="text w-[80%] max:w-[80%] min-h-[176px] h-auto border-2 border-gray-500 rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-lg flex px-2 text-black">
                                    <p>{chat.textData}</p>
                                </div>
                             </div> 
                            )
                        })}
                    </div>
            </div>
            </div>
        </section>
    )
}

 
