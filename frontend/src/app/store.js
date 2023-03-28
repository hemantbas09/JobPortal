import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userAuthApi } from '../Service/userAuth'
import { jobApi } from '../Service/jobApi'
import { quizApi } from '../Service/QuizApi'


export const store = configureStore({
    reducer: {

        [userAuthApi.reducerPath]: userAuthApi.reducer,
        [jobApi.reducerPath]: jobApi.reducer,
        [quizApi.reducerPath]: quizApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userAuthApi.middleware,jobApi.middleware,quizApi.middleware),
        
})

setupListeners(store.dispatch)