import './App.css';
 import Navbar from './components/Navbar';
import Textform from './components/Textform';
 
 
function App() {
  return (
    <>
   <Navbar title="Testuils" AboutTest="About us"/>
   <div className="container"></div>
   <Navbar title="Testuils"/>
   <div className="container my-3">
    <Textform  heading="Enter The Textarea to Analyze"/>
     </div>
    
  </>
 );
}

export default App;
