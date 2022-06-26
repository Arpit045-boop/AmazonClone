import { createContext, useContext, useReducer } from "react";
// This is a Data layer
export const StateContext = createContext();

// Build a provider

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// This is we use in component

export const useStateValue = () => useContext(StateContext)