
import { createStore,applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga/sagas'
import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit'
import musicReducer from './musicState'
const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];
export const Store = configureStore({
    reducer: {
        musics:musicReducer
    },
    middleware
  })
// export const Store = createStore(
//     RootReducer,
//     applyMiddleware(sagaMiddleware)
    
//)

sagaMiddleware.run(rootSaga)