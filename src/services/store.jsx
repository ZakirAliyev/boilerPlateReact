import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userApi } from './userApi.jsx';
import { adminApi } from './adminApi.jsx';

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        [adminApi.reducerPath]: adminApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(userApi.middleware)
            .concat(adminApi.middleware),
});

setupListeners(store.dispatch);
