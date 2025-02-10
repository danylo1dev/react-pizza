import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Pizza from "./components/Pizza";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
const items = [
  {
    img: "test",
    title: "test pizza",
    desc: "desc",
  },
];
function App() {
  return (
    <div className="container">
      <Header />
      <Menu items={items} />
      <Footer />
    </div>
  );
}

export default App;
