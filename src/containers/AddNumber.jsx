import AppNumber from "../components/AddNumber";
import { connect } from "react-redux";

function mapReduxDispatchToReactProps(dispatch) {
	return {
		onClick: function (_size) {
			dispatch({ type: "INCREMENT", size: _size });
		},
	};
}

export default connect(null, mapReduxDispatchToReactProps)(AppNumber);

// export default class extends Component {
// 	render() {
// 		return (
// 			<AddNumber
// 				onClick={function (_size) {
// 					store.dispatch({ type: "INCREMENT", size: _size });
// 				}.bind(this)}
// 			></AddNumber>
// 		);
// 	}
// }
