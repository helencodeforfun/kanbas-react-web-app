import db from "../../database"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  assignments: [],
  assignment: { title: "new assignment", course: "a course"}
}

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [
        { ...action.payload, _id:new Date().getTime().toString()},
        ...state.assignments,
      ]
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      )
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload
        }
        return assignment
      })
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload
    },
    setAssignments: (state,action) => {
      state.assignments = action.payload
    }
  }
})

export const {addAssignment,deleteAssignment,updateAssignment,setAssignment,setAssignments} = assignmentsSlice.actions
export default assignmentsSlice.reducer;