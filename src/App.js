import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './components/Home';
import { Route } from 'react-router-dom';
import Detail from './components/Detail/Detail';
import Create from './components/Create/Create';

function App() {
  return (
    <div>
     <Navbar/>

     <Route path="/" component={Home}  />
    <Route path="/:id" component={Detail} />
    <Route path="/create"component={Create} />
     
    </div>
  );
}

export default App;
