import { productService } from "../services";

const drinksDB = async (req, res) => {
	try {

		const drinks = await productService.drinksDB();

    res.status(200).json({ drinks });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export default { drinksDB };