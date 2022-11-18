import './App.scss'
import {Articles} from './components/article/article'
import {CreateArticle} from './components/add_article/article_creation/create_article'

function App() {

    return (
        <div className="App">
            <div className="common">
                <Articles/>
                <CreateArticle/>
            </div>
        </div>
  );
}

export default App;
