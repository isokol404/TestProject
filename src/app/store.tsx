import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

import {configureStore} from '@reduxjs/toolkit'

import {geometrySlice} from "./geomentry";

export const store = configureStore({
  reducer: {
    geometry: geometrySlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppDispatchMain: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector