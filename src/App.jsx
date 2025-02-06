import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Pizza from "./components/Pizza";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Pizza />
      <Footer />
    </div>
  );
}

export default App;
