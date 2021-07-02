import { signupDAO } from '../model'

const findSignup = async(req) => {
    return await signupDAO.findSignup(req)
}

export default { findSignup }