const {fetchUserListData } = require("../controller/UserDataController")

const router = require("express").Router()

router.post("/fetchUserListData",fetchUserListData)



module.exports = router