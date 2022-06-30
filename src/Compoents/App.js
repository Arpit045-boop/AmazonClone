import { useEffect, React } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Home from './Home';
import { useStateVal } from './Context/MyStateProvider';
import { auth } from './firebase';

function App() {
    const [{ Newuser }, dispatch] = useStateVal();

    // useeffect : Place code which run on a given condition

    useEffect(() => {
        const unsubscribeMe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // user is logged in
                dispatch({
                    type: "SET_USER",
                    Newuser: authUser,
                });
            } else {
                // user is logged out
                dispatch({
                    type: "SET_USER",
                    Newuser: null,
                });
            }
        });
        // Any cleanup operation
        return () => {
            unsubscribeMe();
        };
    }, []);
    // console.log("user:", user);
    return (
        <Router>
            <Routes>
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </Router >
    )
}

export default App