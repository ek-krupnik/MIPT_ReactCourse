import './App.css';
import {Post} from './components/test';
import data from './assets/mock_data.json';

function App() {

    return (
        <div className="App">
            <div className="common">
                {data.map(item => <Post value={item}/>)}
            </div>
        </div>
  );
}

export default App;
