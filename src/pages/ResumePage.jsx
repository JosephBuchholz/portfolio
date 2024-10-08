import Header from "../components/Header";

export default function ResumePage() {
  return (
    <main className="flex flex-col h-screen">
      <Header useURLNavigation={true}></Header>

      <div className="flex-1">
        <iframe
          src="https://docs.google.com/viewer?url=https://josephbuchholz.com/other_assets/Buchholz_Joseph_Resume.pdf&embedded=true"
          className="w-full h-full"
        ></iframe>
      </div>
    </main>
  );
}
