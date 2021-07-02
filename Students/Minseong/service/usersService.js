import { usersDAO } from '../model'

const findUsers = async() => {
    return await usersDAO.findUsers()
}

export default { findUsers }