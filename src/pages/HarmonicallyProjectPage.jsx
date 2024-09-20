import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function HarmonicallyProjectPage() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col">
      <Header useURLNavigation={true}></Header>

      <div>
        <p>Hello</p>

        <Footer></Footer>
      </div>
    </main>
  );
}
