import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const middlWares = [logger];
const composedEnhancers = compose(applyMiddleware(...middlWares));

// root-reducer

export const store = createStore(rootReducer, undefined, composedEnhancers);
