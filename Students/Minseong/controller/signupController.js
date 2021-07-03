import { signupService } from '../service'

const signup = async(req, res) => {
    try {
        const { email, password, name } = req.body
        const users = await signupService.signup(email, password, name)
        res.status(200).json({
            users: {
                id: signup.id,
                email: signup.email
            }
        })
    } catch (err) {
        console.log(err)
    }
}

export default { signup }