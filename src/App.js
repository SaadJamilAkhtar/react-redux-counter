import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement, SIGN_IN} from "./actions";

function App() {
    const counter = useSelector(state => state.counter)
    const loggedIn = useSelector(state => state.loggedIn)

    const dispatch = useDispatch();
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(SIGN_IN())}>LOGIN</button>
            {loggedIn && (<div>Hello User!</div>)}
        </div>
    );
}

export default App;
