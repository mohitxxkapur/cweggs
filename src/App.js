import './App.css';
import React from 'react';
//test

const App = () => {
	const [checked, setChecked] = React.useState(false); 
	function handleChange(e) {
	   setChecked(e.target.checked);
	}

//function App() {
  return (
    <div className="App">
		<header className="App-header">
			<h1>Hello World!</h1>      
			<div className="App-subheader">
				<p>I am a subheader, about to introduce a checkbox </p>
			</div>
		</header>

		<div className='checkbox-container'>
			<input value = "test" type = "checkbox" onChange = {handleChange} /> 
			<span>box</span>

			<div className="result">
        		<br></br>
				<br></br>
				Above checkbox is {checked ? "checked" : "un-checked"}.
      		</div>
		</div>
		
		<div className="App-tinyparagraph">
			<p>this is another paragraph </p>
      </div>
    </div>
  );
}

export default App;
