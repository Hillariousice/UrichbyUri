import express, { Express, Request, Response, NextFunction } from 'express';
import { getProducts, getProductsById, addProduct, updateProductDetails, deleteProductDetails, getRegisterPage, getLoginPage, getUpdatePage, getUpdatePageById, getAddProductPage, getProductToDelete, logout, registerUser, loginUser} from '../controllers/controller';
import {isLogIn} from '../middleware/auth'
import { upload } from '../middleware/multer';
// const app = require('../app');
// import app from '../app';

const router = express.Router();

/* GET users listing. */
router.get('/', isLogIn, getProducts)
router.get('/register', getRegisterPage)
router.get('/login', getLoginPage)
router.get('/products/delete/:id', isLogIn, getProductToDelete)
router.get('/update', isLogIn, getUpdatePage)
router.get('/update/:id', isLogIn, getUpdatePageById)
router.get('/logout', logout)
router.get('/add', isLogIn, getAddProductPage)

router.post('/add', isLogIn, addProduct,upload);
router.put('/update/', isLogIn, updateProductDetails,upload);
router.post('/register', registerUser)

router.get('/:id', isLogIn, getProductsById);
router.delete('/delete/:id', isLogIn,deleteProductDetails);

router.post('/login', loginUser)

export default router;
