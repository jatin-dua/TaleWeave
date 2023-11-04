export default function GameScreen(){
    return (
        <section className="game-screen">
            <div className="bg-img bg-[url(/game-screen.png)] w-full h-[100vh] fixed p-4">
                <div className="chat-area bg-white border-2 h-[100%] w-[50%] rounded-xl p-4 flex flex-col-reverse justify-start">
                    <textarea placeholder="Enter your text here.." className="story-input h-[30%] w-full border-2 border-gray-300 outline-none rounded-md mt-2 "></textarea>
                    <div className="chats w-full h-[70%] border-2 rounded-md border-black p-3 flex flex-col gap-3 overflow-y-scroll">
                        <div className="chat flex gap-1">
                            <div className="profile w-[30px] h-[30px] rounded-[50%] bg-blue-200"></div>
                            <div className="text w-[80%] h-44 border-2 border-gray-500 rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-lg"></div>
                        </div>
                        <div className="chat flex gap-1">
                            <div className="profile w-[30px] h-[30px] rounded-[50%] bg-blue-200"></div>
                            <div className="text w-[80%] h-44 border-2 border-gray-500 rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-lg"></div>
                        </div>
                        <div className="chat flex gap-1">
                            <div className="profile w-[30px] h-[30px] rounded-[50%] bg-blue-200"></div>
                            <div className="text w-[80%] h-44 border-2 border-gray-500 rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-lg"></div>
                        </div>
                    </div>
            </div>
            </div>
        </section>
    )
}
