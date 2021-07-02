import { signupService } from '../service'

const findSignup = async(req, res) => {
    try {
        const user = await signupService.findSignup(req)

        if (user.length !== 0) {
            res.status(400).json({ message: "ALREADY_EXISTING_USER_EMAIL" })
        }

        const createdUser = await signupService.findSignup()

        res.status(201).json({
            user: {
                id: createdUser.id,
                email: createdUser.email,
            }
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


export default { findSignup }