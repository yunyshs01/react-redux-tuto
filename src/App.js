import React, { Component } from "react";
import DisplayNumberRoot from "./components/DisplayNumberRoot.js";
import AddNumberRoot from "./components/AddNumberRoot.js";
import "./App.css";

class App extends Component {
	constructor(props) {
	  super(props);
		this.state = { number: 7 };
	}

	render() {
		return (
			<div>
				<h1>Root</h1>
				<AddNumberRoot getNumber={function(id){
          this.setState({number:id + this.state.number});
        }.bind(this)}></AddNumberRoot>
				<DisplayNumberRoot number={this.state.number}></DisplayNumberRoot>
			</div>
		);
	}
}

export default App;
