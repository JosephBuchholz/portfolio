import Header from "../components/Header";

export default function HomePage() {
  return (
    <main className="flex flex-col h-screen">
      <Header></Header>

      <div className="flex flex-row flex-1">
        <div className="flex-1 flex justify-center items-center">
          <div className="">
            <h1 className="font-sans text-4xl">Hello</h1>
            <h1 className="font-semibold font-sans text-4xl">
              I'm{" "}
              <span className="font-bold text-blue-600">Joseph Buchholz</span>
            </h1>
          </div>
        </div>

        {/*<div className="w-1/2 h-full bg-blue-700 flex-1 content-center">
          <div className="left-0 ml-5 w-80 h-80 rounded-full bg-slate-400 overflow-clip">
            <img className="object-cover" src="images/me.jpg"></img>
          </div>
        </div>*/}
        <div className="w-1/2 h-full bg-blue-700 flex-1 overflow-clip">
          <img className="object-cover" src="images/me.jpg"></img>
        </div>
      </div>
    </main>
  );
}
