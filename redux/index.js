import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import AsyncStorage from '@react-native-async-storage/async-storage';

async function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state)
    await AsyncStorage.setItem('state', serializedState)
  } catch (e) {
    console.log(e)
  }
}

async function loadFromLocalStorage() {
  try {
    const serializedState = await AsyncStorage.getItem('state')
    if (serializedState == null) return undefined
    return JSON.parse(serializedState)
  } catch (e) {
    console.log(e)
    return undefined
  }
}

const middleware = [thunk];
const persistedState = loadFromLocalStorage()
const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;