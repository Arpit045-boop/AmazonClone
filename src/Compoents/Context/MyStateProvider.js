import { createContext, useContext, useReducer } from "react";
export const MyStateContext = createContext();

export const MyStateProvider = ({ reducer, initialState, children }) => (
    <MyStateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </MyStateContext.Provider>
);

export const useStateVal = () => useContext(MyStateContext)