import axios from "axios";
export const BASE_API = "https://a6-node-server-0tfg.onrender.com:4000"
export const USERS_API = `${BASE_API}/api/users`
export const request = axios.create({ withCredentials: false })
export const requestSigin = async (credentials) => {
  const response = await request.post(`${USERS_API}/signin`, credentials)
  return response.data
}
export const requestAccount = async () => {
  const response = await request.get(`${USERS_API}/account`)
  return response.data
}
export const requestSignup = async (credentials) => {
  const response = await request.post(`${USERS_API}/signup`, credentials)
  return response.data
}
export const updateAccount = async (account) => {
  const response = await request.put(`${USERS_API}/${account._id}`, account)
  return response.data
}
export const requestUsers = async () => {
  const response = await request.get(`${USERS_API}`)
  return response.data
}
export const requestCreateUser = async (user) => {
  const response = await request.post(`${USERS_API}`,user)
  return response.data
}
export const requestDeleteUser = async (uid) => {
  const response = await request.delete(`${USERS_API}/${uid}`)
  return response.data
}
export const requestUserById = async (uid) => {
  const response = await request.get(`${USERS_API}/${uid}`)
  return response.data
}
export const requestSignout = async () => {
  const response = await request.post(`${USERS_API}/signout`,null)
  return response.data
}
export const requestUpdateUser = async (user) => {
  const response = await request.put(`${USERS_API}/${user._id}`,user)
  return response.data
}