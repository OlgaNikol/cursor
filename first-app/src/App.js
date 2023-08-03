import './App.css';
import avatar from './assets/images/avatar.jpg'
import bird from './assets/images/bird.png.webp'

import {Post} from './components/Post';

const data = {
    author: {
        name: "Nadine Yousif",
        photo: {avatar},
        nickname: "@nadin_yus"
    },
    content: "A self-taught photographer has come face-to-face with a kestrel swooping towards him.",
    image: {bird},
    date: "26 февр."
}


function App() {
    return (
        <div className="App">
            <Post author={data.author}
                  content={data.content}
                  image={data.image}
                  date={data.date}
            />
        </div>
    );
}

export default App;
