import { CategoriesService } from '../services'

const findCategories = async (req, res) => {
  try {
    const categories = await CategoriesService.findCategories()
    res.status(200).json({ categories })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const registerCategory = async (req, res) => {
  try {
    const { name } = req.body
    const categories = await CategoriesService.registerCategory(req)

    const registeredCategory = await CategoriesService.registerCategory(req)


    res.status(200).json({ 
      category: {
        id : registeredCategory.id,
        name : registeredCategory.name
      } 
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export default { findCategories, registerCategory }