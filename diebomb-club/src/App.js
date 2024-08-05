
import './App.css';
import Image from "G:/Images/00171679.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
      <LazyLoadImage src={Image}
        alt="Image Alt"
      />
     </div>
      </header>
    </div>
  );
}

export default App;
