import React, { createContext, useReducer } from 'react'
import { datareducer } from './datareducer'
export const appcontext=createContext()


const Context = ({children}) => {
const initialstate={data:["hi"]}
const[state,dispatch]=useReducer(datareducer,initialstate)
  return (
    <appcontext.Provider value={{state,dispatch}}>
        {children}
    </appcontext.Provider>
  )
}

export default Context