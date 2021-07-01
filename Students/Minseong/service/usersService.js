import { usersDAO } from '../model'

const findUsers = async() => {
    console.log('Im in service')
    return await usersDAO.findUsers()
}
console.log('usersDAO:', usersDAO)
export default { findUsers }