import { signupService } from "../services";

const signup = async (req, res) => {
	try {

		const { email, password } = req.body
		const users = await signupService.signup()

    res.status(200).json(
			{ users },
			{ email, password }
		)
  } catch (err) {
    res.status(500).json({ message: err })
  }
};

export default { signup };