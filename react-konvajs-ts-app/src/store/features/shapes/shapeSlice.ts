import { createSlice } from "@reduxjs/toolkit";

// interface ExampleState {}

const initialState = {
  shapes: [
    {
      type: "square",
      x: 20,
      y: 20,
      width: 50,
      height: 50,
      fill: "red",
      draggable: true,
    },
  ],
};

const shapeSlice = createSlice({
  name: "shapes",
  initialState,
  reducers: {},
});

// export const { exampleAction } = shapeSlice.actions;
export default shapeSlice.reducer;
