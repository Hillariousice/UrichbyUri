const  createError = require('http-errors');
import express, { Express, Request, Response, NextFunction} from 'express';
import { HttpError } from 'http-errors';
import dotenv from 'dotenv';
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
import methodOverride from 'method-override';
import indexRouter from './routes/index';
import usersRouter from './routes/users';
const productRouter = require('./routes/product');

const dotENV = dotenv.config()

// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

const app = express();

// view engine setup

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(),'views'));
app.disable('etag')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(process.cwd(),'./public')));
app.use(methodOverride('_method'));



// const products = [
//   {
//       name: "Ankara",
//       image: "https://product image here",
//       brand: "Nike",
//       category: "men shoes",
//       description: "Buy this nice product",
//       price: 4200,
//       countInStock: 7,
//       rating: 6,
//       numReviews: 5,
//       },

//       {
//           name: "Sleeve",
//           image: "https://product image here",
//           brand: "Nike",
//           category: "men shoes",
//           description: "Buy this nice product",
//           price: 4200,
//           countInStock: 7,
//           rating: 6,
//           numReviews: 5,
//           },

//           {
//               name: "Agbada",
//               image: "https://product image here",
//               brand: "Nike",
//               category: "men shoes",
//               description: "Buy this nice product",
//               price: 4200,
//               countInStock: 7,
//               rating: 6,
//               numReviews: 5,
//               }
// ]

app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.use('/products', (req:Request, res:Response, next:NextFunction) => {
//   res.render('product.ejs', {products: products})
// })
// app.use('/product', productRouter);

// catch 404 and forward to error handler
// app.use(function(req: Request, res: Response, next: NextFunction) {
//   next(createError(404));
// });

// // app.post('/register', registerUser)
// // error handler
// app.use(function(err: HttpError, req: Request, res: Response, next: NextFunction) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   const errorStatusCode = err.status ? err.status : 500
//   res.status(errorStatusCode)
//   res.status(err.status || 500);
// });

app.listen(process.env.PORT,()=>{
  console.log(` running on port ${process.env.PORT}`)
})
//export default app;