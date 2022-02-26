import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement, SIGN_IN} from "./actions";

function App() {
    const counter = useSelector(state => state.counter)
    const loggedIn = useSelector(state => state.loggedIn)

    const dispatch = useDispatch();
    return (
        <div>
            <header className={'text-center bg-primary text-white p-4'}>
                <h1>REACT REDUX COUNTER</h1>
            </header>
            <div className={"container"}>
                <div className="text-center">
                    <div className={'border round-2 mt-5 m-auto p-5 height-50 myCard'}>
                        <h1 className={"pb-5"}>Counter: {counter}</h1>
                        <div className="row mb-4 mt-5">
                            <div className="col-6 d-grid">
                                <button onClick={() => dispatch(increment())}
                                        className={'btn btn-primary round-1'}>+
                                </button>
                            </div>
                            <div className="col-6 d-grid">
                                <button onClick={() => dispatch(decrement())}
                                        className={'btn btn-primary'}>-
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 d-grid mb-2">
                                <button onClick={() => dispatch(increment(5))}
                                        className={'btn btn-outline-primary'}>+5
                                </button>
                            </div>
                            <div className="col-12 d-grid">
                                <button onClick={() => dispatch(SIGN_IN())}
                                        className={'btn btn-outline-success'}>LOGIN
                                </button>
                            </div>
                        </div>

                        <div className={'h2 mt-4'}>
                            {loggedIn && (<div>Hello User!</div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
