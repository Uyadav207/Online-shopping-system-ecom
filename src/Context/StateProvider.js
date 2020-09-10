// setup data Layer
// we need this to track the basket
import React, { useContext, createContext, useReducer } from 'react'

// THIS IS THE DATA LAYER

export const StateContext = createContext();

// Build A provider

export const StateProvider = ({reducer, initialState, children}) => (
<StateContext.Provider value = {useReducer(reducer, initialState)}>
    {children}
</StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)