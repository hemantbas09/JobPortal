import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userAuthApi } from '../Service/userAuth'
import { jobApi } from '../Service/jobApi'


export const store = configureStore({
    reducer: {

        [userAuthApi.reducerPath]: userAuthApi.reducer,
        [jobApi.reducerPath]: jobApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userAuthApi.middleware,jobApi.middleware),
        
})

setupListeners(store.dispatch)