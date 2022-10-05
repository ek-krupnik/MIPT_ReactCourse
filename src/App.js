import './App.css';
import {useState} from "react"
import {Test} from './components/test'
import data from './assets/mock_data.json';

function App() {
  
    const [counter, setCounter] = useState(0)

    const inc = () => {
        setCounter (counter + 1)
    }

    return (
        <div className="App">
            <div className="common">
                {data.map(item => <Test value={item}/>)}
            </div>
        </div>
  );
}

export default App;
