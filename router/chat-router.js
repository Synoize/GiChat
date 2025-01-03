const express = require('express');
const router = express.Router();

const chatController = require('../controllers/chat-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const adminMiddleware = require('../middlewares/admin-middleware');

router.route('/chat').get(authMiddleware, chatController.chatView);
router.route('/chat/send').post(authMiddleware, chatController.chatPost);
router.route('/chat/delete/:id').delete(authMiddleware, adminMiddleware, chatController.deleteChatById);

module.exports = router; 