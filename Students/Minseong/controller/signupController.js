import signupService from '../service'

const findSignup = async(req, res) => {
    try {
        const users = await signupService.findSignup()
        res.status(200).json({
            message: "SUCCESS",
            data: users
        })
    } catch (err) {
        console.log(err)
    }
}

export default { findSignup }