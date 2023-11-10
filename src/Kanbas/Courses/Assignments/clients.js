import axios from "axios"

const URL = "http://localhost:4000/api/courses"
export const findAssignmentsForCourse = async (courseId) => {
  const response = await axios.get(`${URL}/${courseId}/assignments`)
  return response.data
}
export const addAssignmentForCourse = async (courseId,assignment) => {
  const response = await axios.post(`${URL}/${courseId}/assignments`,assignment)
  return response.data
}

const A_URL = "http://localhost:4000/api/assignments"
export const deleteAssignmentsForCourse = async (assignmentId) => {
  const response = await axios.delete(`${A_URL}/${assignmentId}`)
  return response.data
}

export const updateAssignmentsForCourse = async (assignment) => {
  const response = await axios.put(`${A_URL}/${assignment._id}`,assignment)
  return response.data
}