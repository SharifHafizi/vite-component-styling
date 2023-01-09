import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ComponentArray from "./components/componentArray/ComponentArray.jsx";
import PropsChildren from "./components/PropsWithChildren";
import PropsComponent from "./components/PropsComponent/PropsComponent";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <ComponentArray />
      <PropsChildren />
      <h2>This is props with children</h2>
      <PropsChildren />
      <PropsComponent title="MR" price="145$" />
    </div>
  );
}

export default App;
