const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const adminMiddleware = require('../middlewares/admin-middleware');
const validate = require('../middlewares/validate-middleware');
const { adminUserSchema } = require('../validators/admin-user-validator');

router.route('/users').get(authMiddleware, adminMiddleware, adminController.getAllUsers);
router.route('/users/:id').get(authMiddleware, adminMiddleware, adminController.getUserById);
router.route('/users/update/:id').patch(validate(adminUserSchema), authMiddleware, adminMiddleware, adminController.updateUserById);
router.route('/users/delete/:id').delete(authMiddleware, adminMiddleware, adminController.deleteUserById);

router.route('/contacts').get(authMiddleware, adminMiddleware, adminController.getAllContacts);
router.route('/contacts/delete/:id').delete(authMiddleware, adminMiddleware, adminController.deleteContactById);

module.exports = router;