import logo from './logo.svg';
import './App.css';
import AddMusic from './components/music_detail';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import EditMusic from './components/Create_page'
import Music from './components/musics'
import { Provider } from 'react-redux'
import {Store} from "../src/state/store";

function App() {
  return (
    <div className="App bg-zinc-100">
     {/* <Music/> */}
     <Provider store={Store}>
       <Router>
         <Routes>
         <Route path="/" exact element={<Music/> }/>
         <Route path="/view" exact element={<AddMusic/> }/>
         <Route path="/myForm/:id" exact element={<EditMusic />} />
         </Routes>
       
       </Router>
    
  </Provider>
   
    </div>
  );
}

export default App;
