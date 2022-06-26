import { useEffect, React } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Home from './Home';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {
    const [{user}, dispatch] = useStateValue();

    // useeffect : Pla  ce code which run on a given condition

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // user is logged in
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                // user is logged out
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
        // ANy cleanup operation
        return () => {
            unsubscribe();
        };
    }, []);
    console.log("user:", user);
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