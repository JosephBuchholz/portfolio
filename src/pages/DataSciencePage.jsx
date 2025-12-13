import Header from "../components/Header";

export default function DataSciencePage() {
  return (
    <main className="flex flex-col h-screen">
      <Header useURLNavigation={true}></Header>

      <div className="flex-1">
        <iframe
          src="https://docs.google.com/viewer?url=https://josephbuchholz.com/other_assets/data_science_final_report.pdf&embedded=true"
          className="w-full h-full"
        ></iframe>
      </div>
    </main>
  );
}
