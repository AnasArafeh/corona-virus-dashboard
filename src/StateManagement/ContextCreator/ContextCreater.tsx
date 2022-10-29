import React, { createContext, useReducer } from 'react';

export default (reducer, actions, initialState, initialContextState) => {
    const Context: any = createContext(initialContextState);

    const Provider = ({ children }) => {

        const [state, dispatch] = useReducer(reducer, initialState);

        const boundActions = {};

        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }

        const store = React.useMemo(() => ({ state, ...boundActions }), [state, boundActions])

        return (
            <Context.Provider value={store}>
                {children}
            </Context.Provider>
        )
    }

    return { Context, Provider }
}