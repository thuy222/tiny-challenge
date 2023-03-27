import "./App.css";
import GuessColor from "./pages/guess/GuessColor";
import Divider from "./components/divider/Divider";
import ApiCalling from "./pages/apiCalling/ApiCalling";
import TreeFolder from "./pages/treeFolder/TreeFolder";
import CircleClick from "./pages/circleClick/CircleClick";
import Login from "./pages/googleLogin/Login";
import SliderForm from "./pages/sliderForm/SliderForm";
import CountDownTimer from "./pages/coundownTimer/CountDownTimer";
import MultiSelect from "./pages/multiSelect/MultiSelect";

function App() {
  return (
    <div className="App">
      <MultiSelect />
    </div>
  );
}

export default App;
