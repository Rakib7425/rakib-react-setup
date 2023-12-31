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
		<div className='dark:bg-indigo-950 h-screen bg-white duration-700 pb-5'>
			<section className='max-w-[1280px] mx-auto border h-full dark:border-red-500 border-pink-600 pb-4'>
				<h1 className=' dark:text-white text-2xl font-semibold md:text-4xl py-8 '>
					Redux Toolkit with Persist
				</h1>

				<p className='text-xl py-4 font-semi-bold text-blue-600'>
					Edit :: <span className='text-pink-700'>src/App.jsx</span>
				</p>
				<p className='text-2xl text-yellow-600 animate-pulse font-bold'>
					Dont Change or remove -- {"'<RouterProvider router={router} />'"} from App.jsx
				</p>

				{/* WARN: Don't Change or edit this */}
				<RouterProvider router={router} />
				<ToggleDarkMode />
			</section>
		</div>
	);
};

export default App;
