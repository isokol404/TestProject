import axios from "axios";

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {FilterValuesType, GeometryColorsEnum, GeometryType, ShapeEnum} from "./types";

export type GeometryState = {
  data: GeometryType[];
  filters: FilterValuesType;
}

const initialState: GeometryState = {
  data: [],
  filters: {
    opacity: 'all',
    colors: GeometryColorsEnum.None,
    shape: ShapeEnum.None,
    columns: 5
  }
}

export const fetchGeometry = createAsyncThunk(
  'geometry/fetch',
  async () => {
    const response = await axios.get("/data.json");
    return response.data;
  }
);

export const geometrySlice = createSlice({
  name: 'geometry',
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      state.filters = {
        ...state.filters,
        ...action.payload
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchGeometry.fulfilled,
      (state, action) => {
        state.data = action.payload;
      }
    );
  },
});


export const { updateFilter} = geometrySlice.actions
