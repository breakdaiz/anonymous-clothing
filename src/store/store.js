import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import thunk from "redux-thunk";
import createSagaMiddleWare from "redux-saga";
import { rootSaga } from "./root-saga";

import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const sagaMiddleWare = createSagaMiddleWare();

const persistedReducer = persistReducer(persistConfig, rootReducer);
//value should be production or developement
const middlWares = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleWare,
  // thunk,
].filter(Boolean);

const composeEnhancers =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const composedEnhancers = composeEnhancers(applyMiddleware(...middlWares));

// root-reducer

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleWare.run(rootSaga);

export const persistor = persistStore(store);
