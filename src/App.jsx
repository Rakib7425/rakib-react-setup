import Counter from "./components/Counter.jsx";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import ToggleDarkMode from "./components/ToggleDarkMode.jsx";

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Counter />,
		},
		{
			path: "/hello",
			element: <div>Hello</div>,
		},
	]);

	return (
		<section className='max-w-[1280px] mx-auto'>
			<h1 className='  dark:text-white text-4xl'>Redux Toolkit with Persist</h1>
			<RouterProvider router={router} />
			<ToggleDarkMode />
		</section>
	);
};

export default App;
