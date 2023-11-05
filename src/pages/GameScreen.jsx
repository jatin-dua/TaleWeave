import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";


export default function GameScreen() {

  const [chats, setChats] = useState([]);

  const [feedback, setFeedback] = useState([])

  useEffect(() => {
    async function getInitialPlot(){
        const response = await fetch("http://192.168.112.102:5000/plot");
        const data  = await response.json();
        setChats([{id : 'AI', textData : data.content, img : false}])
    }
    getInitialPlot()
  },[])


  const [inputValue, setInputValue] = useState("");

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const addToChats = () => {
    setChats((prev) => {
      const newValue = { id: uuidv4(), textData: inputValue, img: false };
      return [...prev, newValue];
    });
    setInputValue("");
  };

  const checkEnterKey = (evt) => {
    if (evt.key === "Enter") {
      addToChats();
      componentDidMount();
    }
  };

  async function componentDidMount() {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: 'Hello' })
    };
    const response = await fetch("http://192.168.112.102:5000/response", requestOptions);
    const data = await response.json();
    setFeedback(data)
}

    


  return (
    <section className="game-screen">
      <div className="bg-img bg-[url(./assets/game-screen.png)] w-full h-[100vh] fixed p-4 flex gap-5 shadow-lg items-center ">
        <div className="chat-area bg-white  h-[100%] w-[50%] rounded-xl p-4 flex flex-col-reverse justify-start">
          <textarea
            value={inputValue}
            onKeyDown={checkEnterKey}
            onChange={handleChange}
            placeholder="Enter your text here.."
            className="story-input font-['Mulish'] h-[30%] p-2 w-full border-2 border-[#F2EFF9] outline-none rounded-md mt-2 overflow-y-scroll overflow-x-hidden"
          ></textarea>

          <div className="chats w-full h-[70%] rounded-md border-2 border-[#F2EFF9] p-3 flex flex-col gap-5 overflow-y-scroll">
            {chats.map((chat) => {
              return (
                <div className="chat flex gap-3 w-[70%]">
                  <div style={chat.id === 'AI' ? {backgroundColor : 'black'} : {}} className="profile w-[30px] h-[30px] rounded-[50%] bg-blue-400"></div>
                  <div className="text font-['Mulish'] leading-7 w-[80%] max:w-[80%] min-h-[176px] h-auto bg-[#F2EFF9] shadow-md rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-lg flex px-3 py-2 text-black">
                    <p>{chat.textData}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="feedback bg-white w-[250px] min-h-[200px] h-auto p-6 border-black border-2">
         {feedback.content}
        </div>
      </div>
    </section>
  );
}
