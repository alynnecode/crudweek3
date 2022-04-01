import './App.css';
import Create from './components/create/create';
import Read from './components/read/read';
import {BrowserRouter as Router, Route, Routes} from'react-router-dom';
import Update from './components/update/update';
import Delete from './components/update/update';


function App() {
  return (
    
<Router>
   
    <div className="main">
    
      <div>
      <h3>Volunteer Sign Up Form</h3>
      </div>
      
      
      <div>
        <Routes>
        <Route exact path = '/create' component={Create}/>
        </Routes>
 
      <Create />
      
    </div>
 

    <div style={{marginTop:20}}>
    <Routes>
        <Route exact path = '/read' component={Read}/>
        </Routes>
      <Read />

      
    </div>
    <Routes>
        <Route path = '/update' component={Update}/>
        </Routes>
        <Routes>
        <Route path = '/delete' component={Delete}/>
        </Routes>

    
      
   

    </div>
    </Router>

  );
}

export default App;
