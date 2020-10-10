import DisplayNumber from "../components/DisplayNumber";
import React, { Component } from "react";
import store from "../store";

export default class extends Component {
	constructor(props) {
		super(props);
		this.state = { number: store.getState().number };
		store.subscribe(
			function () {
				this.setState({ number: store.getState().number });
			}.bind(this)
		);
	}

	render() {
		return <DisplayNumber number={this.state.number}></DisplayNumber>;
	}
}
