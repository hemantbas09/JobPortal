import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducer";

const store = configureStore({
    reducer: {
        users: userReducer,
    },
});

export default store