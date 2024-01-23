var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var mongoose = require('mongoose');

const uri = "mongodb://localhost:27017/abc"

const connectionParams = {
  useNewUrlParser : true,
  useUnifiedTopology: true
};
mongoose.connect(uri, connectionParams).then(() => {
  console.info("Connected to the DB");
}).catch((e) => {
  console.log("Error:", e);
});

//chú ý thứ tự import
require('./components/categories/model');
require('./components/products/model');
require('./components/users/model');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/products');
const categoriesRouter = require('./routes/categories')
const bodyParser = require('body-parser');
const cpannelRouter = require('./routes/cpannel');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());//<<<<<<<<<<<<<<<<<<<<<<<<
app.use(bodyParser.json());

// http://localhost:3000/
app.use('/', indexRouter);

// http://localhost:3000/users
app.use('/users', usersRouter);

// http://localhost:3000/products
app.use('/products', productRouter);

// http://localhost:3000/categories
app.use('/categories', categoriesRouter);
// http://localhost:3000/cpannel
app.use('/cpannel', cpannelRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// http://localhost:3000/phep-toan/
// http://localhost:3000/tinh-toan/10/20/cong




// req : request (yêu cầu)
// + body: dữ liệu gửi lên
// + params: dữ liệu trên url
//  + query: dữ liệu trên url
// res : response (phản hồi)
// + json: trả về dữ liệu dạng json
// + send: trả về dữ liệu dạng text
// + render: trả về dữ liệu dạng html
// next: chuyển tiếp sang middleware tiếp theo
