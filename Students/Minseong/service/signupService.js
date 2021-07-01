import { signupDAO } from '../model'

const findSignup = async(req) => {
    console.log('Im in service')
    return await signupDAO.findSignup(req)
}

export default { findSignup }