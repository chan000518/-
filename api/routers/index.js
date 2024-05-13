const express = require('express');
const router = express.Router();
const userRouters = require("./userRouters")

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: 유저 추가 수정 삭제 조회
 */
router.use("/user", userRouters)

module.exports = router
