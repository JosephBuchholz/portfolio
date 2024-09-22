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
          <h1 className="font-bold text-4xl m-5">Scripture Song Referencer</h1>

          <div className="flex flex-col xl:flex-row">
            <div className="flex-1">
              <ProjectParagraph>Hello</ProjectParagraph>
            </div>

            <div className="flex-1"></div>
          </div>
        </section>

        <Footer></Footer>
      </div>
    </main>
  );
}
