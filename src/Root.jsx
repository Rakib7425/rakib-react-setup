import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store.js";
import App from "./App.jsx";
import "./index.css";
import "./app.css";

const Root = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	);
};

export default Root;
