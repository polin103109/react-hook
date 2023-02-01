
import { useState } from 'react';
import './App.css';

function App() {

  const [inputlist, setInputList] = useState("");
  const [Items, setItems] = useState([]); 
  const itemEvent = (event) =>{
    setInputList(event.target.value);

  };
  const listOfItems = () =>{ 
    setItems( (oldItems) => {
     return [...oldItems,inputlist ];
    })
    setInputList('');
  }
  return (
    <div className="main_div">
      <div className="center_div">
        <h1>ToDo List</h1>
        <br/>
        <input type="text" placeholder='Add items' 
        value={inputlist}
        onChange={itemEvent}/>
        <button onClick={listOfItems}> + </button>
        <ol>
        {Items.map(  (itemvalue) =>{
          return <li> {itemvalue} </li>
        }   )}
          
        </ol>
   
   </div> 
   
    </div>
  );
}

export default App;
