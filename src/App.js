import image from './17983.jpg';
import imageTwo from './5245.jpg';
import './App.css';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className='app'>
      <div className="container">
        <img src={image} alt='grocery' width="250px"/>
      </div>

      <div className="container">
        <h1>Grosery List</h1>
      </div>
      <GroceryList/>
      <div className="container">
        <img src={imageTwo} alt='supermarker' width="250px"/>
      </div>  
    </div>
  );
}

export default App;
