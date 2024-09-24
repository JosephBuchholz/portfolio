import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ProjectImage,
  ProjectParagraph,
} from "../components/ProjectPageComponents";

export default function ScriptureRefProjectPage() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <Header useURLNavigation={true}></Header>

      <div>
        <section className="min-h-screen ml-20 mr-20">
          <div className="flex flex-row">
            <h1 className="font-bold text-4xl m-5">
              Scripture Song Referencer
            </h1>
            <div className="min-w-10">
              <a
                className=""
                href={"https://github.com/JosephBuchholz/scripture-ref-songs"}
                target="_blank"
              >
                <img
                  className="h-10 hover:opacity-80"
                  src="/images/github_icon.png"
                ></img>
              </a>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row">
            <div className="flex-1">
              <ProjectParagraph>
                This project (which has not been given a very good name yet) is
                a simple web application that allows users to look at certain
                Scripture references of Christian songs and hymns. The project
                is being developed using React and Tailwind CSS for the front
                end, and Django for the back end.
              </ProjectParagraph>
              <ProjectParagraph>
                Essentially, how this app functions, is on the "Songs" page, the
                user can select which hymn they want to view. Once it has been
                selected, a request is sent to the backend to retrieve the data
                associated with that hymn (which includes a Json file containing
                the lyrics and scripture references). This is then displayed to
                the user, where they can view the Bible verses associated with
                each lyric, and read the verses displayed on the right.
              </ProjectParagraph>
            </div>

            <div className="flex-1">
              <ProjectImage
                title="Hymn: Great Is Thy Faithfulness"
                src="/images/scripture_ref.png"
              ></ProjectImage>
            </div>
          </div>
        </section>

        <Footer></Footer>
      </div>
    </main>
  );
}
