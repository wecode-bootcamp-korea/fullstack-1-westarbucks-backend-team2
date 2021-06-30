import signupDAO from '../model'

const findSignup = async() => {
    console.log('Im in service')
    return await signupDAO.findSignup()
}

export default { findSignup }