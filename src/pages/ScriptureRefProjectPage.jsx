import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ProjectImage,
  ProjectParagraph,
} from "../components/ProjectPageComponents";
import MainContainer from "../components/MainContainer";
import ProjectHeader from "../components/ProjectHeader";

/**
 * Project page for Scripture reference project.
 */
export default function ScriptureRefProjectPage() {
  return (
    <MainContainer>
      <Header useURLNavigation={true}></Header>

      <div>
        <section className="min-h-screen md:ml-20 md:mr-20">
          <ProjectHeader
            title="Scripture Song Referencer"
            githubUrl="https://github.com/JosephBuchholz/scripture-ref-songs"
            projectWebsiteUrl="https://scripture.josephbuchholz.com/"
            date="July 2024 - Dec. 2024"
          />

          <div className="flex flex-col xl:flex-row">
            {/* Project description */}
            <div className="flex-1">
              <ProjectParagraph>
                This project (which has not been given a very good name yet, and
                probably never will) is a simple web application that allows
                users to look at certain Scripture references of Christian songs
                and hymns. The project was developed using React and Tailwind
                CSS for the front end, and Django for the back end.
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
              <ProjectParagraph>
                This project's development has stopped for now.
              </ProjectParagraph>
            </div>

            {/* Project images */}
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
    </MainContainer>
  );
}
