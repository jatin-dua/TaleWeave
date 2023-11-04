export default function GameScreen(){
    return (
        <section className="game-scren">
            <div className="bg-img bg-[url(/game-screen.png)] w-full h-[100vh] fixed p-4">
                <div className="chat-area bg-white border-2 h-[100%] w-[50%] rounded-xl p-4 flex flex-col-reverse justify-start">
                    <textarea className="story-input w-full border-2 border-black rounded-md"></textarea>
                    <div className=" bg-blue-400 w-20 h-20"></div>
            </div>
            </div>
        </section>
    )
}
