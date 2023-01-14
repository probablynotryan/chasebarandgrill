import "./App.css";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import Break from "./components/Break.jsx";
import Jobs from "./components/Jobs.jsx";
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer";
import Locations from "./components/Locations";

export default function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = About;
      break;
    case "/services":
      Component = Services;
      break;
    case "/jobs":
      Component = Jobs;
      break;
    case "/contact":
      Component = Contact;
      break;
    case "/locations":
      Component = Locations;
      break;
    default:
      Component = About;
  }

  return (
    <div className="bg-white h-screen text-white">
      <Navbar />
      <Break />
      <Component />
      <Footer />
    </div>
  );
}
