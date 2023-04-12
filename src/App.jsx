import './App.css';
import SingleNote from "./pages/singleNote/singleNote.jsx";
import Start from "./pages/start/start.jsx";
import {useState} from "react";

const pages = {
    start: Start,
    singleNote: SingleNote
}

function App() {
    const [currentPage, setCurrentPage] = useState('start');
    const Page = pages[currentPage];
  return (
    <div className="App">
        <Page {...{setCurrentPage}}/>
    </div>
  )
}

export default App
