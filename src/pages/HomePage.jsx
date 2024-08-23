import { useLayoutEffect, useState } from "react";
import Header from "../components/Header";

export default function HomePage() {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useLayoutEffect(() => {
    function onResizeListener() {
      setWindowSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener("resize", onResizeListener);
    return () => window.removeEventListener("resize", onResizeListener);
  }, []);

  let sideImage = <></>;
  if (windowSize[0] > 500) {
    sideImage = (
      <div className="w-1/2 h-full bg-blue-700 flex-1 content-center">
        <div className="left-0 ml-5 w-80 h-80 rounded-full bg-slate-400 overflow-clip">
          <img className="object-cover" src="images/me.jpg"></img>
        </div>
      </div>
    );
  } else {
    sideImage = (
      <div className="w-1/2 h-full bg-blue-700 flex-1 overflow-clip">
        <img className="h-full object-cover" src="images/me.jpg"></img>
      </div>
    );
  }

  return (
    <main id="home-marker" className="flex flex-col">
      <Header></Header>

      <div>
        <section className="flex flex-row flex-1 h-screen">
          <div className="flex-1 flex justify-center items-center ">
            <div className="">
              <h1 className="font-sans text-4xl">Hello</h1>
              <h1 className="font-semibold font-sans text-4xl">
                I'm{" "}
                <span className="font-bold text-blue-600">Joseph Buchholz</span>
              </h1>
            </div>
          </div>

          {sideImage}
        </section>
        <section id="skills-marker">
          Skills
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
        </section>
        <section id="projects-marker">
          Projects
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
        </section>
        <footer className="h-52 bg-slate-900"></footer>
      </div>
    </main>
  );
}
