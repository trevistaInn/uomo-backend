import express from 'express'
import fetchProductsBySearch from '../controllers/fetchProductsBySearch.js'
import fetchSearchSuggestions from "../controllers/fetchSearchSuggestions.js";
const router = express.Router()

router.get("/suggestions", fetchSearchSuggestions);
router.get("/", fetchProductsBySearch)

export default router