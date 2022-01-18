var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var inquiryRouter= require('./routes/inquiry');
var trainerinfoRouter=require('./routes/trainerinfo');
var productsdetailsRouter=require('./routes/productsdetails');
var expensesRouter=require('./routes/expenses');
var addproductRouter=require('./routes/addproduct');
var subscriptionRouter=require('./routes/subscription');
var memberRouter=require('./routes/member');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/inquiry',inquiryRouter);
app.use('/trainerinfo',trainerinfoRouter);
app.use('/productsdetails',productsdetailsRouter);
app.use('/expenses',expensesRouter);
app.use('/addproduct',addproductRouter);
app.use('/subscription',subscriptionRouter);
app.use('/member',memberRouter);

module.exports = app;
