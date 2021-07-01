import { signupService } from '../service'

const findSignup = async(req, res) => {
    try {
        const users = await signupService.findSignup()
        res.status(200).json({
            users: {
                id: findSignup.id,
                email: findSignup.email
            }
        })
    } catch (err) {
        console.log(err)
    }
}

export default { findSignup }