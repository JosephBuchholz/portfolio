import { useLayoutEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-scroll";

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
                I'm <br className="md:hidden"></br>
                <span className="font-bold text-blue-600">Joseph Buchholz</span>
              </h1>

              <Link
                activeClass="active"
                smooth={true}
                spy={true}
                to="projects-marker"
              >
                <p className="cursor-pointer text-white text-center font-semibold font-sans text-2xl bg-blue-700 rounded-full mt-5 p-3 hover:bg-blue-600">
                  My Projects
                </p>
              </Link>

              <div className="mt-5">
                <a href="https://github.com/JosephBuchholz/" target="_blank">
                  <img
                    className="w-14 h-14 m-2"
                    src="images/github_icon.png"
                  ></img>
                </a>
                <a
                  href="https://www.linkedin.com/in/joseph-buchholz-8b6769323/"
                  target="_blank"
                >
                  <img
                    className="h-14 m-2"
                    src="images/linkedin_icon.png"
                  ></img>
                </a>
                <a
                  href="https://wsu.joinhandshake.com/profiles/43552814/"
                  target="_blank"
                >
                  <img
                    className="h-14 m-2"
                    src="images/handshake_icon.png"
                  ></img>
                </a>
                <a href="mailto:joseph.buchholz@outlook.com" target="_blank">
                  <img
                    className="w-14 h-14 m-2"
                    src="images/email_icon.png"
                  ></img>
                </a>
              </div>
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
        <footer className="h-52 bg-slate-900">
          <a
            className="text-white m-10"
            href="https://www.freepik.com/icon/email_542689#fromView=keyword&page=1&position=0&uuid=9cf6f7e3-e86b-41c6-8051-5349d31a321e"
          >
            Email Icon by Freepik
          </a>
        </footer>
      </div>
    </main>
  );
}
