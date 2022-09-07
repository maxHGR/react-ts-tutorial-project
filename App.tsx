import * as React from 'react';
import './style.css';

let name: string;
let age: number;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

/* type Person = {
  name: string;
  age?: number;
};

let person: Person[]; */

const App = () => {
  return (
    <div className="App">
      <h1>Hello {role} </h1>
    </div>
  );
};

export default App;
