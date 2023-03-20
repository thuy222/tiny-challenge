import { useState } from "react";
import "../../App.css";

const SliderForm = () => {
  const [slider, setSlider] = useState<number>(0);

  function onChangeSlider(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setSlider(+e.target.value);
  }

  return (
    <div>
      <h1>Slider Form</h1>

      <div className="sliderContainer">
        <div className="slider">
          <input
            className="sliderBar"
            type="range"
            min="0"
            max="100"
            value={slider}
            id="myRange"
            onChange={(e) => onChangeSlider(e)}
          />
          <div style={{ position: "absolute", left: `${slider / 2}%` }}>
            {slider}
          </div>
        </div>
        <input
          type="number"
          value={slider}
          onChange={(e) => onChangeSlider(e)}
        />
      </div>
    </div>
  );
};

export default SliderForm;
