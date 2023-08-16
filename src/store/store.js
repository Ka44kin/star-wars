import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducer from './reducers'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import { setStorageData } from "@utils/localStorage";

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
    );

store.subscribe(() => {
    setStorageData('store', store.getState().favoriteReducer)
})

export default store;