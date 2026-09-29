import express from 'express'
import fetchProductsByCategory from '../controllers/fetchProductsByCategory.js'
const router = express.Router()

router.get("/:category", fetchProductsByCategory)

export default router