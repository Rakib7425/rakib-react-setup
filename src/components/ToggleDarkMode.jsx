import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDark, setLight } from "../store/slices/themeSlice";

const ToggleDarkMode = () => {
	const currentTheme = useSelector((store) => store.theme.value);
	const dispatch = useDispatch();

	const handleClick = () => {
		// Toggle theme value
		if (currentTheme === "dark") {
			dispatch(setLight());
		} else {
			dispatch(setDark());
		}
	};

	useEffect(() => {
		// Update document element based on the initial theme value
		if (currentTheme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [currentTheme]); // Add currentTheme to the dependency array

	return (
		<button
			onClick={handleClick}
			className={"dark:bg-black dark:text-white bg-red-600 rounded-[100%] py-4 px-4"}
		>
			{currentTheme === "dark" ? "go-Light" : "go-Dark"}
		</button>
	);
};

export default ToggleDarkMode;
