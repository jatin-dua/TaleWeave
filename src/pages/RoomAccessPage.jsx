export default function RoomAccessPage() {
  return (
    <div className="wrapper w-full h-[100vh] bg-white lg:p-4">
      <main className="home-page bg-[url(./assets/homepage-bg-img.png)] h-full w-full object-cover flex flex-col items-center justify-center gap-10 bg-no-repeat rounded-md shadow-lg">
        <div className="title font-['Gwendolyn'] text-8xl">
          <h1 className=" drop-shadow-lg">TaleWeave</h1>
        </div>
        <div className="code-container lg:w-[350px] w-[300px] h-[300px] lg:h-[450px] bg-[rgba(255,94,94,.4)] flex flex-col items-center justify-center gap-4 font-['Handlee'] rounded">
            <h1 className=" text-2xl uppercase">Access Code :</h1>
            <input type="text" className="w-[90%] h-[40px] rounded-lg outline-none text-center text-2xl font-medium" />
        </div>
      </main>
    </div>
  );
}
