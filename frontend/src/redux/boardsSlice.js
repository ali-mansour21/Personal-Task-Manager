import { createSlice } from "@reduxjs/toolkit";

const boardsSlice = createSlice({
  name: "boards",
  initialState: [],
  reducers: {
    loadBoards: (state, action) => {
      console.log("Payload:", action.payload); // Debugging

      const isActive = state.length > 0 ? false : true;
      const { payload } = action;

      payload.forEach((boardData) => {
        const board = {
          title: boardData.title,
          isActive,
          columns: boardData.columns,
        };
        state.push(board);
      });

      console.log("State after loading boards:", [...state]); // Debugging
    },
    setBoardActive: (state, action) => {
      state.map((board, index) => {
        index === action.payload.index
          ? (board.isActive = true)
          : (board.isActive = false);
        return board;
      });
    },
    dragTask: (state, action) => {
      const { colIndex, prevColIndex, taskIndex } = action.payload;
      const board = state.find((board) => board.isActive);
      const prevCol = board.columns.find((col, i) => i === prevColIndex);
      const task = prevCol.tasks.splice(taskIndex, 1)[0];
      board.columns.find((col, i) => i === colIndex).tasks.push(task);
    },
  },
});

export default boardsSlice;
export const { loadBoards } = boardsSlice.actions;
