import { UsersService } from '../services'

const viewAllUsers = async (req, res) => {
  try {
    const users = await UsersService.viewAllUsers();

    res.status(200).json({ users })
  } catch (err) {
    res.status(500).json({massage: err.massage})
  }
}

const signUp = async (req, res) => {
  try {
    const { email, password } = req.body
    await UsersService.signUp(req)
    
    res.status(201).json({ email, password });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await UsersService.userLogin(email, password);

    res.status(201).json({ message: 'LOGIN_SUCCESS!', token })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
};

export default { viewAllUsers, signUp, userLogin }


