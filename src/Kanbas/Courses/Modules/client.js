import axios from "axios"

// const URL = "http://localhost:4000/api/courses"
const URL = "https://kanbas-node-server-app-2bqh.onrender.com/api/courses"

// const MODULE_URL = "http://localhost:4000/api/modules"
const MODULE_URL = "https://kanbas-node-server-app-2bqh.onrender.com/api/modules"

export const findModuleForCourse = async (courseId) => {
  const response = await axios.get(`${URL}/${courseId}/modules`)
  return response.data
}

export const createModule = async (courseId,module) => {
  const response = await axios.post(`${URL}/${courseId}/modules`,module)
  return response.data
}

export const deleteModule = async (moduleId) => {
  const response = await axios.delete(`${MODULE_URL}/${moduleId}`)
  return response.data
}

export const updateModule = async (module) => {
  const response = await axios.put(`${MODULE_URL}/${module._id}`,module)
  return response.data
}