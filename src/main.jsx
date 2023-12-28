// index.js
import ReactDOM from "react-dom/client";
import Root from "./Root";

ReactDOM.createRoot(document.getElementById("root")).render(
	// <React.StrictMode>
	<Root />
	// </React.StrictMode>
);

// if (module.hot) {
// 	module.hot.accept("./components/Root", () => {
// 		const NextRoot = require("./components/Root").default;
// 		render(NextRoot);
// 	});
// }
