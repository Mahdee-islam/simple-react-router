
import {
  BrowserRouter, Route, Routes
} from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/Not found/NotFound';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
     <Routes>
       <Route  path = "/" element = { <Home/>}/>
       <Route path = "/home" element = { <Home/> }/>
       <Route path = "/about" element = { <About/> }/>
       <Route path = "/friends" element = { <Friends/>}/>
       <Route path = "/friend/:friendId" element = { <FriendDetail/> } />
       <Route path = "/post/:postId" element = { <PostDetail/> } />
       <Route path = "*" element = { <NotFound/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
