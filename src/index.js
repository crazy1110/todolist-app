import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './containers/App'
import todoApp from './reducers'

let store = createStore (todoApp)

let rootElement = document.getElementById('root')
render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
)


/*示例：
import { createStore } from 'redux'

function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([ action.text ])
        default:
            return state
    }
}

let store = createStore(todos, [ 'Use Redux' ])

store.dispatch({
    type: 'ADD_TODO',
    text: 'Read the docs'
})

console.log(store.getState())
    */
