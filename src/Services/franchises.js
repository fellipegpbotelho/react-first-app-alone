import { http } from './http'

const resource = 'franchises'

export const getFranchises = () => http.get(resource)
export const getFranchiseById = (franchiseId) => http.get(`${resource}/${franchiseId}`)
export const storeFranchise = (franchise) => http.post(resource, franchise)
export const updateFranchise = (franchise) => http.put(`${resource}/${franchise.id}`, franchise)
export const destroyFranchise = (franchiseId) => http.delete(`${resource}/${franchiseId}`)

const Api = {
  getFranchises,
  getFranchiseById,
  storeFranchise,
  updateFranchise,
  destroyFranchise
}

export default Api
