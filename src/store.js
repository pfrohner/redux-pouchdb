import PouchDB from 'pouchdb';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistentStore } from 'redux-pouchdb';
import rootReducer from './reducers';

/**
 * @type {PouchDB$5} Database instance
 */
const db = new PouchDB('redux-pouchdb');

/**
 * @type {Store} Redux store
 */
const store = createStore(rootReducer, composeWithDevTools(persistentStore(db)));

export default store;
