import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react';
import Tables from './components/Tables';

function App() {

  const [data, setData ] = useState([])
  const getApiData = async () => {
    const response = await fetch(
      "https://api.escuelajs.co/api/v1/products"
    ).then((response) => response.json())
    .catch(data => console.log("Error is : ", data))
    // update the state
    setData(response);
  };

  useEffect(()=>{
    getApiData();
  },[])
  
 console.log("Here is the value of the data : ",data);
  return (
    <Tables data={data}/>
  );
}

export default App;
