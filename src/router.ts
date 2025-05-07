import express from "express"
import classifiersRoutes from "./routes/boletimRoutes"
const router = express.Router()

router.use("/be", classifiersRoutes)

export default router
