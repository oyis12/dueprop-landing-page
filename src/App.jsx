import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import LandingPage from "./pages/Landing-page.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}
