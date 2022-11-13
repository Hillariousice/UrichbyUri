"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkFileType = exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
// Set storage Engine
const storage = multer_1.default.diskStorage({
    destination: './public/uploads',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '- ' + Date.now() +
            path_1.default.extname(file.originalname));
    }
});
//init upload
exports.upload = (0, multer_1.default)({
    storage: storage,
    limits: { fileSize: 10000 },
    fileFilter: (req, file, cb) => {
        checkFileType(file, cb);
    }
}).single('productimage');
function checkFileType(file, cb) {
    //allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // checks ext
    const exname = filetypes.test(path_1.default.extname(file.originalname).toLowerCase());
    // check mime
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && exname) {
        return cb(null, true);
    }
}
exports.checkFileType = checkFileType;
