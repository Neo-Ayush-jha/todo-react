import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [task,setTask]= useState('');
  const [data,setData] = useState([]);
  const handleInsert = () =>{
    let newArray= [...data,{id:data.length+1,title:task,status:true}]
    setData(newArray);
    setTask("");
    console.log('newArray');
  }
  const deleteData = (id)=>{
    setData(data.filter((task)=>task.id !== id))
  }
  return (
    <div className='container'>
      <div className='box'>
        <div className='create'>
          <input className='input' value={task} onChange={(e)=>setTask(e.target.value)} type='text' placeholder='eg. cow, milk, run etc...' />
          <button type='button' onClick={handleInsert}>Add</button>
        </div>
        <div className='todo'>
          <ul>
            {
              data.map((value,key)=>(
                <li key={key}>
                  {
                    (value.status ===true)?
                    <>
                      {value.title}<span onClick={()=>deleteData(value.id)} className='delete'>Delete</span>
                    </>:
                    <del>{value.title}<span onClick={()=>deleteData(value.id)} className='delete'>Delete</span></del>
                  }
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
