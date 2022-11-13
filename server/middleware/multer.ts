import { any } from "joi"
import multer from "multer"
import path from "path"



// Set storage Engine
const storage = multer.diskStorage({
    destination:'./public/uploads',
    filename: function(req,file,cb){
        cb(null,file.fieldname+ '- '+ Date.now()+ 
        path.extname(file.originalname))
    }
})

//init upload
export const upload = multer({
    storage: storage,
    limits:{fileSize:10000} ,
    fileFilter:(req,file,cb)=>{
        checkFileType(file,cb)
    }
  } 
).single('productimage')



 export function checkFileType(file: Express.Multer.File, cb: multer.FileFilterCallback) {
    //allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // checks ext
    const exname = filetypes.test(path.extname(file.originalname).toLowerCase())
    // check mime
    const mimetype = filetypes.test(file.mimetype)
    if(mimetype && exname){
        return cb(null, true)
    }
}



