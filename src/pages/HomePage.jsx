export default function HomePage(){
    return(
        <div className="wrapper w-full h-[100vh] bg-white lg:p-4">
            <main className="home-page bg-[url(./assets/homepage-bg-img.png)] h-full w-full object-cover flex flex-col items-center justify-center gap-10 bg-no-repeat rounded-md shadow-lg">
            <div className="title font-['Gwendolyn'] text-8xl">
                <h1 className=" drop-shadow-lg">TaleWeave</h1>
            </div>
            <div className="play-button font-['Handlee'] font-base text-xl">
                <button className=" bg-[rgba(255,94,94,.4)] px-3 py-1 lg:p-0 lg:h-[55px] lg:w-[197px] rounded-md text-black">How to Play</button>
            </div>
            <div className="play-button flex gap-8 font-['Handlee'] font-base text-xl">
                <button className=" bg-[rgba(255,94,94,.4)] px-6 py-1 lg:p-0 lg:h-[55px] lg:w-[197px] rounded-md text-black">Solo</button>
                <button className=" bg-[rgba(255,94,94,.4)] px-3 py-1 lg:p-0 lg:h-[55px] lg:w-[197px] rounded-md text-black">Multiplayer</button>
            </div>
        </main>
        </div>
    )
}