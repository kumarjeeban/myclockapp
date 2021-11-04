import React,{useState} from 'react'

const  App = ()=> {
  let newTime = new Date().toLocaleTimeString();
 const [ctime , setCtime] = useState(newTime);
const updateTime = () =>{
 let newCTime = new Date().toLocaleTimeString();

  setCtime(newCTime);


};
  return (
  
      <>
      <h1>{newTime}</h1>
      <button onClick = {updateTime}>get time</button>
      </>
   
  );
};

export default App
