import { UsersService } from '../services'

const allUsers = async (req, res) => {
  try {
    const users = await UsersService.allUsers(req)

    res.status(200).json({ users })
  } catch (err) {
    res.status(500).json({massage: err.massage})
  }
}

const signUp = async (req, res) => {
  try {
    const user = await signupService.signUp(req)

    if (user.length !== 0) {
      res.status(400).json({ message: "ALREADY_EXISTING_USER_EMAIL" })
    }

    const createdUser = await signupService.signUp()

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

export default { allUsers, signUp }


