import { usersService } from '../service'

const findUsers = async(req, res) => {
    console.log('userServise:', usersService)
    try {
        const users = await usersService.findUsers()
        res.status(200).json({ users })
    } catch (err) {
        res.status(500).json({ message: err.massage })
    }
}

export default { findUsers }