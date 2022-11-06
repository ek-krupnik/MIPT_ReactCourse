import './App.css';
import {Post} from './components/post/post';
import data from './assets/data/mock_data.json';

function App() {

    return (
        <div className="App">
            <div className="common">
                {data.map(item => <Post 
                                    title={item.title}
                                    description={item.text}
                                    likes={item.currentLikes}
                                    imageUrl={item.image}
                                    comments={item.commentsCount}
                                    id={item.articleId}
                                   />)}
            </div>
        </div>
  );
}

export default App;
