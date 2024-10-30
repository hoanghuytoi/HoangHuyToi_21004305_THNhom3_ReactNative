import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    taskList: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchTasksStart: (state) => {
      state.loading = true;
    },
    fetchTasksSuccess: (state, action) => {
      state.loading = false;
      state.taskList = action.payload;
    },
    fetchTasksFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addTask: (state, action) => {
      state.taskList.push({ id: Date.now().toString(), ...action.payload });
    },
    deleteTask: (state, action) => {
      state.taskList = state.taskList.filter(task => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      const index = state.taskList.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.taskList[index] = { ...state.taskList[index], ...action.payload };
      }
    },
  },
});

// Export actions
export const { fetchTasksStart, fetchTasksSuccess, fetchTasksFailure, addTask, deleteTask, updateTask } = tasksSlice.actions;
export const selectTasks = (state) => state.tasks.taskList;
export default tasksSlice.reducer;