import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Instructions from "./instructions";
import Movies from './components/Movies/Movies'
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Instructions />
      <Movies/>
      <Footer />
    </div>
  );
};

export default App;
