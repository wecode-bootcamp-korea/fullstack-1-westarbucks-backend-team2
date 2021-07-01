import { userService } from "../services";

const allUsers = async (req, res) => {
  try {
    
		const users = await userService.allUsers();

      res.status(200).json({ users });
    } catch (err) {
      res.status(500).json({ message: err });
    }
  };
  
export default { allUsers }; 