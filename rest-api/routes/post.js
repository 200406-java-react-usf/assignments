const express = require('express');
const postController = require('../controllers/postController')
const uploadImage = require('../middlewares/multer')
const {hasDescription} = require('../validations/validator')
const router = express.Router();

router.get('/', postController.index);
router.get('/:id', postController.show);
router.post('/', 
uploadImage("post").single("image"),
hasDescription, 
postController.store);
router.patch('/:id', hasDescription, postController.update);
router.delete('/:id', postController.delete);

module.exports = router;
