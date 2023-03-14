import "./App.css";
import GuessColor from "./pages/guess/GuessColor";
import Divider from "./components/divider/Divider";
import ApiCalling from "./pages/apiCalling/ApiCalling";
import TreeFolder from "./pages/treeFolder/TreeFolder";

function App() {
  return (
    <div className="App">
      {/* <Divider /> */}
      {/* <GuessColor /> */}
      {/* <Divider /> */}
      {/* <ApiCalling /> */}
      {/* <Divider /> */}
      <TreeFolder />
    </div>
  );
}

export default App;
