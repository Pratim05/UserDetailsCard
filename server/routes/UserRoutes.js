const { register, login, forgetpass, resetpass } = require("../controller/UserController")

const router = require("express").Router()

router.post("/register",register)
router.post("/login",login)
router.post("/forgetpass",forgetpass)
router.post("/resetpass/:role/:id/:token",resetpass)


module.exports = router