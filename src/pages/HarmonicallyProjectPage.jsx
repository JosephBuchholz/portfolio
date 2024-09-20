import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function HarmonicallyProjectPage() {
  const navigate = useNavigate();

  const paragraphs = [
    <p className="m-5 text-md">
      Harmonically (originally named Musique) is a music application that
      displays standard music notation, guitar tablature, and guitar chord
      sheets with live audio playback. The application was originally developed
      for Android using Kotlin and C++. Though now the project has been ported
      to the Web for greater accessibility using Emscripten, Django, and React.
    </p>,
  ];

  return (
    <main className="flex flex-col overflow-x-hidden">
      <Header useURLNavigation={true}></Header>

      <div>
        <section className="min-h-screen ml-20 mr-20">
          <h1 className="font-bold text-4xl m-5">Harmonically</h1>

          <div className="flex flex-col xl:flex-row">
            <div className="flex-1">
              <p className="m-5 text-md">
                Harmonically (originally named Musique) is a music application
                that displays standard music notation, guitar tablature, and
                guitar chord sheets with live audio playback. The application
                was originally developed for Android using Kotlin and C++.
                Though now the project has been ported to the Web for greater
                accessibility using Emscripten, Django, and React.
              </p>
              <p className="m-5 text-md">
                The project has been in development for over three years and
                consists of over 25,000 lines of code. Over that time the
                project has gone through a few different phases and prototypes.
              </p>
              <p className="m-5 text-md">
                The first prototype started out as a Windows and Anroid
                application created using C++ and a custom UI library. This
                version was way to ambitious as developing a UI library along
                side the application was too much for one person handle.
                Eventually that version was scrapped. Though this version only
                had a few unfinnished features, so not much was lost on this
                prototype.
              </p>
              <p className="m-5 text-md">
                The second version was developed for just Android using Kotlin
                for the UI and C++ for the logic. C++ was used since code could
                then be reused from the previous prototype. This version was
                much easier to build since it just used Android's native UI
                system. This allowed for a greater focus on the application its
                self. Many features were developed for this version compared to
                the first prototype. Features included: a custom sheet music
                rendering engine that rendered MusicXML formated files, a live
                audio playback system that performed the sheet music that was
                displayed on the screen, and a song selection screen that
                retreived MusicXML files from a database on a remote server.
                Ultimatly this version was fine, except that it could only run
                on Android. An attempt was made to use Kotlin Multiplatform to
                make a cross-platform application, but in the end it did not
                work out.
              </p>
              <p className="m-5 text-md">
                Hence, the third and current version was created. It is
                developed for the web using C++, React, and Django. Because a
                significant portion of the second version's code was written in
                C++, porting it to the web did not take as much effort as would
                normally be required. Emscripten was used to compile the C++ to
                WebAsembly so that it could be run in the browser. The
                JavaScript React framework was used for the frontend UI and
                rendering and TailwindCSS was used for styling. And the backend
                Python framework Django was used to deliver the website, to
                provide an API for getting MusicXML files from the database, and
                to faciliate an authentication system. Features in addition to
                the feature present in the second version inculde: a chord sheet
                editor for easily creating guitar chord sheets and a user
                authentication system to save those created chord sheets.
              </p>
              <p className="m-5 text-md">
                In the end, this project is still being developed (though
                admittedly progress has significantly slowed for various
                reasons). Even if this application is never released, it will
                still prove to be an amazing learning experince.
              </p>
            </div>

            <div className="flex-1">
              <div className="m-10">
                <p className="font-semibold text-2xl m-2 text-center">
                  Guitar Chord Sheet Editor
                </p>
                <img
                  className="border border-slate-700 p-2"
                  src="/images/harmonically_editor.png"
                ></img>
              </div>

              <div className="m-10">
                <p className="font-semibold text-2xl m-2 text-center">
                  Custom Sheet Music Rendering
                </p>
                <img
                  className="border border-slate-700 p-2"
                  src="/images/harmonically_pdf.png"
                ></img>
              </div>
            </div>
          </div>
        </section>

        <Footer></Footer>
      </div>
    </main>
  );
}
