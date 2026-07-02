import Footer from "../components/Footer";
import Header from "../components/Header";

export default function DataSciencePage() {
  return (
    <main className="h-screen bg-background">
      <div className="flex flex-col h-screen">
        <Header useURLNavigation={true}></Header>

        <div className="flex-1">
          <iframe
            src="https://docs.google.com/viewer?url=https://josephbuchholz.com/other_assets/data_science_final_report.pdf&embedded=true"
            className="w-full h-full bg-background"
          ></iframe>
        </div>
      </div>

      <Footer></Footer>
    </main>
  );
}
