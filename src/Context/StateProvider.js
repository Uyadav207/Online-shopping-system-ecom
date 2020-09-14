
import React, { useContext, createContext, useReducer } from 'react'
export const StateContext = createContext();
export const StateProvider = ({reducer, initialState, children}) => (
<StateContext.Provider value = {useReducer(reducer, initialState)}>
    {children}
</StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)



// This stateProvider help us to penetrate within Different Data layer within the Application.

// The state Provider is wrapped with the Application in '../App.js' file.