import './App.css';
import SingleNote from "./pages/singleNote/singleNote.jsx";
import Start from "./pages/start/start.jsx";
import {useEffect, useState} from "react";

const pages = {
    start: Start,
    singleNote: SingleNote
}

function App() {
    const [soundsLoaded, setSoundsLoaded] = useState(false);
    const [currentPage, setCurrentPage] = useState('start');
    const Page = pages[currentPage];

    useEffect(()=>console.log('sounds loaded: ',soundsLoaded),[soundsLoaded]);

  return (
    <div className="App">
        <Page {...{soundsLoaded, setCurrentPage, setSoundsLoaded}}/>
    </div>
  )
}

export default App
