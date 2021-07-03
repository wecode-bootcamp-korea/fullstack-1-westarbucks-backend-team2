import { signupDAO } from '../model'
import bcrypt from 'bcrypt'

const signup = async(email, password, name) => {
    const saltRounds = 10
    const salt = bcrypt.genSaltSync(saltRounds)
    const hashedPassword = bcrypt.hashSync(password, salt)
    return await signupDAO.signup(email, hashedPassword, name)
}


// const checkPassword = bcrypt.compareSync(password, hashedPassword)

export default { signup }