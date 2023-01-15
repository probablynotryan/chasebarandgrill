import "./App.css";
import Menu from "./components/Menu.jsx";
import Contact from "./components/Contact.jsx";
import Break from "./components/Break.jsx";
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
    case "/menu":
      Component = Menu;
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
    <div className="bg-white h-screen text-black">
      <Navbar />
      <Break />
      <Component />
      <Footer />
    </div>
  );
}
