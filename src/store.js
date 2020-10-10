import { createStore } from "redux";

export default createStore(function (state, action) {
	var newState = {};
	if (state === undefined) {
		newState.number = 0;
	} else if (action.type === "INCREMENT") {
		newState = { ...state, number: state.number + action.size };
	}

	return newState;
}, window.__REDUX_DEVTOOLS_EXTENSION__ &&
	window.__REDUX_DEVTOOLS_EXTENSION__());
