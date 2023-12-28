import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/slices/counterSlice.js";

const Counter = () => {
	//
	const counter = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<div>
			<p className='text-3xl'>Counter: {counter}</p>
			<div className='flex gap-3 bg-blue-700 text-white items-center justify-center dark:bg-black mb-10'>
				<button className='bg-pink-700 px-5 py-3' onClick={() => dispatch(decrement())}>
					Decrement
				</button>
				<button className='bg-yellow-700 px-5 py-3' onClick={() => dispatch(increment())}>
					Increment
				</button>
			</div>
		</div>
	);
};

export default Counter;
