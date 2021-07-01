import { UsersService } from '../services'

const veiwAllUsers = async (req, res) => {
  try {
    const users = await UsersService.veiwAllUsers();

    res.status(200).json({ users })
  } catch (err) {
    res.status(500).json({massage: err.massage})
  }
}

const signUp = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await UsersService.signUp(req)
    
    res.status(201).json({ email, password });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const loginUsers = await UsersService.userLogin(req)

    res.status(201).json({ email, password })
  } catch (err) {
    res.status(401).json({ message: err.message })
  }
}

export default { veiwAllUsers, signUp, userLogin }


