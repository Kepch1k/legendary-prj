import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";

import siteConfig from './Slices/SiteConfig';
import rootSaga from './Sagas';

let sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {siteConfig},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export default store;