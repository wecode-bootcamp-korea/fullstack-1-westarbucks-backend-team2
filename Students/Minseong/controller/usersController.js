import usersService from '../service'

const findUsers = async(req, res) => {
    try {
        const users = await usersService.findUsers()
        res.status(200).json({
            message: "SUCCESS",
            data: users
        })
    } catch (err) {
        console.log(err)
    }
}

export default { findUsers }