import logo from './logo.svg';
import React from 'react'
import './App.css';

function App() {
  const numbers = ["Seizure", "Psychosis","Organic Brain Syndrome","Visual Disturbance","Cranial Nerve Disorder","Lupus Headache","CVA", "Vasculitis","Arthritis","Myositis","Urinary Casts","Hematuria","Proteinuria","Pyuria","New Rash","Alopecia","Mucosal Ulcers","Pleurisy","Pericarditis","Low Complement","Increased DNA Binding","Fever","Thrombocytopenia","Leukopenia"];
  const [sum,setSum]=React.useState(0);
  const values = [8,8,8,8,8,8,8,8,4,4,4,4,4,4,2,2,2,2,2,2,2,1,1,1];
  const [selected,setSelected] = React.useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
  return (
    <div className="App">
      {numbers.map((dname,idx) => (
        <p>
          <button value={idx} disabled={selected[idx]} onClick={() => {
            setSum(sum+values[idx]);
            setSelected((arr) => [
              ...arr,
              arr[idx]=1,
            ] )
          }} style={{background: selected[idx]===1? "#84e07e": "yellow",color: "black"}}> ({idx+1}) {dname} score={values[idx]}</button>
          <span> </span>
          <button disabled={selected[idx]===0} onClick={() => {
            setSum(sum-values[idx]);
            setSelected((arr) => [
              ...arr,
              arr[idx]=0,
            ] )
          }}>Remove</button>
        </p>
      ))}
      {<h1>
          {sum}
      </h1>}
      <button onClick={() => {
        setSum(0);
        setSelected([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
        }}>Clear</button>
    </div>
  );
}

export default App;
