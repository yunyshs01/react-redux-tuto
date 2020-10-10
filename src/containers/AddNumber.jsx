import AddNumber from "../components/AddNumber";
import React, { Component } from "react";
import store from "../store";

export default class extends Component {
	render() {
		return (
			<AddNumber
				onClick={function (_size) {
					store.dispatch({ type: "INCREMENT", size: _size });
				}.bind(this)}
			></AddNumber>
		);
	}
}
