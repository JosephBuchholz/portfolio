import Footer from "../components/Footer";
import Header from "../components/Header";

export function Paragraph({ children, className = "" }) {
  return (
    <p className={`font-serif text-lg text-text my-2 ${className}`}>
      {children}
    </p>
  );
}

export function Card({ children, className = "" }) {
  return <div className={`bg-background-panel p-6 mt-10 rounded-sm ${className}`}>{children}</div>;
}

/**
 * The home page.
 */
export default function HomePage() {
  return (
    <main
      id="home-marker"
      className="flex flex-col overflow-x-hidden bg-background h-screen"
    >
      <Header></Header>

      <div className="self-center w-2/3 max-w-3xl">
        <Card>
          <div className="flex flex-row justify-between">
            <div>
              <h1 className="font-serif text-3xl font-semibold text-text">
                Hello,
                <br />
                I&apos;m Joseph Buchholz
              </h1>
              <Paragraph>I am a hardworking and skilled computer science student at WSU (entering my first year for a masters in CS). I enjoy both the problem solving and creative aspects of computer programming which I have been exploring for over 7 years now. As I begin pursuing my masters degree, I am excited to start delving into the world of programming language research.</Paragraph>
            </div>

            <div className="min-w-60 w-60 h-60 rounded-sm ml-4 bg-background overflow-clip">
              <img className="object-cover" src="/images/me.jpg"></img>
            </div>
          </div>
        </Card>

        <Card>
          <Paragraph>More text ....</Paragraph>
        </Card>

        <Card>
          <Paragraph>More text ....</Paragraph>
        </Card>

        <Card>
          <Paragraph>More text ....</Paragraph>
        </Card>

        <Card>
          <Paragraph>More text ....</Paragraph>
        </Card>
      </div>

      <Footer></Footer>
    </main>
  );
}
