"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("../controllers/controller");
const auth_1 = require("../middleware/auth");
const multer_1 = require("../middleware/multer");
// const app = require('../app');
// import app from '../app';
const router = express_1.default.Router();
/* GET users listing. */
router.get('/', auth_1.isLogIn, controller_1.getProducts);
router.get('/register', controller_1.getRegisterPage);
router.get('/login', controller_1.getLoginPage);
router.get('/products/delete/:id', auth_1.isLogIn, controller_1.getProductToDelete);
router.get('/update', auth_1.isLogIn, controller_1.getUpdatePage);
router.get('/update/:id', auth_1.isLogIn, controller_1.getUpdatePageById);
router.get('/logout', controller_1.logout);
router.get('/add', auth_1.isLogIn, controller_1.getAddProductPage);
router.post('/add', auth_1.isLogIn, controller_1.addProduct, multer_1.upload);
router.put('/update/', auth_1.isLogIn, controller_1.updateProductDetails, multer_1.upload);
router.post('/register', controller_1.registerUser);
router.get('/:id', auth_1.isLogIn, controller_1.getProductsById);
router.delete('/delete/:id', auth_1.isLogIn, controller_1.deleteProductDetails);
router.post('/login', controller_1.loginUser);
exports.default = router;
